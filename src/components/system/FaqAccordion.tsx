import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  tone?: 'default' | 'ink';
  className?: string;
}

export function FaqAccordion({ items, tone = 'default', className }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const ink = tone === 'ink';

  return (
    <div className={cn('divide-y', ink ? 'divide-ink-border' : 'divide-border', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={cn(
                  'focus-ring flex w-full items-start justify-between gap-6 py-5 text-left',
                  'transition-colors duration-2 ease-brand',
                  ink
                    ? 'text-ink-foreground hover:text-accent-strong'
                    : 'text-foreground hover:text-accent',
                )}
              >
                <span className="text-[15.5px] font-medium leading-relaxed">{item.question}</span>
                <Plus
                  className={cn(
                    'mt-0.5 h-4 w-4 shrink-0 transition-transform duration-3 ease-brand',
                    isOpen ? 'rotate-45' : 'rotate-0',
                    ink ? 'text-ink-muted' : 'text-muted-foreground',
                  )}
                />
              </button>
            </h3>
            <div
              className="grid transition-[grid-template-rows,opacity] duration-3 ease-brand motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className={cn('t-small max-w-3xl pb-6 pr-10', ink && 'text-ink-muted')}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
