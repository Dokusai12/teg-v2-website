import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TermsPage() {
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
              Terms of Use
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/50">
          <div className="max-w-[720px] mx-auto px-4 lg:px-5">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                These Terms of Use (&quot;Terms&quot;) govern access to and use of the website operated by Tego Group Limited. By accessing or using this website, you agree to comply with these Terms.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Use of this website</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">You may use this website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
                <li>misuse or interfere with the operation or security of the website</li>
                <li>attempt to gain unauthorised access to any part of the site or its systems</li>
                <li>use the website to transmit unlawful, harmful, or malicious content, including viruses or harmful code</li>
                <li>use automated systems to extract data without prior written consent</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Intellectual property</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                All content on this website, including text, graphics, branding, and layout, is owned by or licensed to Tego Group Limited. You may not copy, reproduce, distribute, or otherwise use any content without prior written permission, except as permitted by law.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. No reliance</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                The content on this website is provided for general information only and may be updated or changed at any time. It does not constitute professional or commercial advice, and you should not rely on it as such.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Disclaimer</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by law, we make no representations or warranties of any kind, whether express or implied, including accuracy, completeness, fitness for a particular purpose, or non-infringement.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Limitation of liability</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, Tego Group Limited shall not be liable for any indirect, incidental, or consequential loss arising out of or in connection with the use of this website.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                We do not guarantee that the website will be secure, uninterrupted, or free from errors or viruses.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Nothing in these Terms excludes or limits liability where it would be unlawful to do so.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. Governing law</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                These Terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction over any disputes arising from or related to these Terms.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">7. Contact</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-0">
                If you have any questions about these Terms, please contact{' '}
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

