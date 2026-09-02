import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PrivacyPolicyPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 120); return () => clearTimeout(t); }, []);
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        {/* Hero: matches landing with gradient mesh */}
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
            <h1 className={`hin text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-foreground ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}>
              Privacy Policy
            </h1>
            <p className={`hin text-[15px] text-muted-foreground mt-3 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>Last Updated: 29th March 2026</p>
          </div>
        </section>

        {/* Content: clean readable layout with subtle card */}
        <section className="py-12 md:py-20 bg-secondary/50">
          <div className="max-w-[720px] mx-auto px-4 lg:px-5">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                Tego Group Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website www.tego-group.com.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Who we are</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Tego Group Limited is the data controller responsible for your personal data.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Information we collect</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">We may collect and process the following information:</p>
              <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
                <li><strong className="text-foreground">Personal information</strong> – such as your name, email address, phone number, and any information you provide directly</li>
                <li><strong className="text-foreground">Usage data</strong> – including IP address, browser type, pages visited, and interactions with our website</li>
                <li><strong className="text-foreground">Cookies and tracking technologies</strong> – as described in our Cookies Policy</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. How we use your information</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
                <li>operate and improve our website and services</li>
                <li>respond to enquiries and requests</li>
                <li>communicate important updates</li>
                <li>analyse website performance and usage</li>
                <li>comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Lawful basis for processing</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">We process personal data under the following lawful bases:</p>
              <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
                <li><strong className="text-foreground">legitimate interests</strong> – to operate and improve our business and website</li>
                <li><strong className="text-foreground">consent</strong> – where required, for example for certain cookies</li>
                <li><strong className="text-foreground">legal obligations</strong> – where processing is necessary to comply with applicable laws</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Sharing your information</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">We do not sell your personal data. We may share information with:</p>
              <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
                <li>service providers who support our website and operations</li>
                <li>professional advisers where necessary</li>
                <li>authorities where required by law</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. International transfers</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Your information may be transferred to and processed in countries outside the UK. Where this occurs, we ensure appropriate safeguards are in place in accordance with applicable data protection laws.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">7. Data retention</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, including legal, accounting, or reporting requirements.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">8. Your rights</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">You have rights under applicable data protection laws, including the right to:</p>
              <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-4">
                <li>access your personal data</li>
                <li>request correction of inaccurate data</li>
                <li>request deletion of your data</li>
                <li>object to or restrict processing</li>
                <li>withdraw consent where applicable</li>
              </ul>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                To exercise your rights, contact{' '}
                <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">9. Security</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                We implement appropriate technical and organisational measures to protect your personal data. However, no system is completely secure.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">10. Third-party links</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">11. Changes to this policy</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">12. Contact</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-0">
                If you have any questions about this Privacy Policy, please contact{' '}
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
