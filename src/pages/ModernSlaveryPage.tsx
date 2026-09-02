import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ModernSlaveryPage() {
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
              Modern Slavery Statement
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/50">
          <div className="max-w-[720px] mx-auto px-4 lg:px-5">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                Tego Group Limited is committed to preventing modern slavery and human trafficking in all aspects of our business and supply chains. We take a zero-tolerance approach to any form of modern slavery.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Our business and structure</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Tego Group Limited is a UK-based company providing embedded ancillary revenue products for online booking platforms. As a technology-led business, our direct exposure to physical supply chains is limited; however, we recognise that risks may arise through our global partners and service providers.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Our supply chains</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Our suppliers primarily include technology providers, payment partners, and professional service firms. We expect all partners to operate in accordance with applicable laws and to uphold standards consistent with our commitment to ethical business practices.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. Policies and due diligence</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                We seek to work with reputable suppliers and partners and undertake proportionate due diligence based on the nature of the relationship. Where appropriate, we expect suppliers to have policies and controls in place to prevent modern slavery and human trafficking.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Risk assessment</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Given the nature of our business, we consider the overall risk of modern slavery within our direct operations to be low. However, we remain mindful of potential risks within our broader partner network and take a risk-based approach to monitoring and engagement.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Reporting concerns</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                We encourage the reporting of any concerns relating to modern slavery or unethical conduct. Concerns can be raised via{' '}
                <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>
                {' '}and will be treated seriously and confidentially.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. Continuous improvement</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-0">
                We will continue to review and strengthen our approach, including refining supplier expectations and internal awareness as the business grows.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

