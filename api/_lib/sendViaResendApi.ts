/**
 * Send email via Resend HTTP API (same contract as curl in docs).
 * Avoids the `resend` npm bundle in this route, which can break on Vercel + ESM.
 * @see https://resend.com/docs/api-reference/emails/send-email
 */
const RESEND_EMAILS_URL = "https://api.resend.com/emails";

export type SendViaResendParams = {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
};

export type SendViaResendResult =
  | { ok: true; id: string }
  | { ok: false; message: string; statusCode: number };

export async function sendEmailViaResendApi(
  apiKey: string,
  params: SendViaResendParams
): Promise<SendViaResendResult> {
  const body: Record<string, unknown> = {
    from: params.from,
    to: params.to,
    subject: params.subject,
    html: params.html,
  };
  if (params.replyTo) {
    body.reply_to = params.replyTo;
  }

  const res = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const raw = await res.text();
  let json: { id?: string; message?: string } = {};
  if (raw) {
    try {
      json = JSON.parse(raw) as { id?: string; message?: string };
    } catch {
      /* non-JSON error body */
    }
  }

  if (!res.ok) {
    const message =
      typeof json.message === "string" && json.message.length > 0
        ? json.message.slice(0, 280)
        : raw.slice(0, 280) || res.statusText || "Failed to send email.";
    return { ok: false, message, statusCode: res.status };
  }

  return { ok: true, id: typeof json.id === "string" ? json.id : "" };
}
