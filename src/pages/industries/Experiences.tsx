import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { ProofBar } from '@/components/industry/ProofBar';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { ExperienceMobileMockup } from '@/components/industry/mockups/ExperienceMobileMockup';
import { ContentSection } from '@/components/ContentSection';

export default function ExperiencesIndustryPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Industry · Experiences"
          headline="Increase bookings for high-consideration experiences"
          subheading="Convert uncertainty into confirmed revenue. Refund Shield helps customers commit to bookings where plans, weather, or travel schedules are uncertain."
          keyPoints={[
            'Increase conversion on tours and activities',
            'Reduce hesitation for higher-value experiences',
            'Designed for experiences where plans may change',
            'No operational burden',
          ]}
          mockup={<ExperienceMobileMockup />}
        />

        <ProofBar
          stats={[
            { value: '+10–15%', label: 'Increase in booking value' },
            { value: '15–25%', label: 'Attach rates' },
            { value: 'Fully managed', label: 'Refund service' },
            { value: 'Zero', label: 'Operational complexity' },
          ]}
        />

        <ContentSection
          eyebrow="Deep dive"
          title="Built for in-destination bookings"
          description="Experiences are often booked on the go, with uncertain plans. Refund Shield gives customers the confidence to commit, especially on mobile, where most experience bookings happen."
          items={[]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
