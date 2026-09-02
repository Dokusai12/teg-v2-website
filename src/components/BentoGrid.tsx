import { Section, SectionHeading } from '@/components/system/Section';
import { BentoCell } from '@/components/system/BentoCell';
import {
  CheckoutCard,
  BaggageClaimFlow,
  FlightStatusStrip,
  BundleStack,
} from '@/components/system/visuals';

export function BentoGrid() {
  return (
    <Section id="products">
      <SectionHeading
        eyebrow="Products"
        title="A unified suite of revenue products"
        description="Four products, one integration, one contract. Turn them on individually or bundle them together — every one is designed to convert inside your existing checkout."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(0,auto)]">
        {/* Hero cell — ink, spans two columns */}
        <BentoCell
          to="/products/refund-shield"
          variant="ink"
          eyebrow="Flagship"
          title="Refund Shield"
          description="Let customers upgrade to a refundable booking at checkout. They get certainty if plans change; you keep a high-margin share of every sale — with zero risk on your balance sheet."
          cta="Explore Refund Shield"
          className="lg:col-span-2 dl1"
          layout="split"
          visual={<CheckoutCard />}
        />

        {/* Tall tinted cell */}
        <BentoCell
          to="/products/bundles"
          variant="tinted"
          eyebrow="Bundle"
          title="Bundles"
          description="Package Refund, Baggage and Air Shield into one discounted offer. Higher perceived value for the traveller, materially higher revenue per booking for you."
          cta="See how bundling works"
          className="dl2"
          visual={<BundleStack />}
        />

        {/* Two wide cells */}
        <BentoCell
          to="/products/baggage-shield"
          eyebrow="Add-on"
          title="Baggage Shield"
          description="Cash compensation when bags are lost or delayed, assessed automatically so your support team never touches a claim."
          cta="Explore Baggage Shield"
          className="dl3"
          visual={<BaggageClaimFlow />}
        />

        <BentoCell
          to="/products/air-shield"
          eyebrow="Disruption"
          title="Air Shield"
          description="Delay and disruption cover priced in real time, integrated into your booking flow and settled without a claims form."
          cta="Explore Air Shield"
          className="dl4"
          visual={<FlightStatusStrip />}
        />

        {/* Glass capability cell */}
        <BentoCell
          variant="glass"
          eyebrow="One integration"
          title="Built to sit inside your checkout"
          description="A single API and a hosted UI layer that inherits your styling. Multi-currency, multi-language, and localised pricing from day one — nothing looks bolted on."
          className="dl5"
          visual={
            <div className="code-block rounded-xl p-4">
              <pre className="overflow-x-auto">
                <code>
                  <span className="cc">// one call, all products</span>
                  {'\n'}
                  <span className="ck">const</span> offers = <span className="ck">await</span> tego.
                  <span className="cp">quote</span>({'{'}
                  {'\n  '}booking: <span className="cs">'BK-48219'</span>,
                  {'\n  '}value: <span className="cn">412.00</span>,
                  {'\n  '}currency: <span className="cs">'GBP'</span>
                  {'\n'}
                  {'}'});
                </code>
              </pre>
            </div>
          }
        />
      </div>
    </Section>
  );
}
