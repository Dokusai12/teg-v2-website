import { Shield, Plane, Luggage } from 'lucide-react';

/** Bundles product: Bundle vs individual pricing comparison */
export function BundlesMockup() {
  return (
    <div className="relative mx-auto max-w-[440px]">
      <div className="grid grid-cols-2 gap-3">
        {/* Individual */}
        <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">Individual</div>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
              <span className="text-[11px] text-muted-foreground flex-1">Refund Shield</span>
              <span className="text-[11px] font-medium text-foreground">£12</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
              <span className="text-[11px] text-muted-foreground flex-1">Air Shield</span>
              <span className="text-[11px] font-medium text-foreground">£8</span>
            </div>
            <div className="flex items-center gap-2">
              <Luggage className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
              <span className="text-[11px] text-muted-foreground flex-1">Baggage Shield</span>
              <span className="text-[11px] font-medium text-foreground">£6</span>
            </div>
            <div className="border-t border-border pt-2">
              <div className="flex justify-between items-center">
                <span className="text-[12px] font-semibold text-foreground">Total</span>
                <span className="text-[15px] font-bold text-foreground">£26</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle */}
        <div className="bg-card rounded-2xl border-2 border-accent/30 p-5 shadow-lg relative">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="bg-accent text-accent-foreground text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Save 23%
            </span>
          </div>
          <div className="text-[10px] font-semibold text-accent uppercase tracking-wider mb-4 pt-1">Complete Bundle</div>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              <span className="text-[11px] text-muted-foreground flex-1">Refund Shield</span>
              <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              <span className="text-[11px] text-muted-foreground flex-1">Air Shield</span>
              <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <Luggage className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              <span className="text-[11px] text-muted-foreground flex-1">Baggage Shield</span>
              <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="border-t border-border pt-2">
              <div className="flex justify-between items-center">
                <span className="text-[12px] font-semibold text-foreground">Bundle</span>
                <div className="text-right">
                  <span className="text-[11px] text-muted-foreground line-through mr-1.5">£26</span>
                  <span className="text-[15px] font-bold text-accent">£20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <span className="text-[11px] text-muted-foreground bg-secondary rounded-full px-4 py-1.5 font-medium">
          One click at checkout
        </span>
      </div>

      <p className="text-center text-[13px] text-muted-foreground mt-3">
        Higher attach rate, higher basket value
      </p>
    </div>
  );
}