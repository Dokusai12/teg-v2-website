import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { BundlesMockup } from '@/components/product/mockups/BundlesMockup';
import { ContentSection } from '@/components/ContentSection';

export default function BundlesProductPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Product · Bundles"
          headline="Maximise revenue with bundled protection"
          subheading="Offer discounted bundles across Refund Shield, Air Shield, and Baggage Shield: one click, higher attach rate, larger basket value."
          keyPoints={[
            'Higher attach rates through simplified purchasing decisions',
            'Improved perceived value with bundled discounts',
            'One-click checkout add-on for the complete package',
            'Unified reporting across all protection products',
          ]}
          mockup={<BundlesMockup />}
        />

        <ContentSection
          eyebrow="Bundled value"
          title="Better value for customers, better margins for you"
          description="Bundles let you package multiple protections into a single, clear offer customers add with one click. The bundled discount increases attach rate while the combined revenue per booking exceeds what individual products generate alone."
          items={[
            { label: 'Combines Refund Shield, Air Shield, and Baggage Shield' },
            { label: 'Discounted pricing drives higher conversion' },
            { label: 'Single integration surface for all three products' },
            { label: 'Tego manages all customer requests across the bundle' },
          ]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
