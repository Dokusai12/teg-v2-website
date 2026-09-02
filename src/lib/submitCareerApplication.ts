/**
 * Sends a career application (multipart FormData including CV).
 * FormData keys: jobId, jobTitle, name, email, phone (optional), message (optional),
 * turnstileToken (when configured), cv (File)
 */
export async function submitCareerApplication(formData: FormData): Promise<void> {
  const res = await fetch("/api/careers/apply", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    let msg = "Request failed";
    try {
      const j = (await res.json()) as { error?: string };
      if (j.error) msg = j.error;
    } catch {
      /* ignore */
    }
    throw new Error(msg);
  }
}
