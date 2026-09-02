import { Check } from 'lucide-react';

interface ContentSectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  items?: Array<{
    label: string;
    detail?: string;
    number?: string;
  }>;
}

export function ContentSection({
  eyebrow,
  title,
  description,
  items = [],
}: ContentSectionProps) {
  const hasNumbers = items.some((item) => item.number);
  const hasItems = items.length > 0;

  if (!hasItems) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-accent text-[14px] font-medium mb-3">{eyebrow}</p>
              <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight">
                {title}
              </h2>
            </div>
            {description && (
              <div className="lg:col-span-7 flex items-end">
                <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-accent text-[14px] font-medium mb-3">
                {eyebrow}
              </p>
              <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight">
                {title}
              </h2>
              {description && (
                <p className="text-[15px] text-muted-foreground leading-relaxed mt-4 max-w-md">
                  {description}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            {items.map((item, i) => (
              <div
                key={item.label}
                className={`py-6 ${
                  i < items.length - 1 ? 'border-b border-border/60' : ''
                }`}
              >
                <div className={`flex gap-5 ${hasNumbers ? 'items-start' : 'items-center'}`}>
                  {hasNumbers ? (
                    <div className="text-[2rem] md:text-[2.5rem] font-bold font-display leading-none shrink-0 w-12 text-accent/20">
                      {item.number}
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] md:text-[17px] font-semibold leading-snug text-foreground">
                      {item.label}
                    </h3>
                    {item.detail && (
                      <p className="text-[14px] leading-relaxed mt-1.5 text-muted-foreground">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
