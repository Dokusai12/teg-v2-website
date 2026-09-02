import { forwardRef, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Tone = 'default' | 'muted' | 'ink';

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  as?: ElementType;
  /** Adds the hairline grid texture (ink tone only). */
  grid?: boolean;
}

const toneClass: Record<Tone, string> = {
  default: 'bg-background text-foreground',
  muted: 'bg-secondary/45 text-foreground',
  ink: 'bg-ink text-ink-foreground',
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, tone = 'default', className, innerClassName, children, as, grid = false },
  ref,
) {
  const Tag = (as ?? 'section') as ElementType;
  return (
    <Tag id={id} ref={ref} className={cn('relative section-y', toneClass[tone], className)}>
      {tone === 'ink' && grid && (
        <div className="ink-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      )}
      <div className={cn('shell relative', innerClassName)}>{children}</div>
    </Tag>
  );
});

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'ink';
  className?: string;
  actions?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
  className,
  actions,
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div
      className={cn(
        'r flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start',
        actions && !centered && 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className={cn(centered ? 'max-w-2xl' : 'max-w-2xl')}>
        {eyebrow && (
          <p className={cn('t-eyebrow mb-3', tone === 'ink' && 'text-accent-strong')}>{eyebrow}</p>
        )}
        <h2 className={cn('t-h2', tone === 'ink' ? 'text-ink-foreground' : 'text-foreground')}>
          {title}
        </h2>
        {description && (
          <p className={cn('t-lead mt-4', tone === 'ink' && 'text-ink-muted')}>{description}</p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}
