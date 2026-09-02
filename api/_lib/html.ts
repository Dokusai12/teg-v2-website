/** Escape text for safe inclusion in HTML email bodies. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Trim and strip a single pair of surrounding quotes (common when pasting into Vercel env UI). */
export function normalizeEnvValue(raw: string): string {
  let v = raw.trim();
  if (v.length >= 2) {
    const a = v[0];
    const b = v[v.length - 1];
    if ((a === '"' && b === '"') || (a === "'" && b === "'")) {
      v = v.slice(1, -1).trim();
    }
  }
  return v;
}

export function getEnvOrThrow(name: string): string {
  const raw = process.env[name];
  if (!raw || !String(raw).trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  const v = normalizeEnvValue(String(raw));
  if (!v) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return v;
}

export function getOptionalEnv(name: string, fallback: string): string {
  const raw = process.env[name];
  if (!raw || !String(raw).trim()) return fallback;
  const v = normalizeEnvValue(String(raw));
  return v || fallback;
}
