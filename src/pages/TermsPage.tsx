import { LegalLayout } from '@/components/system/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      
      intro="The terms that govern access to and use of the Tego Group website."
    >
          <p className="t-body mb-8">
            These Terms of Use (&quot;Terms&quot;) govern access to and use of the website operated by Tego Group Limited. By accessing or using this website, you agree to comply with these Terms.
          </p>

          <h2 className="t-h3 mt-10 mb-3">1. Use of this website</h2>
          <p className="t-body mb-3">You may use this website for lawful purposes only. You agree not to:</p>
          <ul className="list-disc pl-6 t-body space-y-2 mb-6">
            <li>misuse or interfere with the operation or security of the website</li>
            <li>attempt to gain unauthorised access to any part of the site or its systems</li>
            <li>use the website to transmit unlawful, harmful, or malicious content, including viruses or harmful code</li>
            <li>use automated systems to extract data without prior written consent</li>
          </ul>

          <h2 className="t-h3 mt-10 mb-3">2. Intellectual property</h2>
          <p className="t-body mb-6">
            All content on this website, including text, graphics, branding, and layout, is owned by or licensed to Tego Group Limited. You may not copy, reproduce, distribute, or otherwise use any content without prior written permission, except as permitted by law.
          </p>

          <h2 className="t-h3 mt-10 mb-3">3. No reliance</h2>
          <p className="t-body mb-6">
            The content on this website is provided for general information only and may be updated or changed at any time. It does not constitute professional or commercial advice, and you should not rely on it as such.
          </p>

          <h2 className="t-h3 mt-10 mb-3">4. Disclaimer</h2>
          <p className="t-body mb-6">
            This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by law, we make no representations or warranties of any kind, whether express or implied, including accuracy, completeness, fitness for a particular purpose, or non-infringement.
          </p>

          <h2 className="t-h3 mt-10 mb-3">5. Limitation of liability</h2>
          <p className="t-body mb-4">
            To the fullest extent permitted by law, Tego Group Limited shall not be liable for any indirect, incidental, or consequential loss arising out of or in connection with the use of this website.
          </p>
          <p className="t-body mb-4">
            We do not guarantee that the website will be secure, uninterrupted, or free from errors or viruses.
          </p>
          <p className="t-body mb-6">
            Nothing in these Terms excludes or limits liability where it would be unlawful to do so.
          </p>

          <h2 className="t-h3 mt-10 mb-3">6. Governing law</h2>
          <p className="t-body mb-6">
            These Terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction over any disputes arising from or related to these Terms.
          </p>

          <h2 className="t-h3 mt-10 mb-3">7. Contact</h2>
          <p className="t-body mb-0">
            If you have any questions about these Terms, please contact{' '}
            <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>.
          </p>
    </LegalLayout>
  );
}
