import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { AirShieldMockup } from '@/components/product/mockups/AirShieldMockup';
import { ContentSection } from '@/components/ContentSection';

export default function AirShieldProductPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Product · Air Shield"
          headline="Turn flight disruption into revenue"
          subheading="Give customers a simple way to recover compensation when flights are delayed or cancelled, while unlocking incremental revenue at checkout."
          keyPoints={[
            'Customers get help recovering compensation they\'re entitled to',
            'Clear value proposition customers understand at checkout',
            'No operational overhead; Tego manages claims end-to-end',
            'Real-time tracking of attach rate and revenue impact',
          ]}
          mockup={<AirShieldMockup />}
        />

        <ContentSection
          eyebrow="Process"
          title="Built around real-world compensation"
          description="Air Shield is designed around how airline compensation actually works, not vague promises."
          items={[
            { number: '01', label: 'Disruption occurs', detail: 'If a flight is delayed, cancelled, or disrupted, the customer submits a claim.' },
            { number: '02', label: 'We handle the process', detail: 'We assess eligibility under applicable regulations (e.g. EU261) and pursue the claim directly with the airline.' },
            { number: '03', label: 'Resolution', detail: 'If successful → compensation is recovered and paid to the customer. If needed → escalated through legal partners.' },
          ]}
        />

        <ContentSection
          eyebrow="Coverage"
          title="What's covered"
          
          items={[
            { label: 'Flight delays beyond qualifying thresholds' },
            { label: 'Cancellations' },
            { label: 'Missed connections' },
            { label: 'Denied boarding (not due to passenger fault)' },
          ]}
        />

        <ContentSection
          eyebrow="Integration"
          title="Designed for modern booking platforms"
          description="Air Shield integrates seamlessly into your checkout flow, adding value without impacting your core product."
          items={[
            { label: 'Sits alongside fare families without cannibalisation' },
            { label: 'Simple toggle or checkbox at payment' },
            { label: 'Real-time reporting on attach rate and revenue' },
            { label: 'Fast API integration' },
          ]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
