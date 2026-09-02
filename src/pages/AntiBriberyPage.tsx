import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AntiBriberyPage() {
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
              Anti-Bribery and Corruption Policy
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/50">
          <div className="max-w-[720px] mx-auto px-4 lg:px-5">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                Tego Group Limited is committed to conducting business ethically, transparently, and in compliance with all applicable anti-bribery and anti-corruption laws, including the UK Bribery Act 2010. We maintain a zero-tolerance approach to bribery and corruption.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Scope</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                This policy applies to all employees, contractors, and any third parties acting on behalf of Tego Group Limited.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Prohibited conduct</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">The following is strictly prohibited:</p>
              <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
                <li>Offering, promising, giving, requesting, or accepting any bribe</li>
                <li>Facilitating payments intended to expedite routine governmental or business actions</li>
                <li>Providing or accepting gifts, hospitality, or entertainment intended to improperly influence a business decision</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. Gifts and hospitality</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Reasonable and proportionate hospitality may be permitted where it is lawful, appropriate, and not intended to influence decision-making. Any such activity must be transparent and, where appropriate, properly recorded.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Reporting concerns</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Any concerns relating to bribery or corruption should be reported promptly via{' '}
                <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>. All reports will be treated seriously and handled appropriately.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Compliance and enforcement</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                Failure to comply with this policy may result in appropriate action, including termination of business relationships or contracts.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. Review</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-0">
                We will review and update this policy periodically to ensure it remains effective and aligned with our business activities.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

