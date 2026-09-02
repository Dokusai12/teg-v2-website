import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ink' | 'ghost' | 'outline';

const base =
  'press focus-ring inline-flex items-center justify-center gap-1.5 rounded-full text-[15px] font-medium no-underline group';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-foreground shadow-[0_10px_28px_-12px_hsl(var(--accent)/0.7)] hover:bg-accent-strong',
  ink: 'bg-foreground text-primary-foreground hover:opacity-90',
  outline:
    'border border-border bg-background text-foreground hover:border-accent/40 hover:bg-secondary/60',
  ghost: 'text-foreground hover:bg-secondary/70',
};

interface CtaLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withArrow?: boolean;
}

export function CtaLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className,
  withArrow = true,
}: CtaLinkProps) {
  const sizing =
    size === 'lg' ? 'px-6 py-3.5' : size === 'sm' ? 'px-4 py-2 text-[14px]' : 'px-5 py-3';
  return (
    <Link to={to} className={cn(base, variants[variant], sizing, className)}>
      {children}
      {withArrow && <ChevronRight className="arrow-slide h-4 w-4" />}
    </Link>
  );
}
