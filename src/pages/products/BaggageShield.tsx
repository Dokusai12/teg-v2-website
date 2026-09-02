import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { BaggageShieldMockup } from '@/components/product/mockups/BaggageShieldMockup';
import { ContentSection } from '@/components/ContentSection';

export default function BaggageShieldProductPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Product · Baggage Shield"
          headline="Turn baggage disruption into trust, and revenue"
          subheading="Support customers when their baggage is delayed or misrouted, while unlocking incremental revenue at checkout."
          keyPoints={[
            'Compensation for delayed and lost baggage',
            'Simple checkout add-on with clear customer value',
            'Improve customer confidence at the point of payment',
            'Fully managed claims; zero operational burden',
          ]}
          mockup={<BaggageShieldMockup />}
        />

        <ContentSection
          eyebrow="Process"
          title="Built for real-world disruption"
          description="Baggage Shield is designed around how airline baggage issues actually work, not vague promises."
          items={[
            { number: '01', label: 'Customer reports disruption', detail: 'If baggage is delayed or misrouted, the customer submits a claim and provides their airline report.' },
            { number: '02', label: 'Active recovery support (0–96 hours)', detail: 'We work directly with airlines and handling agents to track and recover the baggage.' },
            { number: '03', label: 'Resolution or compensation', detail: 'If baggage is returned within 96 hours → service complete. If not → fixed compensation is paid (subject to terms).' },
          ]}
        />

        <ContentSection
          eyebrow="Integration"
          title="Designed for modern booking platforms"
          description="Baggage Shield sits naturally inside your checkout flow, offering clear reassurance right before payment, where it drives the highest conversion."
          
          items={[
            { label: 'Simple toggle or checkbox at payment' },
            { label: 'Works across all airlines and fare types' },
            { label: 'Real-time reporting on attach rate and revenue' },
            { label: 'Fully branded customer claims experience' },
            { label: 'Fast API integration' },
          ]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
