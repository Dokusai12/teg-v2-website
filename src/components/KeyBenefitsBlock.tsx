import { Check } from 'lucide-react';

export function KeyBenefitsBlock({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-[900px] mx-auto px-4 lg:px-5">
        <div className="r rounded-3xl border border-border bg-background/60 backdrop-blur-sm p-8 md:p-10 shadow-[0_0_0_1px_hsl(var(--border))]">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 font-display text-center md:text-left">{title}</h2>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-accent" strokeWidth={3} />
                </span>
                <span className="text-[15px] text-muted-foreground leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

