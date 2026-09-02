import { LegalLayout } from '@/components/system/LegalLayout';

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="29th March 2026"
      intro="How Tego Group collects, uses and safeguards personal data across our website and services."
    >
          <p className="t-body mb-8">
            Tego Group Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website www.tego-group.com.
          </p>

          <h2 className="t-h3 mt-10 mb-3">1. Who we are</h2>
          <p className="t-body mb-6">
            Tego Group Limited is the data controller responsible for your personal data.
          </p>

          <h2 className="t-h3 mt-10 mb-3">2. Information we collect</h2>
          <p className="t-body mb-3">We may collect and process the following information:</p>
          <ul className="list-disc pl-6 t-body space-y-2 mb-6">
            <li><strong className="text-foreground">Personal information</strong> – such as your name, email address, phone number, and any information you provide directly</li>
            <li><strong className="text-foreground">Usage data</strong> – including IP address, browser type, pages visited, and interactions with our website</li>
            <li><strong className="text-foreground">Cookies and tracking technologies</strong> – as described in our Cookies Policy</li>
          </ul>

          <h2 className="t-h3 mt-10 mb-3">3. How we use your information</h2>
          <p className="t-body mb-3">We use your information to:</p>
          <ul className="list-disc pl-6 t-body space-y-2 mb-6">
            <li>operate and improve our website and services</li>
            <li>respond to enquiries and requests</li>
            <li>communicate important updates</li>
            <li>analyse website performance and usage</li>
            <li>comply with legal obligations</li>
          </ul>

          <h2 className="t-h3 mt-10 mb-3">4. Lawful basis for processing</h2>
          <p className="t-body mb-3">We process personal data under the following lawful bases:</p>
          <ul className="list-disc pl-6 t-body space-y-2 mb-6">
            <li><strong className="text-foreground">legitimate interests</strong> – to operate and improve our business and website</li>
            <li><strong className="text-foreground">consent</strong> – where required, for example for certain cookies</li>
            <li><strong className="text-foreground">legal obligations</strong> – where processing is necessary to comply with applicable laws</li>
          </ul>

          <h2 className="t-h3 mt-10 mb-3">5. Sharing your information</h2>
          <p className="t-body mb-3">We do not sell your personal data. We may share information with:</p>
          <ul className="list-disc pl-6 t-body space-y-2 mb-6">
            <li>service providers who support our website and operations</li>
            <li>professional advisers where necessary</li>
            <li>authorities where required by law</li>
          </ul>

          <h2 className="t-h3 mt-10 mb-3">6. International transfers</h2>
          <p className="t-body mb-6">
            Your information may be transferred to and processed in countries outside the UK. Where this occurs, we ensure appropriate safeguards are in place in accordance with applicable data protection laws.
          </p>

          <h2 className="t-h3 mt-10 mb-3">7. Data retention</h2>
          <p className="t-body mb-6">
            We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, including legal, accounting, or reporting requirements.
          </p>

          <h2 className="t-h3 mt-10 mb-3">8. Your rights</h2>
          <p className="t-body mb-3">You have rights under applicable data protection laws, including the right to:</p>
          <ul className="list-disc pl-6 t-body space-y-2 mb-4">
            <li>access your personal data</li>
            <li>request correction of inaccurate data</li>
            <li>request deletion of your data</li>
            <li>object to or restrict processing</li>
            <li>withdraw consent where applicable</li>
          </ul>
          <p className="t-body mb-6">
            To exercise your rights, contact{' '}
            <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>.
          </p>

          <h2 className="t-h3 mt-10 mb-3">9. Security</h2>
          <p className="t-body mb-6">
            We implement appropriate technical and organisational measures to protect your personal data. However, no system is completely secure.
          </p>

          <h2 className="t-h3 mt-10 mb-3">10. Third-party links</h2>
          <p className="t-body mb-6">
            Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>

          <h2 className="t-h3 mt-10 mb-3">11. Changes to this policy</h2>
          <p className="t-body mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="t-h3 mt-10 mb-3">12. Contact</h2>
          <p className="t-body mb-0">
            If you have any questions about this Privacy Policy, please contact{' '}
            <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>.
          </p>
    </LegalLayout>
  );
}
