import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CtaLink } from '@/components/system/CtaLink';

const metrics = [
  { label: 'Revenue', value: '£1,514,762', change: '+19.1%' },
  { label: 'Transactions', value: '184,847', change: '+12.6%' },
  { label: 'Conversion', value: '19.89%', change: '+1.12%' },
  { label: 'Avg. value', value: '£41.20', change: '+4.7%' },
];

const chart = [35, 42, 38, 55, 48, 62, 45, 70, 65, 78, 55, 82, 70, 88, 75, 92, 68, 85, 90, 78, 95, 88, 82, 96, 85, 92, 98, 90, 95, 100];

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const narrow = window.matchMedia('(max-width: 768px)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (narrow || reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  const step = (delay: string) => ({ animationDelay: delay });

  return (
    <section className="relative overflow-hidden pt-28 pb-6 md:pt-36 md:pb-10">
      {/* Ambient mesh */}
      <div className="hero-mesh pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="hero-mesh-blob absolute -right-48 -top-56 h-[620px] w-[620px] rounded-full opacity-[0.18] blur-[120px]"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(268 62% 58%))',
            animation: 'mesh-move 26s ease-in-out infinite',
          }}
        />
        <div
          className="hero-mesh-blob absolute -left-64 top-1/2 h-[500px] w-[500px] rounded-full opacity-[0.13] blur-[110px]"
          style={{
            background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(var(--accent)))',
            animation: 'mesh-move 32s ease-in-out infinite reverse',
          }}
        />
      </div>

      <div className="shell relative z-10">
        <div className={`hin mb-8 flex justify-center ${!ready ? 'opacity-0' : ''}`} style={step('0.05s')}>
          <a
            href="#products"
            className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 py-1 pl-3 pr-2 text-[13px] text-muted-foreground backdrop-blur transition-colors duration-2 ease-brand hover:border-accent/30 hover:bg-secondary"
          >
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">New</span>
            Refund Shield is now available across 50+ markets
            <ChevronRight className="arrow-slide h-3.5 w-3.5" />
          </a>
        </div>

        <h1
          className={`hin t-display mx-auto mb-6 max-w-4xl text-center text-balance ${!ready ? 'opacity-0' : ''}`}
          style={step('0.18s')}
        >
          Revenue infrastructure for the world’s{' '}
          <span className="text-gradient">booking platforms</span>.
        </h1>

        <p
          className={`hin t-lead mx-auto mb-9 max-w-2xl text-center ${!ready ? 'opacity-0' : ''}`}
          style={step('0.3s')}
        >
          Embed high-margin ancillary products into your checkout — refundable bookings, baggage
          and disruption cover — with one integration, no balance-sheet risk, and a go-live measured
          in days.
        </p>

        <div
          className={`hin mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row ${!ready ? 'opacity-0' : ''}`}
          style={step('0.42s')}
        >
          <CtaLink to="/contact" size="lg">
            Contact sales
          </CtaLink>
          <CtaLink to="/about" variant="outline" size="lg">
            Why Tego
          </CtaLink>
        </div>

        <ul
          className={`hin mb-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-muted-foreground ${!ready ? 'opacity-0' : ''}`}
          style={step('0.52s')}
        >
          {['No balance-sheet risk', 'Live in days, not quarters', '50+ markets supported', 'FCA-regulated partners'].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ),
          )}
        </ul>

        {/* Product surface */}
        <div className={`hin ${!ready ? 'opacity-0' : ''}`} style={step('0.62s')}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-elev-3">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[hsl(0_65%_65%)]" />
                <span className="h-3 w-3 rounded-full bg-[hsl(42_75%_60%)]" />
                <span className="h-3 w-3 rounded-full bg-[hsl(140_55%_50%)]" />
              </div>
              <div className="flex flex-1 justify-center">
                <span className="w-64 rounded-md border border-border bg-background px-3 py-1 text-center text-[11px] text-muted-foreground">
                  partner.tego-group.com
                </span>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8">
              <div className="grid grid-cols-12 gap-5">
                <nav className="col-span-2 hidden space-y-1 md:block">
                  {['Overview', 'Transactions', 'Products', 'Analytics', 'Settings'].map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-md px-3 py-2 text-[12px] transition-colors duration-2 ${
                        i === 0 ? 'bg-accent/10 font-medium text-accent' : 'text-muted-foreground'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>

                <div className="col-span-12 space-y-5 md:col-span-10">
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {metrics.map((stat) => (
                      <div key={stat.label} className="rounded-lg border border-border bg-background p-4">
                        <div className="mb-1 text-[11px] text-muted-foreground">{stat.label}</div>
                        <div className="t-num text-[18px] font-semibold text-foreground">{stat.value}</div>
                        <div className="mt-1 text-[11px] font-medium text-signal">{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-border bg-background p-4">
                    <div className="mb-3 text-[12px] text-muted-foreground">Revenue · Last 30 days</div>
                    <div className="flex h-24 items-end gap-[3px]">
                      {chart.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-accent/20 transition-colors duration-2 hover:bg-accent/45"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
