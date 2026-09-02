import { LegalLayout } from '@/components/system/LegalLayout';

export default function ModernSlaveryPage() {
  return (
    <LegalLayout
      title="Modern Slavery Statement"
      
      intro="Our commitment to preventing modern slavery across our business and supply chains."
    >
          <p className="t-body mb-8">
            Tego Group Limited is committed to preventing modern slavery and human trafficking in all aspects of our business and supply chains. We take a zero-tolerance approach to any form of modern slavery.
          </p>

          <h2 className="t-h3 mt-10 mb-3">1. Our business and structure</h2>
          <p className="t-body mb-6">
            Tego Group Limited is a UK-based company providing embedded ancillary revenue products for online booking platforms. As a technology-led business, our direct exposure to physical supply chains is limited; however, we recognise that risks may arise through our global partners and service providers.
          </p>

          <h2 className="t-h3 mt-10 mb-3">2. Our supply chains</h2>
          <p className="t-body mb-6">
            Our suppliers primarily include technology providers, payment partners, and professional service firms. We expect all partners to operate in accordance with applicable laws and to uphold standards consistent with our commitment to ethical business practices.
          </p>

          <h2 className="t-h3 mt-10 mb-3">3. Policies and due diligence</h2>
          <p className="t-body mb-6">
            We seek to work with reputable suppliers and partners and undertake proportionate due diligence based on the nature of the relationship. Where appropriate, we expect suppliers to have policies and controls in place to prevent modern slavery and human trafficking.
          </p>

          <h2 className="t-h3 mt-10 mb-3">4. Risk assessment</h2>
          <p className="t-body mb-6">
            Given the nature of our business, we consider the overall risk of modern slavery within our direct operations to be low. However, we remain mindful of potential risks within our broader partner network and take a risk-based approach to monitoring and engagement.
          </p>

          <h2 className="t-h3 mt-10 mb-3">5. Reporting concerns</h2>
          <p className="t-body mb-6">
            We encourage the reporting of any concerns relating to modern slavery or unethical conduct. Concerns can be raised via{' '}
            <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>
            {' '}and will be treated seriously and confidentially.
          </p>

          <h2 className="t-h3 mt-10 mb-3">6. Continuous improvement</h2>
          <p className="t-body mb-0">
            We will continue to review and strengthen our approach, including refining supplier expectations and internal awareness as the business grows.
          </p>
    </LegalLayout>
  );
}
