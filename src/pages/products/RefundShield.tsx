import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IndustryHero } from '@/components/industry/IndustryHero';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { RefundShieldMockup } from '@/components/product/mockups/RefundShieldMockup';
import { ContentSection } from '@/components/ContentSection';

export default function RefundShieldProductPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHero
          label="Product · Refund Shield"
          headline="Turn checkout hesitation into revenue"
          subheading="Offer fully refundable bookings at checkout with a high-margin upsell that customers understand instantly."
          keyPoints={[
            'Reduce purchase hesitation with clear refund reassurance',
            'Increase basket value with a seamless protection upsell',
            'Full visibility into attach rate and revenue impact',
            'Fast integration into any booking flow',
          ]}
          mockup={<RefundShieldMockup />}
        />

        <ContentSection
          eyebrow="How it works"
          title="How Refund Shield works"
          description="Refund Shield sits inside your existing checkout, so customers see a clear, optional add-on that lets them make their booking fully refundable. You earn incremental revenue on every attach, while Tego handles the entire refund service."
          items={[
            { label: 'Embeds as a toggle or checkbox at point of sale' },
            { label: 'Customers receive their refund within 48 hours' },
            { label: 'Real-time analytics across conversion, attach rate, and revenue' },
            { label: 'Works across travel, events, accommodation, and more' },
          ]}
        />

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
