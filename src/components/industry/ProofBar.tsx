interface ProofBarProps {
  stats: { value: string; label: string }[];
}

export function ProofBar({ stats }: ProofBarProps) {
  return (
    <section className="py-10 md:py-14 bg-background border-y border-border">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="r grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 md:p-6 text-center"
            >
              <div className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-foreground font-display leading-tight">
                {stat.value}
              </div>
              <div className="text-[13px] text-muted-foreground mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
