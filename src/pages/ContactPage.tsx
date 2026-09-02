import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronRight, Send, Mail, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/lib/submitContactForm';

export default function ContactPage() {
  const [ready, setReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  useEffect(() => { const t = setTimeout(() => setReady(true), 120); return () => clearTimeout(t); }, []);
  useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        message: form.message.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Try again or email hello@tego-group.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] -top-48 -right-48"
              style={{ background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))', animation: 'mesh-move 20s ease-in-out infinite' }} />
            <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] top-1/2 -left-64"
              style={{ background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))', animation: 'mesh-move 25s ease-in-out infinite reverse' }} />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left - Info */}
              <div>
                <p className={`hin text-accent text-[14px] font-medium mb-3 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>Contact Sales</p>
                <h1 className={`hin max-lg:text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-foreground ${!ready && 'opacity-0'}`}
                  style={{ animationDelay: '0.2s' }}>
                  Let's explore how Tego can drive revenue across your booking flow
                </h1>
                <p className={`hin text-[17px] text-muted-foreground max-w-md mt-4 leading-relaxed ${!ready && 'opacity-0'}`}
                  style={{ animationDelay: '0.35s' }}>
                  Tell us about your business and we'll show you how our embedded solutions can unlock new revenue at checkout.
                </p>

                <div className={`hin mt-10 space-y-5 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4.5 h-4.5 text-accent" />
                    </span>
                    <div>
                      <p className="text-[14px] font-medium text-foreground">Email us directly</p>
                      <a href="mailto:hello@tego-group.com" className="text-[14px] text-muted-foreground hover:text-accent transition-colors">hello@tego-group.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className={`hin ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                {submitted ? (
                  <div className="rounded-2xl border border-border bg-card p-10 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                      <Send className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message sent</h3>
                    <p className="text-[15px] text-muted-foreground">Thank you for reaching out. We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-medium text-foreground mb-1.5">Full name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-medium text-foreground mb-1.5">Work email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        required
                        maxLength={255}
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[13px] font-medium text-foreground mb-1.5">Company</label>
                      <input
                        id="company"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        maxLength={100}
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full h-11 rounded-lg border border-border bg-background px-4 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[13px] font-medium text-foreground mb-1.5">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        autoComplete="off"
                        required
                        maxLength={1000}
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base md:text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                        placeholder="Tell us about your business and what you're looking for..."
                        enterKeyHint="send"
                      />
                    </div>
                    {submitError ? (
                      <p className="text-[13px] text-destructive text-center">{submitError}</p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-12 rounded-full bg-foreground text-primary-foreground text-[15px] font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Contact sales <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[12px] text-muted-foreground/60 text-center">
                      We'll respond within one business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
