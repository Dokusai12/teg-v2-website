import { Plane, AlertTriangle, Banknote } from 'lucide-react';

/** Air Shield product: Flight disruption compensation card */
export function AirShieldMockup() {
  return (
    <div className="relative mx-auto max-w-[380px]">
      <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-border">
          <div className="text-[14px] font-bold text-foreground flex items-center gap-2">
            <Plane className="w-4 h-4 text-accent" strokeWidth={2} />
            Flight Protection
          </div>
          <div className="text-[11px] text-muted-foreground mt-1">BA 2490 · LHR → JFK</div>
          <div className="text-[11px] text-muted-foreground">Dep 08:45 · 18 Jul</div>
        </div>

        <div className="px-5 py-4 space-y-3">
          {/* Coverage items */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[12px] font-semibold text-foreground">Flight disruption</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Delays, cancellations, missed connections</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <Banknote className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[12px] font-semibold text-foreground">If eligible</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Up to £520 compensation recovered on your behalf</div>
            </div>
          </div>

          {/* Shield offer */}
          <div className="bg-accent/[0.06] border border-accent/20 rounded-xl p-4 mt-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] font-bold text-foreground">Air Shield</div>
                <div className="text-[9px] text-muted-foreground mt-0.5">We handle the entire claim</div>
              </div>
              <span className="text-[14px] font-bold text-accent">£8</span>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-foreground text-background text-[13px] font-bold">
            Add to Booking
          </button>

          <p className="text-[10px] text-muted-foreground text-center">
            No forms, no chasing airlines: we handle everything
          </p>
        </div>
      </div>
    </div>
  );
}
