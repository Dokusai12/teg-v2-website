import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { ProofBar } from '@/components/industry/ProofBar';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { FareComparisonMockup } from '@/components/industry/mockups/FareComparisonMockup';
import { ContentSection } from '@/components/ContentSection';

export default function TransportIndustryPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Industry · Transport"
          headline="Unlock ancillary revenue across every journey"
          subheading="Offer optional flexibility at checkout, without disrupting your core product or operations. Refund Shield allows transport operators to monetise flexibility demand while maintaining control of pricing and distribution."
          keyPoints={[
            'Generate incremental ancillary revenue per passenger',
            'Capture price-sensitive customers who would otherwise not convert',
            'No operational disruption or changes to existing policies',
            'Works across air, rail, and coach booking flows',
          ]}
          mockup={<FareComparisonMockup />}
        />

        <ProofBar
          stats={[
            { value: '+10–15%', label: 'Increase in ancillary revenue' },
            { value: '15–25%', label: 'Attach rates' },
            { value: 'Fully managed', label: 'Refund service' },
            { value: 'Zero', label: 'Impact on fare rules' },
          ]}
        />

        <ContentSection
          eyebrow="Deep dive"
          title="Built for airline revenue strategy"
          description="Refund Shield sits alongside your fare families, not within them, allowing you to create incremental revenue, not cannibalisation."
          items={[
            { label: "Monetise customers who won't buy flexible fares" },
            { label: 'Protect premium fare upsell' },
            { label: 'Reduce booking abandonment at lower fare tiers' },
            { label: 'Introduce flexibility without restructuring fare classes' },
          ]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
