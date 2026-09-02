import type { VercelRequest, VercelResponse } from "@vercel/node";
import { applyApiCors } from "./_lib/cors.js";
import { escapeHtml, getEnvOrThrow, getOptionalEnv } from "./_lib/html.js";
import { sendEmailViaResendApi } from "./_lib/sendViaResendApi.js";

/** Read raw body when bodyParser is false (reliable on Vercel vs for-await on req). */
export const config = {
  api: {
    bodyParser: false,
  },
};

const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_COMPANY = 100;
const MAX_MESSAGE = 1000;

function readRawBody(req: VercelRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer | string) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, "utf8"));
    });
    req.on("end", () => {
      resolve(Buffer.concat(chunks).toString("utf8"));
    });
    req.on("error", reject);
  });
}

function sendJson(res: VercelResponse, status: number, payload: Record<string, unknown>) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  applyApiCors(res);

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  try {
    if (req.method !== "POST") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }

    let raw: string;
    try {
      raw = await readRawBody(req);
    } catch (e) {
      console.error("api/contact read body:", e);
      sendJson(res, 400, { error: "Could not read request body." });
      return;
    }

    let parsed: unknown;
    try {
      parsed = raw.trim() ? JSON.parse(raw) : null;
    } catch {
      sendJson(res, 400, { error: "Invalid JSON" });
      return;
    }

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      sendJson(res, 400, { error: "Invalid body" });
      return;
    }
    const body = parsed as Record<string, unknown>;

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      sendJson(res, 400, { error: "Name, email, and message are required." });
      return;
    }
    if (name.length > MAX_NAME || email.length > MAX_EMAIL || company.length > MAX_COMPANY || message.length > MAX_MESSAGE) {
      sendJson(res, 400, { error: "One or more fields are too long." });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      sendJson(res, 400, { error: "Invalid email address." });
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
      sendJson(res, 503, { error: "Email is not configured on the server." });
      return;
    }

    const html = `
    <p><strong>New contact form submission</strong></p>
    <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
    <strong>Email:</strong> ${escapeHtml(email)}<br/>
    <strong>Company:</strong> ${escapeHtml(company || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

    const sendResult = await sendEmailViaResendApi(apiKey, {
      from,
      to: [to],
      replyTo: email,
      subject: `Website contact: ${name}`,
      html,
    });

    if (!sendResult.ok) {
      console.error("Resend API:", sendResult.statusCode, sendResult.message);
      sendJson(res, 502, { error: sendResult.message });
      return;
    }

    sendJson(res, 200, { ok: true });
  } catch (err) {
    console.error("api/contact:", err);
    try {
      sendJson(res, 500, {
        error: "Something went wrong. Try again or email hello@tego-group.com.",
      });
    } catch (endErr) {
      console.error("api/contact could not send 500:", endErr);
    }
  }
}
