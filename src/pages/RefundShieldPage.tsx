import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Heart, TrendingUp, Zap, ChevronRight } from 'lucide-react';

const benefits = [
  { icon: Heart, title: 'Happier Customers', desc: "Booking anxiety disappears when customers know they're covered against the unexpected." },
  { icon: Shield, title: 'Bulletproof Trust', desc: 'Customers remember brands that protect them. One positive refund experience = lifetime loyalty.' },
  { icon: TrendingUp, title: 'Revenue on Autopilot', desc: 'Earn commission on every protection sold. Set it up once, earn continuously. Zero risk.' },
  { icon: Zap, title: 'Live in Days', desc: 'Our API is obsessively documented. Your devs will thank you. Average integration: 5 days.' },
];

export default function RefundShieldPage() {
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
            <p className={`hin text-accent text-[14px] font-medium mb-3 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>Our Product</p>
            <h1 className={`hin text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-foreground max-w-2xl ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}>
              Refund Shield
            </h1>
            <p className={`hin text-[17px] md:text-[18px] text-muted-foreground max-w-xl mt-4 leading-relaxed ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.35s' }}>
              The refund protection product that lives inside your checkout. Customers opt in with a single tap. You earn from every sale. We handle every claim.
            </p>
            <a href="mailto:hello@tego-group.com" className={`hin inline-flex items-center gap-1.5 mt-8 px-5 py-3 rounded-full bg-accent text-accent-foreground text-[15px] font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20 ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}>
              Book a Demo <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Benefits: Bento/Stats card style with scroll reveal */}
        <section className="py-20 md:py-28 bg-secondary/50">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
            <div className="mb-14 r">
              <p className="text-accent text-[14px] font-medium mb-3">Benefits</p>
              <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight max-w-xl">
                Why your platform needs this
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className={`r dl${i + 1} rounded-2xl border border-border bg-background p-8 flex flex-col hover:border-border/80 transition-colors`}>
                    <div className="w-10 h-10 rounded-lg bg-accent/[0.07] flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA: matches landing CTA */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
            <div className="r relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-foreground" />
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]"
                style={{ background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))' }} />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-[80px]"
                style={{ background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))' }} />
              <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground leading-tight tracking-tight mb-4">
                  Ready to embed Refund Shield?
                </h2>
                <p className="text-primary-foreground/60 text-[16px] leading-relaxed max-w-lg mx-auto mb-8">
                  Get in touch and we&apos;ll show you how it works in your checkout.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a href="mailto:hello@tego-group.com" className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-accent text-accent-foreground text-[15px] font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                    Contact an Expert <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="mailto:hello@tego-group.com" className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-primary-foreground/15 text-primary-foreground text-[15px] font-medium hover:bg-primary-foreground/5 transition-colors">
                    Get in touch <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
