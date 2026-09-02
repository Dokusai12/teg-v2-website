/** Experiences page: Mobile-style booking card */
export function ExperienceMobileMockup() {
  return (
    <div className="relative mx-auto max-w-[320px]">
      {/* Phone frame */}
      <div className="bg-card rounded-[2rem] shadow-2xl border border-border overflow-hidden">
        {/* Status bar */}
        <div className="px-6 pt-3 pb-1 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-foreground">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3.5 h-2 rounded-sm bg-foreground/30" />
            <div className="w-4 h-2.5 rounded-sm border border-foreground/30 relative">
              <div className="absolute inset-0.5 right-1 bg-foreground/30 rounded-[1px]" />
            </div>
          </div>
        </div>

        <div className="px-5 pb-5 pt-2">
          {/* Tour header */}
          <div className="mb-4">
            <div className="text-[14px] font-bold text-foreground">Sunset Boat Tour</div>
            <div className="text-[11px] text-muted-foreground mt-1">Tomorrow · 6:00 PM</div>
            <div className="text-[11px] text-muted-foreground">Guests: 2</div>
          </div>

          <div className="border-t border-border mb-4" />

          {/* Price */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-[12px] text-muted-foreground">2 × £80</span>
            <span className="text-[13px] font-bold text-foreground">£160</span>
          </div>

          {/* Optional add-ons */}
          <div className="mb-4">
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Optional add-ons</div>
            <div className="bg-accent/[0.06] border border-accent/20 rounded-xl p-3.5">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded border-2 border-accent bg-accent flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-foreground">Refund Shield, £8</div>
                  <div className="text-[9px] text-muted-foreground mt-0.5">Optional flexibility if plans change</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-semibold text-foreground">Total</span>
              <span className="text-[17px] font-bold text-foreground">£168</span>
            </div>
          </div>

          <button className="w-full py-3.5 rounded-2xl bg-foreground text-background text-[13px] font-bold">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}