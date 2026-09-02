import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Rocket, LineChart, Globe2, HeartHandshake } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Section, SectionHeading } from '@/components/system/Section';
import { PageHero } from '@/components/system/PageHero';
import { CtaLink } from '@/components/system/CtaLink';
import { StatBlock } from '@/components/system/StatBlock';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CAREER_JOBS } from '@/data/careers';

const values = [
  {
    icon: Rocket,
    title: 'Ship, then sharpen',
    desc: 'We get products in front of real bookings quickly, then improve them against live performance data.',
  },
  {
    icon: LineChart,
    title: 'Commercially honest',
    desc: 'Every proposal is judged on the revenue and customer outcome it actually produces, not on the pitch.',
  },
  {
    icon: Globe2,
    title: 'Built for global partners',
    desc: 'Our partners operate across markets and currencies. We think that way from the first line of scope.',
  },
  {
    icon: HeartHandshake,
    title: 'Small team, real ownership',
    desc: 'You own outcomes end to end, with direct access to founders and the partners you work with.',
  },
];

const benefits = [
  'Competitive base plus uncapped commission on commercial roles',
  'Remote-friendly working with regular team time in person',
  'Direct exposure to founders, partners and product decisions',
  'Budget for training, tooling and conferences',
  'Clear progression tied to measurable outcomes',
  'Modern kit and the software you need to do the job well',
];

const hiringSteps = [
  { step: '01', title: 'Intro call', desc: 'A 30-minute conversation about your experience and what you want next.' },
  { step: '02', title: 'Working session', desc: 'A practical exercise or deep dive relevant to the role, no trick questions.' },
  { step: '03', title: 'Founder conversation', desc: 'Meet a founder, talk strategy, ask us anything about the business.' },
  { step: '04', title: 'Offer', desc: 'Clear terms, fast decision, and a structured first 30 days.' },
];

export default function CareersPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Join the team powering revenue for global travel platforms"
          lead="We embed high-performing ancillary products directly into the checkout flows of leading booking platforms. If you care about great products and measurable impact, we'd like to meet you."
          actions={
            <>
              <CtaLink to="#roles" size="lg">
                See open roles
              </CtaLink>
              <a
                href="mailto:hello@tego-group.com"
                className="press focus-ring inline-flex items-center justify-center rounded-full border border-ink-border px-6 py-3.5 text-[15px] font-medium text-ink-foreground no-underline transition-colors duration-2 ease-brand hover:bg-ink-elevated"
              >
                Send a speculative application
              </a>
            </>
          }
          aside={
            <div className="grid gap-4 sm:grid-cols-2">
              <StatBlock tone="ink" value={`${CAREER_JOBS.length}`} label="Open roles right now" />
              <StatBlock tone="ink" value="Remote" label="Friendly, with regular team time together" />
              <StatBlock tone="ink" value="Founder-led" label="Direct access to decision makers" />
              <StatBlock tone="ink" value="2 weeks" label="Typical time from first call to offer" />
            </div>
          }
        />

        <Section tone="muted">
          <SectionHeading
            eyebrow="How we work"
            title="A small team with unusually large scope"
            description="We are early enough that your work is visible in the numbers, and established enough that you are selling and shipping to real partners from week one."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className={`r dl${i + 1} surface-1 lift flex flex-col p-7`}>
                  <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08]">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-[16px] font-semibold text-foreground">{v.title}</h3>
                  <p className="t-small mt-2">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="roles">
          <SectionHeading
            eyebrow="Open positions"
            title="Roles we're hiring for"
            description="Don't see the right fit? Send us a note anyway — we hire ahead of the roadmap when we meet the right person."
          />
          <ul className="mt-12 flex flex-col gap-4">
            {CAREER_JOBS.map((job, i) => (
              <li key={job.id} className={`r dl${Math.min(i + 1, 6)}`}>
                <Link
                  to={`/careers/${job.id}`}
                  className="group surface-1 lift flex flex-col gap-3 p-6 no-underline sm:flex-row sm:items-start sm:justify-between md:p-7"
                >
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-semibold text-foreground transition-colors duration-2 ease-brand group-hover:text-accent">
                      {job.title}
                    </h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {job.location}
                    </p>
                    <p className="t-small mt-2 max-w-2xl">{job.summary}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[14px] font-medium text-accent sm:mt-1">
                    View role &amp; apply
                    <ChevronRight className="arrow-slide h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section tone="ink" grid>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="r t-eyebrow mb-3 text-accent-strong">What you get</p>
              <h2 className="r dl1 t-h2 text-ink-foreground">Set up to do the best work of your career</h2>
              <p className="r dl2 t-lead mt-4 text-ink-muted">
                The practical things that make a small team work: clarity, ownership, and the tools to move fast.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {benefits.map((b, i) => (
                <li
                  key={b}
                  className={`rs dl${Math.min(i + 1, 6)} rounded-xl border border-ink-border bg-ink-elevated p-5 text-[14px] leading-relaxed text-ink-muted`}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="muted">
          <SectionHeading
            eyebrow="Hiring process"
            title="Four steps, no surprises"
            description="We keep the process short and tell you where you stand at every stage."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((s, i) => (
              <li key={s.step} className={`r dl${i + 1} surface-1 lift p-7`}>
                <span className="t-num text-[13px] font-semibold text-accent">{s.step}</span>
                <h3 className="mt-3 text-[16px] font-semibold text-foreground">{s.title}</h3>
                <p className="t-small mt-2">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
