/** Interactive booking flow mockup showing Refund Shield integration */
const BookingFlowMockup = ({ compact = false }: { compact?: boolean }) => {
  const outerMaxWidth = compact ? 'max-w-[320px]' : 'max-w-[420px]';
  const barPadding = compact ? 'px-4 py-2' : 'px-5 py-3';
  const contentPadding = compact ? 'p-4' : 'p-6';
  const tripMargin = compact ? 'mb-4' : 'mb-5';
  const upsellMargin = compact ? 'mb-4' : 'mb-5';

  return (
    <div className={`relative mx-auto ${outerMaxWidth}`}>
      {/* Browser chrome */}
      <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
        {/* Title bar */}
        <div className={`${barPadding} border-b border-border flex items-center gap-2`}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-muted rounded-lg px-4 py-1 text-[10px] text-muted-foreground font-medium">
              partner-travel.com/checkout
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={contentPadding}>
          {/* Trip details */}
          <div className={tripMargin}>
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Your Trip</div>
            <div className="flex items-center gap-3 bg-secondary rounded-xl p-4">
              <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center text-[16px]">✈</div>
              <div className="flex-1">
                <div className="text-[13px] font-bold text-foreground">London → Barcelona</div>
                <div className="text-[11px] text-muted-foreground">15 Jul – 22 Jul • 2 passengers</div>
              </div>
              <div className="text-[14px] font-bold text-foreground">£438</div>
            </div>
          </div>

          {/* Refund Shield upsell: the key moment */}
          <div className={`${upsellMargin} relative`}>
            <div className="absolute -left-2 -top-2 -right-2 -bottom-2 rounded-2xl border-2 border-primary/30 animate-pulse pointer-events-none" style={{ animationDuration: '2s' }} />
            <div className="bg-primary/[0.06] border border-primary/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-foreground">Refund Shield</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Full refund if you can't travel</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 rounded border-2 border-primary bg-primary flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-card" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold text-foreground">Yes, protect my trip</span>
                  </div>
                </div>
                <div className="text-[13px] font-bold text-primary">+£24</div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-[13px] font-semibold text-foreground">Total</span>
            <span className="text-[18px] font-bold text-foreground">£462</span>
          </div>

          {/* Pay button */}
          <button className="w-full py-3.5 rounded-xl bg-foreground text-background text-[13px] font-bold">
            Complete Booking
          </button>
        </div>
      </div>

      {/* Revenue callout floating */}
      <div className={`absolute ${compact ? '-right-4' : '-right-8'} ${compact ? 'top-[37%]' : 'top-[40%]'} float-delayed`}>
        <div className={`bg-card rounded-2xl shadow-xl border border-border ${compact ? 'px-3 py-2' : 'px-4 py-3'}`}>
          <div className={`font-bold text-primary font-display ${compact ? 'text-[18px]' : 'text-[20px]'}`}>+£24</div>
          <div className="text-[9px] text-muted-foreground font-semibold">New Revenue</div>
        </div>
      </div>
    </div>
  );
};

export default BookingFlowMockup;
