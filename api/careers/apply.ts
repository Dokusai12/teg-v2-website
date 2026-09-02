import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import formidable, { type Fields, type Files } from "formidable";
import fs from "node:fs/promises";
import { applyApiCors } from "../_lib/cors.js";
import { escapeHtml, getEnvOrThrow, getOptionalEnv } from "../_lib/html.js";
import { isTurnstileConfigured, verifyTurnstileToken } from "../_lib/verifyTurnstile.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_FILE = 5 * 1024 * 1024;

function firstField(fields: Fields, key: string): string {
  const v = fields[key];
  if (Array.isArray(v)) return String(v[0] ?? "").trim();
  if (typeof v === "string") return v.trim();
  return "";
}

function sanitizeFilename(name: string): string {
  const base = name.replace(/[/\\?%*:|"<>]/g, "").slice(0, 180);
  return base || "cv.pdf";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  applyApiCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    let apiKey: string;
    let from: string;
    let to: string;
    try {
      apiKey = getEnvOrThrow("RESEND_API_KEY");
      from = getEnvOrThrow("RESEND_FROM_EMAIL");
      to = getOptionalEnv("RESEND_TO_EMAIL", "hello@tego-group.com");
    } catch (e) {
      console.error(e);
      res.status(503).json({ error: "Email is not configured on the server." });
      return;
    }

  const form = formidable({
    maxFileSize: MAX_FILE,
    maxFields: 20,
    allowEmptyFiles: false,
    filter: (part) => {
      if (!part.mimetype) return true;
      if (ALLOWED_MIME.has(part.mimetype)) return true;
      if (part.mimetype === "application/octet-stream" && part.originalFilename) {
        const lower = part.originalFilename.toLowerCase();
        return lower.endsWith(".pdf") || lower.endsWith(".doc") || lower.endsWith(".docx");
      }
      return false;
    },
  });

  let fields: Fields;
  let files: Files;
  try {
    [fields, files] = await form.parse(req);
  } catch (err) {
    console.error("Form parse error:", err);
    res.status(400).json({ error: "Invalid form data or file too large." });
    return;
  }

  const honeypot = firstField(fields, "website");
  if (honeypot) {
    res.status(400).json({ error: "Invalid submission." });
    return;
  }

  const turnstileToken = firstField(fields, "turnstileToken");
  if (isTurnstileConfigured()) {
    if (!turnstileToken) {
      res.status(400).json({ error: "Verification required. Please try again." });
      return;
    }
    const remoteIp =
      (typeof req.headers["x-forwarded-for"] === "string"
        ? req.headers["x-forwarded-for"]
        : undefined) ??
      (typeof req.socket?.remoteAddress === "string" ? req.socket.remoteAddress : undefined);
    const verified = await verifyTurnstileToken(turnstileToken, remoteIp);
    if (!verified) {
      res.status(403).json({ error: "Verification failed. Please try again." });
      return;
    }
  }

  const jobId = firstField(fields, "jobId");
  const jobTitle = firstField(fields, "jobTitle");
  const name = firstField(fields, "name");
  const email = firstField(fields, "email");
  const phone = firstField(fields, "phone");
  const cover = firstField(fields, "message");

  if (!jobId || !jobTitle || !name || !email) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  const cvList = files.cv;
  const cvFile = Array.isArray(cvList) ? cvList[0] : cvList;
  if (!cvFile || !cvFile.filepath) {
    res.status(400).json({ error: "CV file is required (PDF or Word)." });
    return;
  }

  const attachmentName = sanitizeFilename(cvFile.originalFilename || "cv.pdf");
  const mt = cvFile.mimetype || "";
  const allowedMime =
    ALLOWED_MIME.has(mt) ||
    (mt === "application/octet-stream" && attachmentName.toLowerCase().match(/\.(pdf|doc|docx)$/));
  if (!allowedMime) {
    res.status(400).json({ error: "Invalid file type." });
    return;
  }

  let buffer: Buffer;
  try {
    buffer = await fs.readFile(cvFile.filepath);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Could not read uploaded file." });
    return;
  } finally {
    try {
      await fs.unlink(cvFile.filepath);
    } catch {
      /* ignore */
    }
  }

  if (buffer.length > MAX_FILE) {
    res.status(400).json({ error: "File too large." });
    return;
  }

  const resend = new Resend(apiKey);
  const html = `
    <p><strong>New job application</strong></p>
    <p>
      <strong>Role:</strong> ${escapeHtml(jobTitle)}<br/>
      <strong>Job ID:</strong> ${escapeHtml(jobId)}<br/>
      <strong>Name:</strong> ${escapeHtml(name)}<br/>
      <strong>Email:</strong> ${escapeHtml(email)}<br/>
      <strong>Phone:</strong> ${escapeHtml(phone || "—")}
    </p>
    ${
      cover
        ? `<p><strong>Cover note:</strong></p><p>${escapeHtml(cover).replace(/\n/g, "<br/>")}</p>`
        : ""
    }
    <p>CV is attached.</p>
  `;

    let sendResult: Awaited<ReturnType<Resend["emails"]["send"]>>;
    try {
      sendResult = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `Application: ${jobTitle}`,
        html,
        attachments: [
          {
            filename: attachmentName,
            content: buffer,
          },
        ],
      });
    } catch (sendErr) {
      console.error("Resend send threw:", sendErr);
      res.status(502).json({ error: "Failed to send email." });
      return;
    }

    const { error } = sendResult;
    if (error) {
      console.error("Resend error:", error);
      const hint =
        typeof error.message === "string" && error.message.length > 0
          ? error.message.slice(0, 280)
          : "Failed to send email.";
      res.status(502).json({ error: hint });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("api/careers/apply:", err);
    if (!res.headersSent) {
      res.status(500).json({
        error: "Something went wrong. Try again or email hello@tego-group.com.",
      });
    }
  }
}
