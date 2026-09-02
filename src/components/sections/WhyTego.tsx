import { ShieldCheck, Gauge, Globe2, Wallet } from 'lucide-react';
import { Section, SectionHeading } from '@/components/system/Section';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Zero risk to you',
    body: 'Underwritten and serviced through regulated partners. Nothing touches your balance sheet, and nothing lands on your support desk.',
  },
  {
    icon: Gauge,
    title: 'Built for conversion',
    body: 'Offers are priced per booking and placed at peak intent, then tested continuously so attach rate keeps improving after launch.',
  },
  {
    icon: Globe2,
    title: 'Global from day one',
    body: 'Over 50 markets with multi-currency pricing, localised copy and per-market disclosure handled inside the same integration.',
  },
  {
    icon: Wallet,
    title: 'Margin you keep',
    body: 'A transparent revenue share on every sale, reconciled and settled automatically — visible in your dashboard in real time.',
  },
];

export function WhyTego() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Why Tego"
        title="Ancillary revenue without the operational weight"
        description="Most platforms know they are leaving money on the table. What stops them is risk, compliance and engineering time. We remove all three."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <article key={pillar.title} className={`surface-1 lift r dl${i + 1} p-7`}>
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
              <pillar.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
            </span>
            <h3 className="t-h3">{pillar.title}</h3>
            <p className="t-small mt-2.5">{pillar.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
