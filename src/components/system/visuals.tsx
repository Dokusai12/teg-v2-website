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
