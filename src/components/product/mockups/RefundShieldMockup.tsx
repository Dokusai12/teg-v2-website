/** Refund Shield product: Checkout card with refund toggle and revenue badge */
export function RefundShieldMockup() {
  return (
    <div className="relative mx-auto max-w-[380px]">
      <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-border">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Checkout</div>
          <div className="text-[14px] font-bold text-foreground">London → Barcelona</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">2 adults · 14 Jun – 21 Jun</div>
        </div>

        <div className="px-5 py-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[12px] text-muted-foreground">Flight + hotel</span>
            <span className="text-[12px] font-medium text-foreground">£1,240</span>
          </div>

          {/* Refund Shield toggle */}
          <div className="bg-accent/[0.06] border border-accent/20 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[12px] font-bold text-foreground">Refund Shield</div>
                <div className="text-[9px] text-muted-foreground mt-0.5">Full refund if plans change</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold text-accent">£99</span>
                {/* Toggle ON */}
                <div className="w-9 h-5 rounded-full bg-accent flex items-center justify-end px-0.5">
                  <div className="w-4 h-4 rounded-full bg-accent-foreground shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-semibold text-foreground">Total</span>
              <span className="text-[17px] font-bold text-foreground">£1,339</span>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-foreground text-background text-[13px] font-bold">
            Complete Booking
          </button>
        </div>
      </div>

      {/* Floating revenue badge */}
      <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">
        +£99 revenue
      </div>
    </div>
  );
}
