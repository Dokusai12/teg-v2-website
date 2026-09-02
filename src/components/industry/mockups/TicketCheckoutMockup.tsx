/** Events page: Ticket checkout with Refund Shield and margin callout */
export function TicketCheckoutMockup() {
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
              tickets.example.com/checkout
            </div>
          </div>
        </div>

        <div className="p-5">
          {/* Event */}
          <div className="mb-4">
            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Your Tickets</div>
            <div className="bg-secondary rounded-xl p-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-[15px]">🎵</div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-foreground">Summer Music Festival</div>
                  <div className="text-[10px] text-muted-foreground">Sat 19 Jul · 2 × General Admission</div>
                </div>
              </div>
            </div>
          </div>

          {/* Line items */}
          <div className="space-y-2 mb-4 px-1">
            <div className="flex justify-between">
              <span className="text-[12px] text-muted-foreground">2 × Ticket</span>
              <span className="text-[12px] font-medium text-foreground">£120</span>
            </div>
            {/* Refund Shield */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded border-2 border-accent bg-accent flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[12px] text-accent font-medium">Refund Shield</span>
              </div>
              <span className="text-[12px] text-accent font-medium">£12</span>
            </div>
          </div>

          <div className="border-t border-border pt-3 mb-4 px-1">
            <div className="flex justify-between items-center">
              <span className="text-[13px] font-semibold text-foreground">Total</span>
              <div className="text-right">
                <span className="text-[17px] font-bold text-foreground">£132</span>
              </div>
            </div>
          </div>

          <button className="w-full py-3 rounded-xl bg-foreground text-background text-[13px] font-bold">
            Buy Tickets
          </button>
        </div>
      </div>

      {/* Revenue callout */}
      <div className="absolute -right-5 top-[40%] float-delayed">
        <div className="bg-card rounded-2xl shadow-xl border border-accent/20 px-3.5 py-2">
          <div className="text-[14px] font-bold text-accent font-display">+£12</div>
          <div className="text-[9px] text-muted-foreground font-semibold">Per transaction</div>
        </div>
      </div>

      {/* Cumulative callout */}
      <div className="absolute -left-4 bottom-[22%] float-delayed" style={{ animationDelay: '3s' }}>
        <div className="bg-card rounded-2xl shadow-xl border border-border px-3.5 py-2">
          <div className="text-[11px] text-muted-foreground">
            <span className="text-foreground font-semibold">£120</span> → <span className="text-accent font-bold">£132</span>
          </div>
          <div className="text-[9px] text-muted-foreground font-semibold">Revenue uplift</div>
        </div>
      </div>
    </div>
  );
}
