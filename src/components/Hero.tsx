import { useEffect, useState } from 'react';
import { ArrowLeftRight, BarChart3, ChevronRight, LayoutGrid, Package, Settings } from 'lucide-react';
import { CtaLink } from '@/components/system/CtaLink';
import { CtaLink } from '@/components/system/CtaLink';

const metrics = [
  { label: 'Revenue', value: '£1,514,762', change: '+19.1%' },
  { label: 'Transactions', value: '184,847', change: '+12.6%' },
  { label: 'Conversion', value: '19.89%', change: '+1.12%' },
  { label: 'Avg. value', value: '£41.20', change: '+4.7%' },
];

const sideNav = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Transactions', icon: ArrowLeftRight },
  { label: 'Products', icon: Package },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-elev-3 backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[hsl(0_65%_65%)]" />
                <span className="h-3 w-3 rounded-full bg-[hsl(42_75%_60%)]" />
                <span className="h-3 w-3 rounded-full bg-[hsl(140_55%_50%)]" />
              </div>
              <div className="flex flex-1 justify-center">
                <span className="w-64 rounded-md border border-border bg-secondary/80 px-3 py-1 text-center text-[11px] font-medium text-muted-foreground">
                  partner.tego-group.com
                </span>
              </div>
              <div className="hidden w-12 sm:block" aria-hidden />
            </div>

            <div className="bg-secondary/30 p-5 md:p-7">
              <div className="grid grid-cols-12 gap-5">
                <nav className="col-span-2 hidden md:block">
                  <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent shadow-sm">
                    <span className="h-3.5 w-3.5 rounded-sm border-2 border-accent-foreground" aria-hidden />
                  </div>
                  <div className="space-y-1">
                    {sideNav.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] transition-colors duration-2 ease-brand ${
                            i === 0
                              ? 'bg-accent/10 font-semibold text-accent'
                              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                          }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" strokeWidth={1.8} aria-hidden />
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </nav>

                <div className="col-span-12 space-y-4 md:col-span-10">
                  <header className="flex items-center justify-between">
                    <div>
                      <p className="text-[15px] font-bold tracking-tight text-foreground">Partner Hub</p>
                      <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">Overview · Last 30 days</p>
                    </div>
                    <span
                      className="h-8 w-8 rounded-full border-2 border-card bg-secondary shadow-sm"
                      aria-hidden
                    />
                  </header>

                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {metrics.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border bg-card p-4 shadow-[0_2px_4px_hsl(var(--ink)/0.03)] transition-shadow duration-2 ease-brand hover:shadow-elev-1"
                      >
                        <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </div>
                        <div className="t-num text-[17px] font-bold text-foreground">{stat.value}</div>
                        <div className="mt-2">
                          <span className="rounded-md bg-signal/10 px-1.5 py-0.5 text-[10px] font-bold text-signal">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_8px_16px_hsl(var(--ink)/0.03)]">
                    <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                      <p className="text-[12px] font-bold text-foreground">Revenue · Last 30 days</p>
                      <div className="flex gap-1" aria-hidden>
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/30" />
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/30" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="relative flex h-28 items-end gap-[3px] md:h-32">
                        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between" aria-hidden>
                          <span className="h-px w-full bg-border/50" />
                          <span className="h-px w-full bg-border/50" />
                          <span className="h-px w-full bg-border/50" />
                        </div>
                        {chart.map((h, i) => {
                          const peak = h === 100;
                          return (
                            <div
                              key={i}
                              className="relative flex-1 rounded-t-[3px] transition-opacity duration-2 ease-brand hover:opacity-75"
                              style={{
                                height: `${h}%`,
                                backgroundColor: peak
                                  ? 'hsl(var(--accent))'
                                  : `hsl(var(--accent) / ${(0.12 + (h / 100) * 0.5).toFixed(2)})`,
                                boxShadow: peak ? '0 -4px 14px hsl(var(--accent) / 0.25)' : undefined,
                              }}
                            >
                              {peak && (
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-1.5 py-0.5 text-[9px] font-semibold text-ink-foreground">
                                  £64k
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-3 flex justify-between border-t border-border/60 pt-3 text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                        <span>01 Nov</span>
                        <span>15 Nov</span>
                        <span>30 Nov</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-[0_2px_4px_hsl(var(--ink)/0.03)]">
                    <span className="text-[11px] font-bold text-foreground">Live products</span>
                    <div className="flex items-center gap-2">
                      {[
                        { label: 'Refund Shield', tone: 'bg-signal/15 text-signal' },
                        { label: 'Air Shield', tone: 'bg-accent/10 text-accent' },
                        { label: 'Baggage Shield', tone: 'bg-secondary text-muted-foreground' },
                      ].map((p) => (
                        <span
                          key={p.label}
                          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${p.tone}`}
                        >
                          {p.label}
                        </span>
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
