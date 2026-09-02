import { Globe, Plane, Building2, Map, ShieldCheck, Code2 } from 'lucide-react';

const partners = [
  { name: 'OTA partner', Icon: Globe, value: '+£12' },
  { name: 'Airline', Icon: Plane, value: '+£18' },
  { name: 'Hotel chain', Icon: Building2, value: '+£9' },
  { name: 'Tour operator', Icon: Map, value: '+£15' },
];

/** Platforms page: one integration fanning protection out across a merchant network. */
export function PlatformDiagramMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="absolute -inset-6 rounded-[36px] bg-accent/15 blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="surface-1 relative overflow-hidden rounded-[26px] p-6 pb-5 sm:p-7">
        {/* Hub */}
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-secondary/40 px-4 py-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
              <Code2 className="h-4 w-4" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[13.5px] font-semibold leading-none text-foreground">Your platform</p>
              <p className="mt-1.5 text-[11.5px] leading-none text-muted-foreground">One API integration</p>
            </div>
          </div>
          <span className="t-num rounded-full border border-border/70 bg-card px-2.5 py-1 text-[10.5px] font-medium text-muted-foreground">
            POST /v1/quote
          </span>
        </div>

        {/* Trunk */}
        <div className="relative mx-auto h-7 w-px bg-gradient-to-b from-border to-accent/40">
          <span className="diagram-pulse absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent" />
        </div>

        {/* Shield layer */}
        <div className="relative flex items-center gap-3 rounded-2xl border border-accent/25 bg-accent/[0.07] px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <ShieldCheck className="h-4 w-4" strokeWidth={2} />
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold leading-none text-foreground">Tego protection layer</p>
            <p className="mt-1.5 text-[11.5px] leading-none text-muted-foreground">
              White-labelled · underwritten · serviced
            </p>
          </div>
        </div>

        {/* Fan-out */}
        <svg className="h-8 w-full" viewBox="0 0 400 32" preserveAspectRatio="none" aria-hidden>
          {[50, 150, 250, 350].map((x) => (
            <path
              key={x}
              d={`M200 0 C200 18, ${x} 12, ${x} 32`}
              className="stroke-border"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3 3"
            />
          ))}
        </svg>

        {/* Merchants */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {partners.map(({ name, Icon, value }) => (
            <div
              key={name}
              className="rounded-xl border border-border/70 bg-card p-3 text-center transition-transform duration-300 ease-brand hover:-translate-y-0.5"
            >
              <span className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/70">
                <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.6} />
              </span>
              <p className="text-[11px] font-medium leading-tight text-foreground">{name}</p>
              <p className="t-num mt-1.5 text-[11px] font-semibold text-accent">{value}</p>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
          <p className="text-[11.5px] text-muted-foreground">Revenue enabled across the network</p>
          <p className="t-num text-[12.5px] font-semibold text-foreground">
            +£54 <span className="font-normal text-muted-foreground">per 4 bookings</span>
          </p>
        </div>
      </div>

      <p className="mt-5 text-center text-[13px] text-ink-muted">
        One integration → monetise flexibility at scale
      </p>
    </div>
  );
}
