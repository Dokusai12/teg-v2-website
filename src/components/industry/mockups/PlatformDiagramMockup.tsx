import { Globe, Plane, Building2, Map } from 'lucide-react';

/** Platforms page: Polished hub-and-spoke diagram with shield layer */
export function PlatformDiagramMockup() {
  const partners = [
    { name: 'OTA Partner', Icon: Globe },
    { name: 'Airline', Icon: Plane },
    { name: 'Hotel Chain', Icon: Building2 },
    { name: 'Tour Operator', Icon: Map },
  ];

  return (
    <div className="relative mx-auto max-w-[460px]">
      <div className="absolute inset-0 bg-accent/[0.04] rounded-3xl blur-2xl" />

      <div className="relative bg-card/50 backdrop-blur-sm border border-border/60 rounded-3xl p-6 pb-8 shadow-xl">
        {/* Platform hub */}
        <div className="flex justify-center mb-1">
          <div className="relative">
            <div className="absolute -inset-3 bg-accent/[0.08] rounded-3xl blur-lg" />
            <div className="relative w-32 h-24 rounded-2xl bg-gradient-to-br from-foreground/[0.06] to-foreground/[0.02] border border-foreground/15 shadow-lg flex flex-col items-center justify-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-foreground/[0.08] border border-foreground/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-foreground tracking-wide">Your Platform</span>
            </div>
          </div>
        </div>

        {/* SVG connection lines */}
        <svg className="w-full h-[120px] overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="xMidYMid meet">
          <line x1="200" y1="0" x2="200" y2="35" className="stroke-border" strokeWidth="1.5" strokeDasharray="4 3" />
          <rect x="30" y="35" width="340" height="32" rx="8" className="fill-accent/[0.08] stroke-accent/20" strokeWidth="1" />
          <text x="200" y="55" textAnchor="middle" className="fill-accent text-[9px] font-bold uppercase" letterSpacing="3">
            Refund Shield Layer
          </text>
          {[68, 168, 232, 332].map((x, i) => (
            <g key={i}>
              <line x1="200" y1="67" x2={x} y2="100" className="stroke-border/60" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx={x} cy="100" r="3" className="fill-accent/30 stroke-accent/50" strokeWidth="1" />
            </g>
          ))}
        </svg>

        {/* Partner cards */}
        <div className="grid grid-cols-4 gap-2 -mt-2">
          {partners.map(({ name, Icon }) => (
            <div
              key={name}
              className="bg-card border border-border/80 rounded-xl p-3 shadow-sm flex flex-col items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-foreground/[0.04] border border-foreground/[0.08] flex items-center justify-center">
                <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <span className="text-[9px] font-semibold text-muted-foreground text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>

        {/* Revenue indicator */}
        <div className="mt-5 flex items-center justify-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-[10px] font-semibold text-accent bg-accent/[0.06] border border-accent/15 rounded-full px-3 py-1">
            Revenue enabled across entire network
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>

      <p className="text-center text-[13px] text-muted-foreground mt-5">
        One integration → monetise flexibility at scale
      </p>
    </div>
  );
}