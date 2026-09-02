import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { ProofBar } from '@/components/industry/ProofBar';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { HotelBookingMockup } from '@/components/industry/mockups/HotelBookingMockup';
import { ContentSection } from '@/components/ContentSection';

export default function AccommodationIndustryPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Industry · Accommodation"
          headline="Increase direct revenue from every booking"
          subheading="Turn restrictive rates into a conversion and revenue driver. Refund Shield gives guests confidence to book non-refundable rates, increasing conversion while unlocking incremental margin."
          keyPoints={[
            'Increase direct booking conversion',
            'Monetise non-refundable rates more effectively',
            'Reduce hesitation at checkout',
            'Seamless integration with booking engines and PMS',
          ]}
          mockup={<HotelBookingMockup />}
        />

        <ProofBar
          stats={[
            { value: '+10–15%', label: 'Increase in booking value' },
            { value: '15–25%', label: 'Attach rates' },
            { value: 'Fully managed', label: 'Refund service' },
            { value: 'Zero', label: 'Operational overhead' },
          ]}
        />

        <ContentSection
          eyebrow="Deep dive"
          title="Built for accommodation distribution"
          description="For hotels, hostels, and vacation rentals, Refund Shield turns your most competitive rate (the non-refundable) into a conversion and revenue opportunity, without cannibalising flexible rate sales."
          items={[]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
