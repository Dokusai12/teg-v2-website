/** Accommodation page: Hotel booking with non-refundable rate + Refund Shield toggle */
export function HotelBookingMockup() {
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
              hotel-partner.com/booking
            </div>
          </div>
        </div>

        <div className="p-5">
          {/* Hotel details */}
          <div className="mb-4">
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Your Stay</div>
            <div className="bg-secondary rounded-xl p-3.5">
              <div className="text-[12px] font-bold text-foreground">Grand Hotel Barcelona</div>
              <div className="text-[10px] text-muted-foreground mt-1">15 Jul – 22 Jul · 7 nights · 1 room</div>
            </div>
          </div>

          {/* Rate selection */}
          <div className="mb-4 space-y-2">
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Select rate</div>
            {/* Non-refundable - selected */}
            <div className="border-2 border-foreground/20 rounded-xl p-3.5 bg-secondary/50 relative">
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full border-2 border-foreground flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div className="text-[12px] font-bold text-foreground">Non-refundable</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Best price · No cancellation</div>
              <div className="text-[14px] font-bold text-foreground mt-1.5">£840</div>
            </div>
            {/* Flexible - not selected */}
            <div className="border border-border rounded-xl p-3.5 opacity-60">
              <div className="absolute right-3 w-4 h-4 rounded-full border-2 border-border" />
              <div className="text-[12px] font-medium text-foreground">Flexible rate</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Free cancellation until 48h before</div>
              <div className="text-[14px] font-bold text-foreground mt-1.5">£980</div>
            </div>
          </div>

          {/* Refund Shield upsell */}
          <div className="mb-4">
            <div className="bg-accent/[0.06] border border-accent/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-foreground">Add flexibility for £42</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Refund Shield · Full refund if plans change</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-[18px] rounded-full bg-accent flex items-center px-0.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-accent-foreground ml-auto" />
                    </div>
                    <span className="text-[10px] font-semibold text-accent">Added</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-3 flex items-center justify-between mb-4 px-1">
            <span className="text-[13px] font-semibold text-foreground">Total</span>
            <span className="text-[17px] font-bold text-foreground">£882</span>
          </div>

          <button className="w-full py-3 rounded-xl bg-foreground text-background text-[13px] font-bold">
            Confirm Booking
          </button>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -right-5 top-[55%] float-delayed">
        <div className="bg-card rounded-2xl shadow-xl border border-accent/20 px-3.5 py-2">
          <div className="text-[14px] font-bold text-accent font-display">+£42</div>
          <div className="text-[9px] text-muted-foreground font-semibold">Revenue added</div>
        </div>
      </div>
    </div>
  );
}
