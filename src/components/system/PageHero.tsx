import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Optional breadcrumb trail after Home. */
  crumb?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/** Shared dark hero for the company + legal pages, matching the product/industry templates. */
export function PageHero({ eyebrow, title, lead, crumb, actions, aside, children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-ink pt-28 pb-16 text-ink-foreground md:pt-36 md:pb-20',
        className,
      )}
    >
      <div className="ink-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="bento-ambient-blur pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="shell relative z-10">
        <nav className="r mb-8 flex items-center gap-2 text-[13px] text-ink-muted" aria-label="Breadcrumb">
          <Link to="/" className="no-underline transition-colors duration-2 ease-brand hover:text-ink-foreground">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink-foreground">{crumb ?? eyebrow}</span>
        </nav>

        <div
          className={cn(
            'grid gap-12',
            aside ? 'items-start lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16' : '',
          )}
        >
          <div>
            <p className="r t-eyebrow mb-3 text-accent-strong">{eyebrow}</p>
            <h1 className={cn('r dl1 t-h1 text-balance text-ink-foreground', !aside && 'max-w-3xl')}>{title}</h1>
            {lead && <p className="r dl2 t-lead mt-5 max-w-xl text-ink-muted">{lead}</p>}
            {actions && <div className="r dl3 mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
            {children}
          </div>
          {aside && <div className="rs dl2">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
