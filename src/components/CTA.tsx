import { Link } from 'react-router-dom';
import { CtaLink } from '@/components/system/CtaLink';

const points = [
  'A working integration plan on the first call',
  'Revenue modelling against your own booking volumes',
  'Go-live support from the engineers who built the API',
];

export function CTA() {
  return (
    <section id="contact" className="section-y bg-background">
      <div className="shell">
        <div className="r relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-ink" />
          <div className="ink-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <div
            className="cta-ambient-blur absolute right-0 top-0 h-96 w-96 rounded-full opacity-20 blur-[100px]"
            style={{ background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(268 62% 58%))' }}
          />
          <div
            className="cta-ambient-blur absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-[0.12] blur-[80px]"
            style={{ background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(var(--accent)))' }}
          />

          <div className="relative z-10 grid gap-10 px-8 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:px-16 md:py-20">
            <div>
              <p className="t-eyebrow mb-3 text-accent-strong">Get started</p>
              <h2 className="t-h2 text-ink-foreground">
                Start generating revenue from your checkout
              </h2>
              <p className="t-lead mt-4 max-w-lg text-ink-muted">
                Tell us what you sell and how you sell it. We will come back with the products that
                fit, the expected uplift and a route to live.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink to="/contact" size="lg">
                  Contact sales
                </CtaLink>
                <Link
                  to="/careers"
                  className="press focus-ring inline-flex items-center justify-center rounded-full border border-ink-border px-6 py-3.5 text-[15px] font-medium text-ink-foreground no-underline transition-colors duration-2 ease-brand hover:bg-ink-elevated"
                >
                  Join the team
                </Link>
              </div>
            </div>

            <ul className="space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-ink-border bg-ink-elevated/70 p-4 text-[14px] leading-relaxed text-ink-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
