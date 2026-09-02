import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type BentoVariant = 'ink' | 'tinted' | 'plain' | 'glass';

const variantClass: Record<BentoVariant, string> = {
  ink: 'surface-ink',
  tinted: 'rounded-2xl border border-accent/15 bg-accent-soft/70 text-foreground',
  plain: 'surface-1',
  glass: 'surface-glass text-foreground',
};

interface BentoCellProps {
  to?: string;
  href?: string;
  eyebrow?: string;
  title: string;
  description: string;
  variant?: BentoVariant;
  className?: string;
  /** Visual slot — charts, mockups, meters. */
  visual?: ReactNode;
  cta?: string;
  revealClass?: string;
  /** 'stack' (default) puts the visual under the copy; 'split' puts copy left, visual right. */
  layout?: 'stack' | 'split';
}

export function BentoCell({
  to,
  eyebrow,
  title,
  description,
  variant = 'plain',
  className,
  visual,
  cta,
  revealClass = 'rs',
  layout = 'stack',
}: BentoCellProps) {
  const ink = variant === 'ink';

  const copy = (
    <>
      {eyebrow && (
        <p
          className={cn(
            'mb-2 text-[12px] font-semibold uppercase tracking-[0.13em]',
            ink ? 'text-accent-strong' : 'text-accent',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h3 className={cn(layout === 'split' ? 't-h2' : 't-h3', ink ? 'text-ink-foreground' : 'text-foreground')}>
        {title}
      </h3>
      <p className={cn('t-small mt-2 max-w-md', ink && 'text-ink-muted')}>{description}</p>

      {cta && (
        <span
          className={cn(
            'mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium',
            ink ? 'text-ink-foreground' : 'text-accent',
          )}
        >
          {cta}
          <ArrowUpRight className="arrow-slide h-4 w-4" />
        </span>
      )}
    </>
  );

  const body = (
    <>
      {/* ambient wash */}
      {ink && (
        <div
          className="bento-ambient-blur pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.22] blur-[90px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
          aria-hidden
        />
      )}
      {layout === 'split' ? (
        <div className="relative z-10 grid h-full items-center gap-8 md:grid-cols-[5fr_7fr]">
          <div className="flex flex-col items-start">{copy}</div>
          {visual && <div className="relative flex items-center justify-center">{visual}</div>}
        </div>
      ) : (
        <div className="relative z-10 flex h-full flex-col">
          {copy}
          {visual && <div className="mt-6 flex-1">{visual}</div>}
        </div>
      )}
    </>
  );

  const shell = cn(
    'group relative isolate flex h-full flex-col overflow-hidden p-7 md:p-8 no-underline lift focus-ring',
    variantClass[variant],
    revealClass,
    className,
  );

  if (to) {
    return (
      <Link to={to} className={shell}>
        {body}
      </Link>
    );
  }
  return <div className={shell}>{body}</div>;
}
