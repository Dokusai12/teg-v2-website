import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { ProofBar } from '@/components/industry/ProofBar';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { TicketCheckoutMockup } from '@/components/industry/mockups/TicketCheckoutMockup';
import { ContentSection } from '@/components/ContentSection';

export default function EventsIndustryPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Industry · Events"
          headline="Add a high-margin revenue stream to every ticket sold"
          subheading="Increase margin per transaction without changing ticket pricing. Refund Shield allows ticketing platforms and agents to monetise flexibility demand, significantly increasing revenue per booking."
          keyPoints={[
            'High-margin ancillary revenue on every ticket',
            'Significant uplift in revenue per transaction',
            'Increase conversion on higher-value events',
            'No impact on ticket pricing or event operations',
          ]}
          mockup={<TicketCheckoutMockup />}
        />

        <ProofBar
          stats={[
            { value: '+10–15%', label: 'Increase in basket value' },
            { value: '15–25%', label: 'Attach rates' },
            { value: 'Fully managed', label: 'Refund service' },
            { value: 'Zero', label: 'Impact on logistics' },
          ]}
        />

        <ContentSection
          eyebrow="Deep dive"
          title="Built for ticketing economics"
          description="For ticket agents and platforms operating on tight margins, Refund Shield introduces a scalable, high-margin revenue stream that materially improves profitability per booking."
          items={[]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
