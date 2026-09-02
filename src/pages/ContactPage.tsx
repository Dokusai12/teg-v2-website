import { useState } from 'react';
import { Mail, Send, Loader2, ChevronRight, Clock, Building2, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section, SectionHeading } from '@/components/system/Section';
import { PageHero } from '@/components/system/PageHero';
import { FaqAccordion } from '@/components/system/FaqAccordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { submitContactForm } from '@/lib/submitContactForm';

const field =
  'w-full rounded-xl border border-ink-border bg-ink px-4 text-base text-ink-foreground transition-all duration-2 ease-brand placeholder:text-ink-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 md:text-[14px]';

const expectations = [
  {
    icon: Clock,
    title: 'A reply within one business day',
    desc: 'A real person from the commercial team, not an automated sequence.',
  },
  {
    icon: Building2,
    title: 'A tailored revenue model',
    desc: 'We size the opportunity against your booking volumes and basket values.',
  },
  {
    icon: Check,
    title: 'A clear path to live',
    desc: 'Integration scope, timeline and commercials laid out before you commit.',
  },
];

const faqs = [
  {
    question: 'Who should get in touch?',
    answer:
      'Commercial, product and partnership leads at travel platforms, OTAs, carriers, ticketing and booking businesses. If you own a checkout, we can help.',
  },
  {
    question: 'How long does integration take?',
    answer:
      'Most partners are live in days rather than months. It is a REST integration with a sandbox, reference UI and support from our engineers throughout.',
  },
  {
    question: 'What does it cost us?',
    answer:
      'Nothing upfront. Our products are revenue share based, so you earn on every protected booking and carry no operational cost.',
  },
  {
    question: 'Do we handle customer claims?',
    answer:
      'No. We operate the full customer journey after purchase, including support and claims handling, so your team is never in the loop.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

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
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Try again or email hello@tego-group.com.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const formCard = submitted ? (
    <div className="rounded-2xl border border-ink-border bg-ink-elevated p-10 text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
        <Send className="h-6 w-6 text-accent-strong" />
      </div>
      <h2 className="t-h3 text-ink-foreground">Message sent</h2>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
        Thank you for reaching out. We&apos;ll be in touch within one business day.
      </p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-ink-border bg-ink-elevated p-7 md:p-9"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-ink-foreground">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`${field} h-11`}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-ink-foreground">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={255}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`${field} h-11`}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-[13px] font-medium text-ink-foreground">
          Company
        </label>
        <input
          id="company"
          name="organization"
          type="text"
          autoComplete="organization"
          maxLength={100}
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={`${field} h-11`}
          placeholder="Your company name"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-ink-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          required
          maxLength={1000}
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} resize-none py-3`}
          placeholder="Tell us about your booking flow and what you're looking for..."
          enterKeyHint="send"
        />
      </div>
      {submitError ? <p className="text-center text-[13px] text-destructive">{submitError}</p> : null}
      <button
        type="submit"
        disabled={submitting}
        className="press focus-ring flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-[15px] font-medium text-accent-foreground transition-colors duration-2 ease-brand hover:bg-accent-strong disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Contact sales <ChevronRight className="arrow-slide h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-center text-[12px] text-ink-muted">We&apos;ll respond within one business day.</p>
    </form>
  );

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact sales"
          crumb="Contact"
          title="Let's explore how Tego can drive revenue across your booking flow"
          lead="Tell us about your business and we'll show you how our embedded products unlock new revenue at checkout, with no operational load on your team."
          aside={formCard}
        >
          <div className="r dl3 mt-9 flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15">
              <Mail className="h-4 w-4 text-accent-strong" />
            </span>
            <div>
              <p className="text-[14px] font-medium text-ink-foreground">Email us directly</p>
              <a
                href="mailto:hello@tego-group.com"
                className="text-[14px] text-ink-muted transition-colors duration-2 ease-brand hover:text-ink-foreground"
              >
                hello@tego-group.com
              </a>
            </div>
          </div>
        </PageHero>

        <Section tone="muted">
          <SectionHeading
            eyebrow="What happens next"
            title="From first message to live revenue"
            description="A short, commercially focused process designed around your team's time."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {expectations.map((e, i) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className={`r dl${i + 1} surface-1 lift p-7`}>
                  <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08]">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-[16px] font-semibold text-foreground">{e.title}</h3>
                  <p className="t-small mt-2">{e.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="rl lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="t-eyebrow mb-3">FAQ</p>
                <h2 className="t-h2 text-foreground">Before you get in touch</h2>
                <p className="t-body mt-4">The questions partner teams ask us most often.</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
