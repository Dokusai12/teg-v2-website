import { Luggage, Plane, Layers, ShieldCheck, Shield, Check, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Shared visual kit — every bento cell and product mockup draws from these so
 * the whole site reads as one family. All motion is transform/opacity only.
 */

const rowBase =
  'flex items-center gap-3 rounded-xl border p-3 transition-[transform,border-color,background-color] duration-3 ease-brand';

/* ── Refund Shield: attach-rate meter + revenue curve ───────────── */
export function AttachRateMeter({ ink = false }: { ink?: boolean }) {
  const bars = [18, 26, 22, 34, 30, 42, 38, 50, 46, 60, 56, 70, 78, 88, 100];
  return (
    <div
      className={cn(
        'rounded-xl border p-5',
        ink ? 'border-ink-border bg-ink-elevated/80' : 'border-border bg-background',
      )}
    >
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className={cn('text-[11px] uppercase tracking-[0.12em]', ink ? 'text-ink-muted' : 'text-muted-foreground')}>
            Attach rate
          </p>
          <p className={cn('t-num mt-1 text-[26px] font-semibold', ink ? 'text-ink-foreground' : 'text-foreground')}>
            34.2%
          </p>
        </div>
        <span className="rounded-full bg-signal/12 px-2.5 py-1 text-[11px] font-semibold text-signal">
          +8.3% MoM
        </span>
      </div>

      <div className="flex h-20 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className={cn(
              'flex-1 origin-bottom rounded-sm transition-transform duration-4 ease-brand',
              ink ? 'bg-accent/45' : 'bg-accent/25',
              'group-hover:scale-y-105',
            )}
            style={{ height: `${h}%`, transitionDelay: `${i * 18}ms` }}
          />
        ))}
      </div>

      <div className={cn('mt-4 grid grid-cols-2 gap-3 border-t pt-4', ink ? 'border-ink-border' : 'border-border')}>
        {[
          { k: 'Revenue / txn', v: '£4.21' },
          { k: 'Conversion', v: '19.8%' },
        ].map((m) => (
          <div key={m.k}>
            <p className={cn('text-[11px]', ink ? 'text-ink-muted' : 'text-muted-foreground')}>{m.k}</p>
            <p className={cn('t-num text-[15px] font-semibold', ink ? 'text-ink-foreground' : 'text-foreground')}>
              {m.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Refund Shield: vertical checkout card (single column) ───────── */
export function CheckoutCard() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[32px] bg-accent/15 blur-2xl transition-opacity duration-4 ease-brand group-hover:opacity-80"
      />

      <div className="relative overflow-hidden rounded-3xl border border-ink-border bg-card shadow-elev-3 transition-transform duration-4 ease-brand group-hover:-translate-y-1">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f07d7d]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#f2c94c]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
          </span>
          <span className="mx-auto rounded-full bg-background px-4 py-1 text-[10px] text-muted-foreground">
            partner-travel.com/checkout
          </span>
          <span className="w-9" />
        </div>

        <div className="relative p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Your trip
          </p>

          {/* trip summary */}
          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/12">
              <Plane className="h-5 w-5 text-accent" strokeWidth={1.75} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] font-semibold leading-tight text-foreground">
                London → Barcelona
              </p>
              <p className="t-caption mt-0.5">15 Jul – 22 Jul · 2 passengers</p>
            </div>
            <span className="t-num text-[15px] font-semibold text-foreground">£438</span>
          </div>

          {/* Refund Shield add-on */}
          <div className="relative mt-3 rounded-2xl border border-signal/30 bg-signal/[0.07] p-3.5 transition-[border-color,background-color,box-shadow] duration-3 ease-brand group-hover:border-signal/50 group-hover:bg-signal/[0.1] group-hover:shadow-[0_0_24px_-6px_hsl(var(--signal)/0.35)]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal">
                <Shield className="h-5 w-5 text-background" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-foreground">Refund Shield</p>
                <p className="t-caption">Full refund if you can't travel</p>
              </div>
              <span className="t-num text-[14px] font-semibold text-signal">+£24</span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-signal transition-transform duration-2 ease-spring group-hover:scale-110">
                <Check className="h-3 w-3 text-background" strokeWidth={4} />
              </span>
              <span className="text-[12px] font-medium text-foreground">Yes, protect my trip</span>
            </div>
          </div>

          {/* floating revenue pill */}
          <div
            className="absolute -right-2 top-[96px] rounded-2xl border border-border bg-card px-4 py-2.5 text-center shadow-elev-2 transition-transform duration-3 ease-spring group-hover:-translate-y-1"
            aria-hidden
          >
            <p className="t-num text-[16px] font-bold leading-none text-signal">+£24</p>
            <p className="mt-1 text-[9.5px] font-medium text-muted-foreground">New Revenue</p>
          </div>

          {/* total + CTA */}
          <div className="mt-4 flex items-center justify-between px-1">
            <span className="text-[13.5px] font-semibold text-foreground">Total</span>
            <span className="t-num text-[19px] font-bold text-foreground">£462</span>
          </div>

          <div className="mt-3 rounded-xl bg-foreground py-3 text-center text-[13px] font-semibold text-background transition-opacity duration-2 group-hover:opacity-90">
            Complete Booking
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Refund Shield: full-width checkout — traveller view + partner revenue ── */
export function CheckoutShield() {
  return (
    <div className="relative w-full">
      {/* ambient glow behind the card on the ink cell */}
      <div
        aria-hidden
        className="absolute -inset-5 rounded-[28px] bg-accent/15 blur-2xl transition-opacity duration-4 ease-brand group-hover:opacity-80"
      />

      <div className="relative overflow-hidden rounded-2xl border border-ink-border bg-card shadow-elev-3 transition-transform duration-4 ease-brand group-hover:-translate-y-1">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </span>
          <span className="mx-auto flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-[10px] text-muted-foreground">
            <Lock className="h-2.5 w-2.5" />
            partner-travel.com/checkout
          </span>
          <span className="w-8" />
        </div>

        {/* two panes: trip + add-on | order summary */}
        <div className="grid sm:grid-cols-[1.25fr_1fr]">
          {/* left — the traveller's choice */}
          <div className="p-4 sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Your trip
            </p>

            <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/12">
                <Plane className="h-[18px] w-[18px] text-accent" strokeWidth={1.75} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold text-foreground">London → Barcelona</p>
                <p className="t-caption">15 Jul – 22 Jul · 2 passengers</p>
              </div>
              <span className="t-num text-[14px] font-semibold text-foreground">£438</span>
            </div>

            {/* Refund Shield add-on */}
            <div className="relative mt-3 rounded-xl border border-signal/30 bg-signal/[0.07] p-3.5 transition-[border-color,background-color] duration-3 ease-brand group-hover:border-signal/45 group-hover:bg-signal/[0.1]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal/15">
                  <Shield className="h-[18px] w-[18px] text-signal" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-foreground">Refund Shield</p>
                  <p className="t-caption">Full refund if you can't travel</p>
                </div>
                <span className="t-num text-[13px] font-semibold text-signal">+£24</span>
              </div>

              <div className="mt-2.5 flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded border-2 border-signal bg-signal transition-transform duration-2 ease-spring group-hover:scale-110">
                  <Check className="h-2.5 w-2.5 text-background" strokeWidth={4} />
                </span>
                <span className="text-[11.5px] font-medium text-foreground">Yes, protect my trip</span>
              </div>
            </div>
          </div>

          {/* right — order summary + partner upside */}
          <div className="flex flex-col border-t border-border bg-secondary/40 p-4 sm:border-l sm:border-t-0 sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Order summary
            </p>

            <div className="mt-2.5 space-y-1.5 text-[12px]">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Flight + hotel</span>
                <span className="t-num font-medium text-foreground">£438</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Refund Shield</span>
                <span className="t-num font-medium text-signal">£24</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-[13px] font-semibold text-foreground">Total</span>
              <span className="t-num text-[16px] font-bold text-foreground">£462</span>
            </div>

            <div className="mt-3 rounded-xl bg-foreground py-2.5 text-center text-[12.5px] font-semibold text-background transition-opacity duration-2 group-hover:opacity-90">
              Complete booking
            </div>

            {/* partner revenue chip — the original badge, refined */}
            <div className="mt-auto pt-3">
              <div className="flex items-center justify-between rounded-xl border border-signal/25 bg-signal/[0.08] px-3 py-2.5 transition-transform duration-3 ease-spring group-hover:-translate-y-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Your new revenue
                </span>
                <span className="t-num text-[15px] font-bold text-signal">+£24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Baggage Shield: claim flow that advances on hover ──────────── */
export function BaggageClaimFlow() {
  const steps = ['Bag reported delayed', 'Automatic verification', 'Cash paid out'];
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className={cn(rowBase, 'border-border bg-secondary/50')}>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/12">
          <Luggage className="h-5 w-5 text-accent" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold text-foreground">Checked bags · 2 items</p>
          <p className="t-caption">Delayed 24h+ · cash compensation</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
          +£7.50
        </span>
      </div>

      <ol className="mt-4 space-y-2.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2.5">
            <span
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-3 ease-spring',
                'border-border bg-background group-hover:scale-100 group-hover:border-signal group-hover:bg-signal',
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Check className="h-3 w-3 text-background opacity-0 transition-opacity duration-2 group-hover:opacity-100" strokeWidth={3.5} />
            </span>
            <span className="t-caption">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── Air Shield: live flight-status strip ───────────────────────── */
export function FlightStatusStrip() {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Flight status</p>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-signal">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
          </span>
          Live
        </span>
      </div>

      <div className={cn(rowBase, 'border-border bg-secondary/50')}>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/12">
          <Plane className="h-5 w-5 text-accent" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="t-num text-[13px] font-semibold text-foreground">LGW → BCN</p>
          <p className="t-caption">Delayed 3h 12m · EU261-style payout</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
          +£220
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="h-1 flex-1 overflow-hidden rounded-full bg-border">
          <span className="block h-full w-2/3 origin-left rounded-full bg-accent transition-transform duration-4 ease-brand group-hover:scale-x-110" />
        </span>
        <span className="t-caption shrink-0">Auto-assessed in 90s</span>
      </div>
    </div>
  );
}

/* ── Bundles: price stack ───────────────────────────────────────── */
export function BundleStack() {
  const rows = [
    { name: 'Refund Shield', price: '£12' },
    { name: 'Baggage Shield', price: '£8' },
    { name: 'Air Shield', price: '£6' },
  ];
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="mb-3 flex items-center gap-2">
        <Layers className="h-4 w-4 text-accent" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
          Complete protection
        </span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.name}
          className="flex items-center justify-between border-b border-border/70 py-2 text-[13px] last:border-0"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <span className="flex items-center gap-2 text-muted-foreground">
            <span className="flex h-4 w-4 items-center justify-center rounded border-2 border-accent bg-accent">
              <Check className="h-2.5 w-2.5 text-accent-foreground" strokeWidth={4} />
            </span>
            {row.name}
          </span>
          <span className="t-num text-[12px] text-muted-foreground line-through">{row.price}</span>
        </div>
      ))}
      <div className="mt-3 flex items-end justify-between rounded-lg bg-secondary/60 px-3 py-2.5">
        <div>
          <p className="t-caption">Bundle vs separate</p>
          <p className="t-num text-[13px]">
            <span className="text-muted-foreground line-through">£26</span>
            <span className="mx-1.5 font-semibold text-foreground">£19</span>
            <span className="font-medium text-signal">save £7</span>
          </p>
        </div>
        <span className="rounded-md bg-foreground px-2.5 py-1 text-[10.5px] font-semibold text-primary-foreground">
          Higher attach
        </span>
      </div>
    </div>
  );
}

/* ── Small reusable trust chip ──────────────────────────────────── */
export function TrustChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12.5px] text-muted-foreground">
      <ShieldCheck className="h-3.5 w-3.5 text-accent" />
      {label}
    </span>
  );
}
