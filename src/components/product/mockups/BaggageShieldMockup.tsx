import { Luggage, RotateCcw, Banknote } from 'lucide-react';

/** Baggage Shield product: Baggage protection checkout card */
export function BaggageShieldMockup() {
  return (
    <div className="relative mx-auto max-w-[380px]">
      <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-border">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">At checkout</div>
          <div className="text-[14px] font-bold text-foreground flex items-center gap-2">
            <Luggage className="w-4 h-4 text-accent" strokeWidth={2} />
            Baggage Protection
          </div>
          <div className="text-[11px] text-muted-foreground mt-1">2 checked bags</div>
          <div className="text-[11px] text-muted-foreground">LHR → CDG · Round trip</div>
        </div>

        <div className="px-5 py-4 space-y-3">
          {/* Coverage items */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <RotateCcw className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[12px] font-semibold text-foreground">Delayed or misrouted baggage</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Active recovery support + updates</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
              <Banknote className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[12px] font-semibold text-foreground">If not returned within 96 hours</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Fixed compensation up to £500 per bag</div>
            </div>
          </div>

          {/* Shield offer */}
          <div className="bg-accent/[0.06] border border-accent/20 rounded-xl p-4 mt-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] font-bold text-foreground">Baggage Shield</div>
                <div className="text-[9px] text-muted-foreground mt-0.5">Cover for both bags</div>
              </div>
              <span className="text-[14px] font-bold text-accent">£6</span>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-foreground text-background text-[13px] font-bold">
            Add to Booking
          </button>
        </div>
      </div>
    </div>
  );
}
