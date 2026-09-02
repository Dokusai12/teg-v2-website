interface IndustrySectionProps {
  title: string;
  description: string;
  bullets?: string[];
}

export function IndustrySection({ title, description, bullets }: IndustrySectionProps) {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-[900px] mx-auto px-4 lg:px-5">
        <div className="r rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-display">{title}</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">{description}</p>
          {bullets && bullets.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-[15px] text-muted-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
