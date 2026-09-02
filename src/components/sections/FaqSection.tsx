import { Section, SectionHeading } from '@/components/system/Section';
import { FaqAccordion, type FaqItem } from '@/components/system/FaqAccordion';
import { CtaLink } from '@/components/system/CtaLink';

const items: FaqItem[] = [
  {
    question: 'How long does integration actually take?',
    answer:
      'Most partners are live in days. The fastest path is our hosted offer component — one script and one API call. Teams that want full control over the UI use the quote and purchase endpoints directly and typically ship in one sprint.',
  },
  {
    question: 'Do we take on any risk?',
    answer:
      'No. Products are underwritten and serviced through our regulated partners, so nothing sits on your balance sheet. You expose the offer and receive an agreed share of each sale.',
  },
  {
    question: 'Who handles claims and customer support?',
    answer:
      'We do. Claims are assessed automatically wherever possible — a delayed bag or a disrupted flight is verified against live data rather than a form — and anything that needs a human is handled by our team, not yours.',
  },
  {
    question: 'How is pricing set?',
    answer:
      'Dynamically, per booking, based on trip value, route and product mix. Pricing and placement are continuously tested so attach rate and revenue per booking improve over time without changes on your side.',
  },
  {
    question: 'Which markets and currencies are supported?',
    answer:
      'Over 50 markets, with multi-currency pricing and localised copy. Regulatory and disclosure requirements are handled per market so the same integration works everywhere you sell.',
  },
  {
    question: 'Can we run only one product?',
    answer:
      'Yes. Each product runs standalone, and you can add others later without a second integration. Most partners start with Refund Shield and layer in Baggage and Air Shield once it is performing.',
  },
];

export function FaqSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Questions"
            title="What partners ask before signing"
            description="If something is not covered here, our commercial and engineering teams answer directly — no discovery call required."
          />
          <div className="r dl2 mt-8">
            <CtaLink to="/contact" variant="outline">
              Ask us anything
            </CtaLink>
          </div>
        </div>

        <div className="r dl1">
          <FaqAccordion items={items} />
        </div>
      </div>
    </Section>
  );
}
