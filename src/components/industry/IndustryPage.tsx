import { Link } from 'react-router-dom';
import { Check, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Section, SectionHeading } from '@/components/system/Section';
import { CtaLink } from '@/components/system/CtaLink';
import { StepFlow } from '@/components/system/StepFlow';
import { FaqAccordion } from '@/components/system/FaqAccordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { industries, industryOrder, type IndustryContent } from '@/content/industries';
import { products } from '@/content/products';

function IndustryHeroBlock({ industry }: { industry: IndustryContent }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 pb-16 text-ink-foreground md:pt-36 md:pb-20">
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
          <span className="text-ink-muted">Industries</span>
          <span aria-hidden>/</span>
          <span className="text-ink-foreground">{industry.name}</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="r t-eyebrow mb-3 text-accent-strong">{industry.eyebrow}</p>
            <h1 className="r dl1 t-h1 text-balance text-ink-foreground">{industry.headline}</h1>
            <p className="r dl2 t-lead mt-5 max-w-xl text-ink-muted">{industry.lead}</p>

            <ul className="r dl3 mt-8 grid gap-3 sm:grid-cols-2">
              {industry.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/15">
                    <Check className="h-3 w-3 text-accent-strong" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] leading-relaxed text-ink-muted">{point}</span>
                </li>
              ))}
            </ul>

            <div className="r dl4 mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaLink to="/contact" size="lg">
                Talk to sales
              </CtaLink>
              <Link
                to="/#products"
                className="press focus-ring inline-flex items-center justify-center rounded-full border border-ink-border px-6 py-3.5 text-[15px] font-medium text-ink-foreground no-underline transition-colors duration-2 ease-brand hover:bg-ink-elevated"
              >
                See the products
              </Link>
            </div>
          </div>

          <div className="rs dl2 group relative">{industry.visual}</div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industry.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`r dl${i + 1} rounded-2xl border border-ink-border bg-ink-elevated/70 p-6`}
            >
              <p className="t-num text-[1.6rem] font-semibold leading-none text-ink-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryPage({ slug }: { slug: string }) {
  useScrollReveal();
  const industry = industries[slug];
  const related = industryOrder.filter((s) => s !== slug).slice(0, 3).map((s) => industries[s]);

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <IndustryHeroBlock industry={industry} />

        {/* Why it matters */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="The opportunity"
            title={`What protection changes in ${industry.name.toLowerCase()}`}
            description="The commercial case is the same everywhere: more revenue per transaction, a better outcome for the customer, and no new work for your team."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industry.pillars.map((pillar, i) => (
              <article key={pillar.title} className={`surface-1 lift r dl${i + 1} p-7`}>
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <pillar.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </span>
                <h3 className="t-h3">{pillar.title}</h3>
                <p className="t-small mt-2.5">{pillar.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Who it fits */}
        <Section>
          <SectionHeading
            eyebrow="Who it fits"
            title="Where it lands hardest"
            description="Different business models sell protection differently. These are the shapes we see most often in this sector."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {industry.fit.map((item, i) => (
              <div key={item.title} className={`surface-1 r dl${i + 1} p-7 md:p-8`}>
                <span className="t-num mb-4 block text-[13px] font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-small mt-2.5">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Products that fit */}
        <Section tone="ink" grid>
          <SectionHeading
            tone="ink"
            eyebrow="Recommended products"
            title="The products that fit this sector"
            description="Run one, or bundle them. Everything shares the same integration, contract and reporting."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {industry.products.map((s, i) => {
              const product = products[s];
              return (
                <Link
                  key={s}
                  to={`/products/${s}`}
                  className={`focus-ring lift r dl${i + 1} group flex flex-col rounded-2xl border border-ink-border bg-ink-elevated/70 p-7 no-underline`}
                >
                  <p className="t-eyebrow mb-2 text-accent-strong">{product.eyebrow}</p>
                  <h3 className="t-h3 text-ink-foreground">{product.name}</h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-muted">
                    {product.lead.split('.')[0]}.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-foreground">
                    Explore {product.name}
                    <ArrowUpRight className="arrow-slide h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* How we launch */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="Getting live"
            title="How a launch actually runs"
            description="From first call to measurable revenue, with our engineers alongside yours."
          />
          <div className="mt-14">
            <StepFlow steps={industry.steps} />
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Questions"
                title={`${industry.name}, answered`}
                description="Anything not covered here is answered directly by our commercial and engineering teams."
              />
              <div className="r dl2 mt-8">
                <CtaLink to="/contact" variant="outline">
                  Ask us anything
                </CtaLink>
              </div>
            </div>
            <div className="r dl1">
              <FaqAccordion items={industry.faqs} />
            </div>
          </div>
        </Section>

        {/* Related industries */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="Other sectors"
            title="We work across the whole journey"
            description="The same suite, adapted to how each sector actually sells."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {related.map((other, i) => (
              <Link
                key={other.slug}
                to={`/industries/${other.slug}`}
                className={`surface-1 lift focus-ring group r dl${i + 1} flex flex-col p-7 no-underline`}
              >
                <h3 className="t-h3">{other.name}</h3>
                <p className="t-small mt-2.5 flex-1">{other.lead.split('.')[0]}.</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent">
                  View {other.name}
                  <ArrowUpRight className="arrow-slide h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
