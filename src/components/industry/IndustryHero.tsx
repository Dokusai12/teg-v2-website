import { useEffect, useState, ReactNode } from 'react';
import { Check } from 'lucide-react';

interface IndustryHeroProps {
  label: string;
  headline: string;
  subheading: string;
  keyPoints: string[];
  mockup?: ReactNode;
}

export function IndustryHero({ label, headline, subheading, keyPoints, mockup }: IndustryHeroProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] -top-48 -right-48"
          style={{ background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))', animation: 'mesh-move 20s ease-in-out infinite' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] top-1/2 -left-64"
          style={{ background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))', animation: 'mesh-move 25s ease-in-out infinite reverse' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] bottom-0 right-1/4"
          style={{ background: 'linear-gradient(135deg, hsl(280 60% 60%), hsl(340 60% 55%))', animation: 'mesh-move 18s ease-in-out infinite 3s' }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Copy column */}
          <div>
            <p className={`hin text-accent text-[14px] font-medium mb-3 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              {label}
            </p>
            <h1 className={`hin max-lg:text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.12] tracking-tight text-foreground ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {headline}
            </h1>
            <p className={`hin text-[16px] md:text-[17px] text-muted-foreground max-w-xl mt-4 leading-relaxed ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.35s' }}>
              {subheading}
            </p>

            <ul className={`hin mt-8 space-y-3 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              {keyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup column */}
          {mockup && (
            <div className={`hin mt-12 lg:mt-0 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              {mockup}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
