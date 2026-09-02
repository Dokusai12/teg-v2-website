import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CookiesPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] -top-48 -right-48"
              style={{ background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))', animation: 'mesh-move 20s ease-in-out infinite' }} />
            <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] top-1/2 -left-64"
              style={{ background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))', animation: 'mesh-move 25s ease-in-out infinite reverse' }} />
            <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] bottom-0 right-1/4"
              style={{ background: 'linear-gradient(135deg, hsl(280 60% 60%), hsl(340 60% 55%))', animation: 'mesh-move 18s ease-in-out infinite 3s' }} />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-5">
            <p className={`hin text-accent text-[14px] font-medium mb-3 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>Legal</p>
            <h1 className={`hin text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-foreground ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Cookies Policy
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/50">
          <div className="max-w-[720px] mx-auto px-4 lg:px-5">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

