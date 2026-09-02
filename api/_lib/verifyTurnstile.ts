import { normalizeEnvValue } from "./html.js";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export function isTurnstileConfigured(): boolean {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  return Boolean(secret && String(secret).trim());
}

/** Verify a Turnstile token with Cloudflare. Returns false on any failure. */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  const rawSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!rawSecret || !String(rawSecret).trim()) {
    return true;
  }

  if (!token.trim()) {
    return false;
  }

  const body = new URLSearchParams({
    secret: normalizeEnvValue(String(rawSecret)),
    response: token.trim(),
  });
  if (remoteIp) {
    body.set("remoteip", remoteIp.split(",")[0]?.trim() ?? remoteIp);
  }

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) return false;
    const data = (await res.json()) as TurnstileVerifyResponse;
    return data.success === true;
  } catch (e) {
    console.error("Turnstile verify error:", e);
    return false;
  }
}
