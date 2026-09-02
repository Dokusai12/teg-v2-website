import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { ProofBar } from '@/components/industry/ProofBar';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { PlatformDiagramMockup } from '@/components/industry/mockups/PlatformDiagramMockup';
import { ContentSection } from '@/components/ContentSection';

export default function PlatformsIndustryPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Industry · Platforms"
          headline="Deploy ancillary revenue across your entire platform"
          subheading="Enable partners to monetise flexibility at scale. Refund Shield integrates at platform level, allowing you to roll out a new revenue stream across your entire ecosystem."
          keyPoints={[
            'Scalable revenue across all partners',
            'API-first integration',
            'White-label or embedded options',
            'Drives partner adoption and retention',
          ]}
          mockup={<PlatformDiagramMockup />}
        />

        <ProofBar
          stats={[
            { value: '+10–15%', label: 'Increase in GMV per transaction' },
            { value: '15–25%', label: 'Attach rates' },
            { value: 'Fully managed', label: 'Refund service' },
            { value: 'Platform-wide', label: 'Scalability' },
          ]}
        />

        <ContentSection
          eyebrow="Deep dive"
          title="Built for platform-scale distribution"
          description="One integration surface enables Refund Shield across your entire partner network, with real-time analytics across attach rate, conversion, and revenue impact. Global-ready deployment across markets, currencies, and languages."
          items={[]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
