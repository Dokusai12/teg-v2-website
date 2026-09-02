/** Travel page: Checkout mockup with Refund Shield toggle and revenue callout */
export function TravelCheckoutMockup() {
  return (
    <div className="relative mx-auto max-w-[380px]">
      <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
        {/* Browser bar */}
        <div className="px-4 py-2.5 border-b border-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/15" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-muted rounded-lg px-4 py-1 text-[10px] text-muted-foreground font-medium">
              partner-travel.com/checkout
            </div>
          </div>
        </div>

        <div className="p-5">
          {/* Trip */}
          <div className="mb-4">
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Your Trip</div>
            <div className="flex items-center gap-3 bg-secondary rounded-xl p-3.5">
              <div className="w-9 h-9 rounded-xl bg-sky flex items-center justify-center text-[15px]">✈</div>
              <div className="flex-1">
                <div className="text-[12px] font-bold text-foreground">London → Barcelona</div>
                <div className="text-[10px] text-muted-foreground">15 Jul – 22 Jul · 2 pax</div>
              </div>
              <div className="text-[13px] font-bold text-foreground">£438</div>
            </div>
          </div>

          {/* Refund Shield upsell */}
          <div className="mb-4 relative">
            <div className="bg-accent/[0.06] border border-accent/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-foreground">Refund Shield</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Full refund if you can't travel</div>
                  <div className="flex items-center gap-2 mt-2">
                    {/* Toggle ON */}
                    <div className="w-8 h-[18px] rounded-full bg-accent flex items-center px-0.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-accent-foreground ml-auto" />
                    </div>
                    <span className="text-[10px] font-semibold text-foreground">Added</span>
                  </div>
                </div>
                <div className="text-[13px] font-bold text-accent">+£12</div>
              </div>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex items-center justify-between mb-1 px-1">
            <span className="text-[11px] text-muted-foreground">Flights</span>
            <span className="text-[11px] text-muted-foreground">£438</span>
          </div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] text-accent font-medium">Refund Shield</span>
            <span className="text-[11px] text-accent font-medium">£12</span>
          </div>
          <div className="border-t border-border pt-3 flex items-center justify-between mb-4 px-1">
            <span className="text-[13px] font-semibold text-foreground">Total</span>
            <span className="text-[17px] font-bold text-foreground">£450</span>
          </div>

          <button className="w-full py-3 rounded-xl bg-foreground text-background text-[13px] font-bold">
            Complete Booking
          </button>
        </div>
      </div>

      {/* Floating revenue badge */}
      <div className="absolute -right-6 top-[42%] float-delayed">
        <div className="bg-card rounded-2xl shadow-xl border border-accent/20 px-4 py-2.5">
          <div className="text-[17px] font-bold text-accent font-display">+£12</div>
          <div className="text-[9px] text-muted-foreground font-semibold">Revenue added</div>
        </div>
      </div>

      {/* Floating uplift badge */}
      <div className="absolute -left-4 bottom-[18%] float-delayed" style={{ animationDelay: '3s' }}>
        <div className="bg-card rounded-2xl shadow-xl border border-border px-3.5 py-2">
          <div className="text-[14px] font-bold text-foreground font-display">+10%</div>
          <div className="text-[9px] text-muted-foreground font-semibold">Basket uplift</div>
        </div>
      </div>
    </div>
  );
}
