import { Section, SectionHeading } from '@/components/system/Section';
import { StatBlock } from '@/components/system/StatBlock';

const stats = [
  {
    value: '12+',
    countTo: 12,
    suffix: '+',
    label: 'Years building embedded revenue infrastructure for travel and ticketing.',
  },
  {
    value: '50+',
    countTo: 50,
    suffix: '+',
    label: 'Markets served, multi-currency and fully localised out of the box.',
  },
  {
    value: '10–15%',
    label: 'Typical uplift in basket value once the suite is live. [placeholder — confirm range]',
  },
  {
    value: '99.9%',
    countTo: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Platform uptime across quoting, checkout and settlement.',
  },
];

export function Stats() {
  return (
    <Section id="customers" tone="muted">
      <SectionHeading
        align="center"
        eyebrow="Proof"
        title="Results at scale"
        description="Numbers from a platform that has been running ancillary revenue programmes for over a decade."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatBlock
            key={s.value}
            value={s.value}
            countTo={s.countTo}
            decimals={s.decimals}
            suffix={s.suffix}
            label={s.label}
            className={`r dl${i + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
