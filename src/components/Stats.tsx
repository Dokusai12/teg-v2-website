import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useIsNarrowViewport768 } from '@/hooks/useIsNarrowViewport768';

const stats: Array<
  | { valueType: 'number'; num: number; suffix: string; label: string; desc: string }
  | { valueType: 'text'; value: string; label: string; desc: string }
> = [
  {
    valueType: 'text',
    value: '12+ years',
    label: '12+ years',
    desc: 'Building embedded revenue infrastructure',
  },
  {
    valueType: 'text',
    value: '50+ markets',
    label: '50+ markets',
    desc: 'Multi-currency, multi-language, fully localised',
  },
  {
    valueType: 'text',
    value: '10 to 15%',
    label: '10 to 15%',
    desc: 'Increase in basket value',
  },
  {
    valueType: 'number',
    num: 99.9,
    suffix: '%',
    label: '99.9%',
    desc: 'Platform uptime',
  },
];

function Count({ to, suffix, go }: { to: number; suffix: string; go: boolean }) {
  const [v, setV] = useState(0);
  const isDecimal = to % 1 !== 0;
  useEffect(() => {
    if (!go) return;
    let c = 0;
    const step = to / 40;
    const id = setInterval(() => {
      c += step;
      if (c >= to) { setV(to); clearInterval(id); }
      else setV(isDecimal ? Math.round(c * 10) / 10 : Math.floor(c));
    }, 25);
    return () => clearInterval(id);
  }, [go, to, isDecimal]);
  return <>{isDecimal ? v.toFixed(1) : v}{suffix}</>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  const narrow = useIsNarrowViewport768();

  useLayoutEffect(() => {
    if (narrow) setGo(true);
  }, [narrow]);

  useEffect(() => {
    if (narrow) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: 0.25 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [narrow]);

  return (
    <section ref={ref} id="customers" className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="text-center mb-14 r">
          <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight">
            Results at scale
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`r dl${i + 1} bg-background rounded-2xl border border-border p-7 flex flex-col items-center text-center min-h-[170px] md:min-h-[185px]`}
            >
              <div className="w-full min-h-[3.25rem] md:min-h-[3.5rem] flex items-end justify-center text-3xl md:text-4xl font-semibold text-foreground tabular-nums font-display text-center leading-none">
                {s.valueType === 'number' ? (
                  <Count to={s.num} suffix={s.suffix} go={go} />
                ) : (
                  <>{s.value}</>
                )}
              </div>
              <p className="mt-3 w-full max-w-[13rem] mx-auto text-[13px] text-muted-foreground leading-relaxed text-center">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
