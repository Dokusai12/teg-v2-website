import { LegalLayout } from '@/components/system/LegalLayout';

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookies Policy"
      
      intro="How we use cookies and similar technologies on this website."
    >
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
            This Cookies Policy explains how Tego Group Limited uses cookies and similar technologies on this website.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. What cookies are</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Cookies are small text files stored on your device when you visit a website. They help websites function effectively and provide information about how the site is used.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. How we use cookies</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">We use the following types of cookies:</p>
          <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
            <li><strong className="text-foreground">Essential cookies</strong> – required for core website functionality. These cannot be switched off.</li>
            <li><strong className="text-foreground">Analytics cookies</strong> – help us understand how visitors interact with the site and improve performance.</li>
            <li><strong className="text-foreground">Preference cookies</strong> – allow the website to remember choices such as settings or preferences.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. Consent</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Where required, we will request your consent before placing non-essential cookies (such as analytics or preference cookies) on your device. You can accept or reject these cookies through our cookie banner.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Managing cookies</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            You can manage or delete cookies at any time through your browser settings. You can also update your preferences via the cookie banner on our website. Disabling certain cookies may impact site functionality.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Third-party cookies</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Some cookies may be set by third-party services that we use to support website functionality and analytics. These providers are responsible for their own cookie and privacy practices.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. Contact</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-0">
            If you have any questions about this Cookies Policy, please contact{' '}
            <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>.
          </p>
    </LegalLayout>
  );
}
