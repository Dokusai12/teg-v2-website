import { Section, SectionHeading } from '@/components/system/Section';
import { StepFlow, type FlowStep } from '@/components/system/StepFlow';
import { CtaLink } from '@/components/system/CtaLink';

const steps: FlowStep[] = [
  {
    title: 'Connect',
    description:
      'One API call from your booking engine returns priced, localised offers. Use our hosted UI or render the offer yourself — it inherits your styling either way.',
    detail: 'POST /v1/quote → offers[]',
  },
  {
    title: 'Convert',
    description:
      'The offer appears at the moment of highest intent. Pricing, copy and placement are continuously tested so attach rate improves without work on your side.',
    detail: 'Attach rate 34.2% · +8.3% MoM',
  },
  {
    title: 'Collect',
    description:
      'You keep an agreed share of every sale, reconciled automatically. Claims, servicing and regulatory obligations sit with us, not with your support team.',
    detail: 'Settlement · monthly, automated',
  },
];

export function HowItWorks() {
  return (
    <Section tone="ink" grid>
      <SectionHeading
        tone="ink"
        eyebrow="How it works"
        title="Three steps from integration to revenue"
        description="No new systems to run, no risk to underwrite, no claims desk to staff. You expose the offer; we handle everything behind it."
        actions={
          <CtaLink to="/contact" variant="primary">
            Talk to sales
          </CtaLink>
        }
      />

      <div className="r mt-14">
        <StepFlow steps={steps} tone="ink" />
      </div>
    </Section>
  );
}
