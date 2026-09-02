import { Link } from 'react-router-dom';
import { Check, X, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Section, SectionHeading } from '@/components/system/Section';
import { CtaLink } from '@/components/system/CtaLink';
import { StepFlow } from '@/components/system/StepFlow';
import { FaqAccordion } from '@/components/system/FaqAccordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { products, productOrder, type ProductContent } from '@/content/products';

function ProductHero({ product }: { product: ProductContent }) {
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
          <Link to="/#products" className="no-underline transition-colors duration-2 ease-brand hover:text-ink-foreground">
            Products
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink-foreground">{product.name}</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="r t-eyebrow mb-3 text-accent-strong">{product.eyebrow}</p>
            <h1 className="r dl1 t-h1 text-balance text-ink-foreground">{product.headline}</h1>
            <p className="r dl2 t-lead mt-5 max-w-xl text-ink-muted">{product.lead}</p>

            <ul className="r dl3 mt-8 grid gap-3 sm:grid-cols-2">
              {product.keyPoints.map((point) => (
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
                See the full suite
              </Link>
            </div>
          </div>

          <div className="rs dl2 group relative">{product.visual}</div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {product.heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`r dl${i + 1} rounded-2xl border border-ink-border bg-ink-elevated/70 p-6`}
            >
              <p className="t-num text-[1.75rem] font-semibold leading-none text-ink-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductPage({ slug }: { slug: string }) {
  useScrollReveal();
  const product = products[slug];
  const others = productOrder.filter((s) => s !== slug).map((s) => products[s]);

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <ProductHero product={product} />

        {/* Why it works */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="Why it works"
            title={`What ${product.name} does for your checkout`}
            description="Every product in the suite is built on the same principle: incremental revenue for you, a genuinely better outcome for the traveller, and no new operational load."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.pillars.map((pillar, i) => (
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

        {/* How it works */}
        <Section>
          <SectionHeading
            eyebrow="How it works"
            title="From checkout to resolution"
            description="The full journey, end to end. Everything after the sale is run by our team."
          />
          <div className="mt-14">
            <StepFlow steps={product.steps} />
          </div>
        </Section>

        {/* Coverage */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="Coverage"
            title="Exactly what is and is not included"
            description="Clear boundaries make the offer easier to sell and easier to trust."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <div className="surface-1 r p-7 md:p-8">
              <h3 className="t-h3 mb-6">What's covered</h3>
              <ul className="space-y-3.5">
                {product.covered.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-signal/12">
                      <Check className="h-3 w-3 text-signal" strokeWidth={3} />
                    </span>
                    <span className="t-small">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-1 r dl1 p-7 md:p-8">
              <h3 className="t-h3 mb-6">What's not covered</h3>
              <ul className="space-y-3.5">
                {product.notCovered.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-muted-foreground/10">
                      <X className="h-3 w-3 text-muted-foreground" strokeWidth={3} />
                    </span>
                    <span className="t-small">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="r mt-6 text-[13px] leading-relaxed text-muted-foreground">
            {product.coverageNote}
          </p>
        </Section>

        {/* Integration */}
        <Section tone="ink" grid>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                tone="ink"
                eyebrow="Integration"
                title="Built to sit inside your checkout"
                description="One integration covers the entire suite. Start with this product and switch others on without shipping new code."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {product.integration.map((item, i) => (
                  <div
                    key={item.title}
                    className={`r dl${i + 1} rounded-xl border border-ink-border bg-ink-elevated/70 p-5`}
                  >
                    <h3 className="text-[15px] font-medium text-ink-foreground">{item.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rs dl2">{product.code}</div>
          </div>
        </Section>

        {/* Commercials */}
        <Section>
          <SectionHeading
            eyebrow="Commercials"
            title="A simple commercial model"
            description="No setup fees, no minimums, no exposure. You expose the offer; we run everything behind it."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {product.commercials.map((item, i) => (
              <div key={item.label} className={`surface-1 lift r dl${i + 1} p-7 md:p-8`}>
                <p className="t-eyebrow mb-4">{item.label}</p>
                <p className="t-num text-[1.75rem] font-semibold leading-none text-foreground">
                  {item.value}
                </p>
                <p className="t-small mt-3">{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section tone="muted">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Questions"
                title={`${product.name}, answered`}
                description="Anything not covered here is answered directly by our commercial and engineering teams."
              />
              <div className="r dl2 mt-8">
                <CtaLink to="/contact" variant="outline">
                  Ask us anything
                </CtaLink>
              </div>
            </div>
            <div className="r dl1">
              <FaqAccordion items={product.faqs} />
            </div>
          </div>
        </Section>

        {/* Related products */}
        <Section>
          <SectionHeading
            eyebrow="The rest of the suite"
            title="Works better together"
            description="Every product runs standalone and shares the same integration, contract and reporting."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {others.map((other, i) => (
              <Link
                key={other.slug}
                to={`/products/${other.slug}`}
                className={`surface-1 lift focus-ring group r dl${i + 1} flex flex-col p-7 no-underline`}
              >
                <p className="t-eyebrow mb-2 text-accent">{other.eyebrow}</p>
                <h3 className="t-h3">{other.name}</h3>
                <p className="t-small mt-2.5 flex-1">{other.lead.split('.')[0]}.</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent">
                  Explore {other.name}
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
