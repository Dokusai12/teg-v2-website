import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/system/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Use' },
  { to: '/cookies', label: 'Cookies Policy' },
  { to: '/modern-slavery', label: 'Modern Slavery Statement' },
  { to: '/anti-bribery', label: 'Anti-Bribery and Corruption Policy' },
];

interface LegalLayoutProps {
  title: string;
  updated?: string;
  intro?: string;
  children: ReactNode;
}

export function LegalLayout({ title, updated, intro, children }: LegalLayoutProps) {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <PageHero eyebrow="Legal" crumb={title} title={title} lead={intro}>
          {updated && <p className="r dl3 mt-6 t-small text-ink-muted">Last updated: {updated}</p>}
        </PageHero>

        <section className="section-y bg-secondary/45">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-16">
            <aside className="rl lg:sticky lg:top-28 lg:self-start">
              <p className="t-eyebrow mb-4">Policies</p>
              <ul className="flex flex-col gap-1">
                {legalLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`block rounded-lg px-3 py-2 text-[14px] no-underline transition-colors duration-2 ease-brand ${
                        l.label === title
                          ? 'bg-accent-soft/70 font-medium text-accent'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <article className="r legal-prose surface-1 p-7 md:p-10">{children}</article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
