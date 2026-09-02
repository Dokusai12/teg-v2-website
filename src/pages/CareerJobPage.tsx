import { useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JobDescription } from "@/components/careers/JobDescription";
import { getCareerJob } from "@/data/careers";
import { submitCareerApplication } from "@/lib/submitCareerApplication";
import { ArrowLeft, Loader2, Send, Upload } from "lucide-react";

const CV_MAX_BYTES = 5 * 1024 * 1024;
const CV_ACCEPT = ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? "";

function validateCvFile(file: File | null): string | null {
  if (!file) return "Please attach your CV.";
  if (file.size > CV_MAX_BYTES) return "CV must be 5MB or smaller.";
  const ok =
    file.type === "application/pdf" ||
    file.type === "application/msword" ||
    file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  if (!ok) return "Please upload a PDF or Word document (.pdf, .doc, .docx).";
  return null;
}

export default function CareerJobPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? getCareerJob(jobId) : undefined;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setCvFile(f);
    setFileError(f ? validateCvFile(f) : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const err = validateCvFile(cvFile);
    if (err) {
      setFileError(err);
      return;
    }
    setSubmitting(true);
    try {
      let turnstileToken = "";
      if (TURNSTILE_SITE_KEY) {
        turnstileRef.current?.execute();
        turnstileToken = (await turnstileRef.current?.getResponsePromise()) ?? "";
        if (!turnstileToken) {
          setSubmitError("Verification failed. Please try again.");
          return;
        }
      }

      const fd = new FormData();
      fd.set("jobId", job.id);
      fd.set("jobTitle", job.title);
      fd.set("name", name.trim());
      fd.set("email", email.trim());
      fd.set("phone", phone.trim());
      fd.set("message", message.trim());
      fd.set("website", "");
      if (turnstileToken) fd.set("turnstileToken", turnstileToken);
      fd.set("cv", cvFile!);
      await submitCareerApplication(fd);
      setSubmitted(true);
      turnstileRef.current?.reset();
    } catch (err) {
      turnstileRef.current?.reset();
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email hello@tego-group.com.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-4 lg:px-5">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All open roles
          </Link>

          <header className="mb-10">
            <p className="text-accent text-[14px] font-medium mb-2">{job.location}</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {job.title}
            </h1>
          </header>

          <JobDescription blocks={job.blocks} />

          <section id="apply" className="mt-16 pt-12 border-t border-border scroll-mt-28">
            <h2 className="text-xl font-semibold text-foreground mb-2">Apply for this role</h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              Upload your CV (PDF or Word, max 5MB). Your application is sent securely to our team.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <Send className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Application received</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Thank you for applying for {job.title}. We&apos;ve emailed your details and CV to our team and will
                  be in touch. You can also reach us at{" "}
                  <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">
                    hello@tego-group.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label htmlFor="apply-name" className="block text-[13px] font-medium text-foreground mb-1.5">
                      Full name
                    </label>
                    <input
                      id="apply-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={120}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 rounded-lg border border-border bg-background px-4 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-email" className="block text-[13px] font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      id="apply-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      maxLength={255}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 rounded-lg border border-border bg-background px-4 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-phone" className="block text-[13px] font-medium text-foreground mb-1.5">
                      Phone <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      id="apply-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={40}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 rounded-lg border border-border bg-background px-4 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      placeholder="+44 …"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="apply-message" className="block text-[13px] font-medium text-foreground mb-1.5">
                    Cover note <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="apply-message"
                    name="message"
                    autoComplete="off"
                    maxLength={4000}
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                    placeholder="Anything you'd like us to know…"
                  />
                </div>
                <div>
                  <label htmlFor="apply-cv" className="block text-[13px] font-medium text-foreground mb-1.5">
                    CV <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="apply-cv"
                      name="cv"
                      type="file"
                      accept={CV_ACCEPT}
                      required
                      onChange={onFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div
                      className={`flex items-center gap-3 rounded-lg border border-dashed px-4 py-4 transition-colors ${
                        fileError ? "border-destructive/60 bg-destructive/5" : "border-border bg-background"
                      }`}
                    >
                      <Upload className="w-5 h-5 text-muted-foreground shrink-0" />
                      <div className="min-w-0 text-left">
                        <p className="text-[14px] text-foreground font-medium">
                          {cvFile ? cvFile.name : "Choose PDF or Word file"}
                        </p>
                        <p className="text-[12px] text-muted-foreground">Max 5MB · .pdf, .doc, .docx</p>
                      </div>
                    </div>
                  </div>
                  {fileError ? <p className="text-[13px] text-destructive mt-1.5">{fileError}</p> : null}
                </div>
                {submitError ? <p className="text-[13px] text-destructive">{submitError}</p> : null}
                {TURNSTILE_SITE_KEY ? (
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={TURNSTILE_SITE_KEY}
                    options={{
                      execution: "execute",
                      appearance: "interaction-only",
                      size: "invisible",
                    }}
                  />
                ) : null}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-full bg-foreground text-primary-foreground text-[15px] font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit application <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
