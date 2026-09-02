import { ChevronRight } from 'lucide-react';

export function HowItWorksBlock({
  title,
  steps,
}: {
  title: string;
  steps: Array<{ num: string; text: string }>;
}) {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-[900px] mx-auto px-4 lg:px-5">
        <div className="r rounded-3xl border border-border bg-background/60 backdrop-blur-sm p-8 md:p-10 shadow-[0_0_0_1px_hsl(var(--border))]">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 font-display text-center md:text-left">{title}</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background/50 p-4"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent/10 text-accent font-semibold text-[13px] shrink-0 border border-accent/20">
                  {s.num}
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-foreground mb-1">Step {s.num}</div>
                  <div className="text-[14px] text-muted-foreground leading-relaxed">
                    {s.text}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

