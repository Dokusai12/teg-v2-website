import { Link } from 'react-router-dom';
import BookingFlowMockup from '@/components/BookingFlowMockup';
import { Luggage, Plane, Layers } from 'lucide-react';

const productCardFocus =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export function BentoGrid() {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="mb-14 r">
          <p className="text-accent text-[14px] font-medium mb-3">Products</p>
          <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight max-w-xl">
            A unified suite of revenue products
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card: Refund Shield (v4 checkout mock, compacted + side-by-side on lg+) */}
          <Link
            to="/products/refund-shield"
            className={`rs dl1 lg:col-span-2 bg-foreground text-primary-foreground rounded-2xl p-8 md:p-10 relative overflow-hidden group block no-underline transition-[transform,box-shadow] hover:shadow-lg hover:shadow-accent/10 ${productCardFocus}`}
          >
            <div className="bento-ambient-blur absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-[80px]"
              style={{ background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))' }} />
            <div className="relative z-10">
              <div className="lg:flex lg:flex-row lg:items-start lg:gap-8">
                <div className="lg:flex-1">
                  <p className="text-[13px] text-primary-foreground/50 font-medium mb-2">Flagship</p>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-primary-foreground">
                    Refund Shield
                  </h3>
                  <p className="text-primary-foreground/60 text-[15px] leading-relaxed max-w-md mb-6">
                    Offer fully refundable bookings at checkout. Customers get peace of mind, you get higher
                    conversions and incremental revenue on every transaction.
                  </p>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-auto lg:flex-1 flex justify-center lg:justify-end pointer-events-none" aria-hidden>
                  <div className="v4-booking-mock-root rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/[0.08] p-4 overflow-x-auto">
                    <BookingFlowMockup compact />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Analytics: illustrative card only (not a link) */}
          <div className="rs dl2 flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-inherit">
            <p className="text-[13px] text-accent font-medium mb-2">Analytics</p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Real-time revenue tracking</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
              Track performance, conversion rates, and revenue impact across every product in real time.
            </p>

            {/* Mini sparkline chart */}
            <div className="mb-4">
              <svg viewBox="0 0 200 60" className="w-full h-[60px]" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" className="[stop-color:hsl(var(--accent))]" stopOpacity="0.15" />
                    <stop offset="100%" className="[stop-color:hsl(var(--accent))]" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,45 L25,38 L50,42 L75,30 L100,32 L125,20 L150,18 L175,12 L200,8 L200,60 L0,60Z" fill="url(#chartFill)" />
                <path d="M0,45 L25,38 L50,42 L75,30 L100,32 L125,20 L150,18 L175,12 L200,8" fill="none" className="stroke-accent" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Metric grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: 'Attach rate', value: '34.2%', change: '+2.1%' },
                { label: 'Revenue/txn', value: '£4.21', change: '+8.3%' },
              ].map((m) => (
                <div key={m.label} className="bg-secondary/50 rounded-lg p-2.5">
                  <div className="text-[10px] text-muted-foreground mb-0.5">{m.label}</div>
                  <div className="text-[15px] font-bold text-foreground">{m.value}</div>
                  <div className="text-[10px] text-accent font-medium">{m.change}</div>
                </div>
              ))}
            </div>

            {/* Progress bars */}
            <div className="space-y-2 mt-auto">
              {[
                { label: 'Conversion', value: '19.8%', bar: 68 },
                { label: 'Retention', value: '92.1%', bar: 92 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="font-medium text-foreground">{m.value}</span>
                  </div>
                  <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent/60 rounded-full" style={{ width: `${m.bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Baggage Shield: checkout-style baggage protection */}
          <Link
            to="/products/baggage-shield"
            className={`rs dl3 bg-card rounded-2xl border border-border p-8 flex flex-col h-full no-underline text-inherit transition-colors hover:border-accent/30 hover:bg-card ${productCardFocus}`}
          >
            <p className="text-[13px] text-accent font-medium mb-2">Add-on</p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Baggage Shield</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
              Compensate customers for lost or delayed baggage, while unlocking incremental revenue per booking.
            </p>
            <div className="mt-auto rounded-xl border border-border bg-secondary/40 p-4 space-y-3 h-[180px] flex flex-col">
              <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Baggage</div>
              <div className="flex items-center gap-3 rounded-lg bg-background border border-border p-3">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Luggage className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-foreground">
                    Checked bags · <span className="whitespace-nowrap">2 items</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground">Lost or delayed 24h+? Cash compensation</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">+£7.50</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground px-0.5">
                <span>Customer gets peace of mind</span>
                <span className="font-medium text-foreground">You earn per bag</span>
              </div>
            </div>
          </Link>

          {/* Air Shield: delay / disruption */}
          <Link
            to="/products/air-shield"
            className={`rs dl4 bg-card rounded-2xl border border-border p-8 flex flex-col h-full no-underline text-inherit transition-colors hover:border-accent/30 hover:bg-card ${productCardFocus}`}
          >
            <p className="text-[13px] text-accent font-medium mb-2">Disruption</p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Air Shield</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
              Compensation for flight delays and disruptions, fully integrated into your booking flow.
            </p>
            <div className="mt-auto rounded-xl border border-border bg-secondary/40 p-4 space-y-3 h-[180px] flex flex-col">
              <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Flight status</div>
              <div className="flex items-center gap-3 rounded-lg bg-background border border-border p-3">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-foreground">LGW → BCN</div>
                  <div className="text-[11px] text-muted-foreground">Departure delayed 3h 12m · EU261-style payout</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">+£220</div>
                </div>
              </div>
              <div className="!mt-auto flex items-center justify-between text-[11px] text-muted-foreground px-0.5">
                <span>Customer gets peace of mind</span>
                <span className="font-medium text-foreground">You earn per trip</span>
              </div>
            </div>
          </Link>

          {/* Bundles: three products, bundle price */}
          <Link
            to="/products/bundles"
            className={`rs dl5 bg-card rounded-2xl border border-border p-8 flex flex-col h-full no-underline text-inherit transition-colors hover:border-accent/30 hover:bg-card ${productCardFocus}`}
          >
            <p className="text-[13px] text-accent font-medium mb-2">Bundle</p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Bundles</h3>
            <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
              Offer discounted bundles across Refund Shield, Baggage Shield, and Air Shield, maximising revenue per booking.
            </p>
            <div className="mt-auto rounded-xl border border-border bg-secondary/40 p-4 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-accent shrink-0" />
                <span className="text-[11px] font-semibold text-foreground uppercase tracking-wide">Complete protection</span>
              </div>
              {[
                { name: 'Refund Shield', was: '£12', inc: true },
                { name: 'Baggage Shield', was: '£8', inc: true },
                { name: 'Air Shield', was: '£6', inc: true },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between text-[12px] py-1.5 border-b border-border/60 last:border-0">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded border-2 border-accent bg-accent flex items-center justify-center">
                      <svg className="w-2 h-2 text-card" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {row.name}
                  </span>
                  <span className="text-muted-foreground line-through text-[11px]">{row.was}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 mt-1">
                <div>
                  <div className="text-[10px] text-muted-foreground">Bundle vs separate</div>
                  <div className="text-[11px] text-muted-foreground">
                    <span className="line-through">£26</span>
                    <span className="mx-1.5 text-foreground font-semibold">£19</span>
                    <span className="text-accent font-medium">Save £7</span>
                  </div>
                </div>
                <div className="text-[10px] font-semibold text-primary-foreground bg-foreground px-2.5 py-1 rounded-md">Higher attach</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
