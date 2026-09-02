import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const on = () => setReduce(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduce;
}

/** Counts to a target exactly once, when scrolled into view. */
export function useCountOnce(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      setValue(target);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          // easeOutExpo — fast, then settles
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setValue(Number((target * eased).toFixed(decimals)));
          if (p < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, reduce]);

  return { ref, value };
}

interface StatBlockProps {
  value: string;
  /** When set, the numeric part animates up on first view. */
  countTo?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  tone?: 'default' | 'ink';
  className?: string;
}

export function StatBlock({
  value,
  countTo,
  decimals = 0,
  prefix = '',
  suffix = '',
  label,
  tone = 'default',
  className,
}: StatBlockProps) {
  const { ref, value: counted } = useCountOnce(countTo ?? 0, decimals);
  const ink = tone === 'ink';

  return (
    <div
      className={cn(
        'flex flex-col gap-2 p-7 md:p-8',
        ink
          ? 'rounded-2xl border border-ink-border bg-ink-elevated'
          : 'surface-1 lift',
        className,
      )}
    >
      <span
        ref={ref}
        className={cn(
          'count-slot t-num text-[2rem] font-semibold leading-none md:text-[2.5rem]',
          ink ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {countTo != null ? `${prefix}${counted.toFixed(decimals)}${suffix}` : value}
      </span>
      <span className={cn('text-[13.5px] leading-relaxed', ink ? 'text-ink-muted' : 'text-muted-foreground')}>
        {label}
      </span>
    </div>
  );
}
