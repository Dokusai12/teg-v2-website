import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface FlowStep {
  title: string;
  description: string;
}

interface StepFlowProps {
  steps: FlowStep[];
  tone?: 'default' | 'ink';
  className?: string;
}

/**
 * Scroll-driven step flow: the active step advances as the block moves through
 * the viewport. Falls back to "all active" when motion is reduced.
 */
export function StepFlow({ steps, tone = 'default', className }: StepFlowProps) {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const ink = tone === 'ink';

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setActive(steps.length - 1);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the block enters the lower third, 1 when it leaves the upper third
        const progress = (vh * 0.78 - rect.top) / Math.max(rect.height * 0.85, 1);
        const clamped = Math.min(1, Math.max(0, progress));
        setActive(Math.min(steps.length - 1, Math.floor(clamped * steps.length)));
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  return (
    <ol
      ref={ref}
      className={cn(
        'relative grid gap-5',
        steps.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3',
        className,
      )}
    >
      {steps.map((step, i) => {
        const on = i <= active;
        return (
          <li
            key={step.title}
            className={cn(
              'relative flex flex-col items-center gap-3 rounded-2xl border p-6 text-center md:p-7',
              'transition-[border-color,background-color,transform,opacity] duration-3 ease-brand',
              ink
                ? on
                  ? 'border-accent/40 bg-ink-elevated'
                  : 'border-ink-border bg-ink-elevated/40'
                : on
                  ? 'border-accent/30 bg-accent-soft/50'
                  : 'border-border bg-card',
              on ? 'opacity-100' : 'opacity-70',
            )}
          >
            <div className="flex items-center justify-center gap-3">
              <span
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold tabular-nums',
                  'transition-[background-color,color,transform] duration-3 ease-spring',
                  on
                    ? 'scale-100 bg-accent text-accent-foreground'
                    : ink
                      ? 'scale-95 bg-ink-border/60 text-ink-muted'
                      : 'scale-95 bg-secondary text-muted-foreground',
                )}
              >
                {i + 1}
              </span>
              <h3 className={cn('t-h3', ink ? 'text-ink-foreground' : 'text-foreground')}>
                {step.title}
              </h3>
            </div>
            <p className={cn('t-small', ink && 'text-ink-muted')}>{step.description}</p>
            {/* progress rail on desktop */}
            <span
              className={cn(
                'absolute -bottom-px left-6 right-6 h-px origin-left transition-transform duration-4 ease-brand',
                on ? 'scale-x-100 bg-accent/50' : 'scale-x-0 bg-transparent',
              )}
              aria-hidden
            />
          </li>
        );
      })}
    </ol>
  );
}
