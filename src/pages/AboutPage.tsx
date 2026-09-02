import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Section, SectionHeading } from '@/components/system/Section';
import { PageHero } from '@/components/system/PageHero';
import { CtaLink } from '@/components/system/CtaLink';
import { StatBlock } from '@/components/system/StatBlock';
import { StepFlow } from '@/components/system/StepFlow';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Shield, Handshake, Users, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import mickeyImg from '@/assets/mickey-seymour.png';
import marcusImg from '@/assets/marcus-worsley.png';

const founders = [
  {
    name: 'Marcus Worsley',
    role: 'Co-Founder',
    bio: 'Marcus has spent over a decade building and scaling refund protection products within global travel and eCommerce ecosystems. He has led the commercial rollout of embedded solutions across major platforms, with a focus on high-conversion checkout experiences and sustainable ancillary revenue.\n\nAs a founder, Marcus specialises in taking products from concept to scale, combining distribution strategy, partner integration, and commercial design to deliver measurable impact.',
    image: marcusImg,
  },
  {
    name: 'Mickey Seymour',
    role: 'Co-Founder',
    bio: 'Mickey is a serial entrepreneur with a track record of building and scaling technology businesses across both B2B and B2C markets. His focus has consistently been on creating products that solve real commercial problems while remaining simple and intuitive for end users.\n\nWith deep experience in product development, operations, and scaling teams, Mickey brings a practical, execution-led approach to building companies.',
    image: mickeyImg,
    imageObjectPosition: 'object-[center_22%]',
  },
] as const;

const whatWeDo = [
  {
    title: 'Seamless checkout integration',
    desc: 'One API call returns a priced, ready-to-display offer that sits natively inside your existing booking flow.',
  },
  {
    title: 'Clear, customer-first propositions',
    desc: 'Plain-language cover that customers understand in seconds, so the decision never slows the booking down.',
  },
  {
    title: 'Fully managed operations',
    desc: 'We run claims, customer support and fulfilment end to end. No new headcount or process on your side.',
  },
  {
    title: 'Real-time revenue visibility',
    desc: 'Attach rate, revenue share and claim outcomes reported per channel, in a dashboard your team can act on.',
  },
];

const principles = [
  {
    icon: Shield,
    title: 'Built for revenue at checkout',
    desc: 'Optimised for high-intent booking flows where conversion, clarity, and margin matter most.',
  },
  {
    icon: Globe2,
    title: 'Designed for global scale',
    desc: 'Built to integrate across international travel platforms, carriers, and booking systems.',
  },
  {
    icon: Handshake,
    title: 'Aligned with your economics',
    desc: 'Structured to drive incremental revenue without impacting core pricing or customer experience.',
  },
  {
    icon: Users,
    title: 'Simple for customers, trusted by partners',
    desc: 'Transparent products customers understand, and partners can confidently stand behind.',
  },
];

const howWeWork = [
  {
    title: 'Understand the flow',
    description: 'We map your booking journey, basket values and customer mix before proposing anything.',
  },
  {
    title: 'Design the offer',
    description: 'Placement, wording, pricing and revenue share are designed around your economics.',
  },
  {
    title: 'Integrate and launch',
    description: 'A REST integration your engineers can ship in days, with a sandbox and reference UI.',
  },
  {
    title: 'Operate and optimise',
    description: 'We handle claims and support, then tune placement and copy against live attach data.',
  },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Company"
          crumb="About"
          title="Built for the moments that decide a booking"
          lead="Tego Group builds embedded ancillary products that unlock revenue and remove friction at the point of sale."
          actions={
            <>
              <CtaLink to="/contact" size="lg">
                Talk to sales
              </CtaLink>
              <Link
                to="/careers"
                className="press focus-ring inline-flex items-center justify-center rounded-full border border-ink-border px-6 py-3.5 text-[15px] font-medium text-ink-foreground no-underline transition-colors duration-2 ease-brand hover:bg-ink-elevated"
              >
                See open roles
              </Link>
            </>
          }
          aside={
            <div className="grid gap-4 sm:grid-cols-2">
              <StatBlock tone="ink" value="4" label="Embedded products live across travel checkouts" />
              <StatBlock tone="ink" value="Days" label="Typical engineering effort to a first live booking" />
              <StatBlock tone="ink" value="24/7" label="Managed customer support and claims handling" />
              <StatBlock tone="ink" value="0" label="Operational headcount required from partners" />
            </div>
          }
        />

        <Section tone="muted">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="rl lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="t-eyebrow mb-3">Who we are</p>
                <h2 className="t-h2 text-foreground">Protection that pays for itself</h2>
                <p className="t-body mt-4">
                  We work with travel platforms and booking businesses to strengthen the customer proposition at
                  checkout, turning uncertainty into confidence, and confidence into conversion.
                </p>
              </div>
            </div>

            <div className="space-y-10 lg:col-span-8">
              <div className="r rr dl1 space-y-4">
                <p className="t-body">
                  Our products are built around a simple principle: when customers feel protected, they are more likely
                  to complete their purchase. Implemented correctly, that protection becomes a meaningful and scalable
                  revenue stream rather than a cost line.
                </p>
                <p className="t-body">
                  We don&apos;t position protection as an afterthought. It is embedded as a core part of the booking
                  experience, aligned to how your customers already think about their trip.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {whatWeDo.map((item, i) => (
                  <div key={item.title} className={`r rr dl${i + 2} surface-1 lift p-6`}>
                    <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                      <Check className="h-4 w-4 text-accent" strokeWidth={3} />
                    </span>
                    <h3 className="text-[15.5px] font-semibold text-foreground">{item.title}</h3>
                    <p className="t-small mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="How we work"
            title="A partnership that starts commercial and stays commercial"
            description="From first conversation to live revenue, the process is designed to take as little of your team's time as possible."
          />
          <StepFlow className="mt-12" steps={howWeWork} />
        </Section>

        <Section tone="ink" grid>
          <SectionHeading
            tone="ink"
            eyebrow="Leadership"
            title="Meet the founders"
            description="Operators who have built, sold and scaled embedded products across travel and eCommerce."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className={`rs dl${i + 1} rounded-2xl border border-ink-border bg-ink-elevated p-7 md:p-8`}
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    decoding="async"
                    className={`h-20 w-20 shrink-0 rounded-xl bg-ink object-cover ${
                      'imageObjectPosition' in f ? (f as { imageObjectPosition?: string }).imageObjectPosition ?? '' : ''
                    }`}
                  />
                  <div className="min-w-0">
                    <h3 className="t-h3 text-ink-foreground">{f.name}</h3>
                    <p className="mt-1 text-[13px] font-medium text-accent-strong">{f.role}</p>
                    {f.bio.split('\n\n').map((p) => (
                      <p key={p.slice(0, 24)} className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="muted">
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Why Tego"
            title="What drives every decision"
            description="We combine commercial focus with operational excellence: better customer outcomes and measurable revenue uplift, without added complexity."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className={`r dl${i + 1} surface-1 lift flex flex-col p-7`}>
                  <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.08]">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-[16px] font-semibold text-foreground">{w.title}</h3>
                  <p className="t-small mt-2">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
