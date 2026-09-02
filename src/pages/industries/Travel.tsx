import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { ProofBar } from '@/components/industry/ProofBar';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { TravelCheckoutMockup } from '@/components/industry/mockups/TravelCheckoutMockup';
import { ContentSection } from '@/components/ContentSection';

export default function TravelIndustryPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Industry · Travel"
          headline="Turn every booking into high-margin revenue"
          subheading="Unlock a new ancillary stream across your entire booking flow, without changing your core product. Refund Shield converts hesitation into revenue by offering customers a simple, flexible refund option at checkout."
          keyPoints={[
            'Increase checkout conversion by reducing purchase friction',
            'Generate high-margin ancillary revenue on every booking',
            'Works across flights, packages, and multi-product baskets',
            'Seamless integration into existing booking flows',
          ]}
          mockup={<TravelCheckoutMockup />}
        />

        <ProofBar
          stats={[
            { value: '+10–15%', label: 'Increase in basket value' },
            { value: '15–25%', label: 'Attach rates' },
            { value: 'Fully managed', label: 'Refund service' },
            { value: 'Zero', label: 'Operational overhead' },
          ]}
        />

        <ContentSection
          eyebrow="Deep dive"
          title="Built for high-volume travel distribution"
          description="Whether you're an OTA, consolidator, or retail agency, Refund Shield enhances yield per transaction while improving customer confidence at the point of purchase."
          items={[]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
