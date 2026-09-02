/** Transport page: Side-by-side fare comparison */
export function FareComparisonMockup() {
  return (
    <div className="relative mx-auto max-w-[440px]">
      <div className="grid grid-cols-2 gap-3">
        {/* Without Refund Shield */}
        <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-4">Without</div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-muted-foreground">Basic fare</span>
              <span className="text-[12px] font-medium text-foreground">£89</span>
            </div>
            <div className="border-t border-border" />
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-semibold text-foreground">Total</span>
              <span className="text-[16px] font-bold text-foreground">£89</span>
            </div>
          </div>
        </div>

        {/* With Refund Shield */}
        <div className="bg-card rounded-2xl border-2 border-accent/30 pt-8 px-5 pb-5 shadow-lg relative">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="bg-accent text-accent-foreground text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              With Refund Shield
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-muted-foreground">Basic fare</span>
              <span className="text-[12px] font-medium text-foreground">£89</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-accent font-medium">Refund Shield</span>
              <span className="text-[12px] text-accent font-medium">£9</span>
            </div>
            <div className="border-t border-border" />
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-semibold text-foreground">Total</span>
              <span className="text-[16px] font-bold text-foreground">£98</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center label */}
      <div className="flex justify-center mt-4">
        <span className="text-[11px] text-muted-foreground bg-secondary rounded-full px-4 py-1.5 font-medium">
          Add at checkout
        </span>
      </div>

      {/* Caption */}
      <p className="text-center text-[13px] text-muted-foreground mt-3">
        New revenue on every booking, without changing fares
      </p>
    </div>
  );
}