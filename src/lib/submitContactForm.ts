export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      company: payload.company,
      message: payload.message,
    }),
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
