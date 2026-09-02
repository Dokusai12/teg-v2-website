import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { IndustryCTA } from '@/components/industry/IndustryCTA';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronRight, Check, Shield, Handshake, Users, Globe2 } from 'lucide-react';
import mickeyImg from '@/assets/mickey-seymour.png';
import marcusImg from '@/assets/marcus-worsley.png';

const founders: Array<{
  name: string;
  role: string;
  bio: string;
  image: string;
  imageObjectPosition?: string;
}> = [
  {
    name: 'Marcus Worsley',
    role: 'Co-Founder',
    bio: 'Marcus has spent over a decade building and scaling refund protection products within global travel and eCommerce ecosystems. He has led the commercial rollout of embedded solutions across major platforms, with a focus on high-conversion checkout experiences and sustainable ancillary revenue.\n\nAs a founder, Marcus specialises in taking products from concept to scale, combining distribution strategy, partner integration, and commercial design to deliver measurable impact. His experience sits at the intersection of travel, fintech-style products, and embedded technology.',
    image: marcusImg,
  },
  {
    name: 'Mickey Seymour',
    role: 'Co-Founder',
    bio: 'Mickey is a serial entrepreneur with a track record of building and scaling technology businesses across both B2B and B2C markets. His focus has consistently been on creating products that solve real commercial problems while remaining simple and intuitive for end users.\n\nWith deep experience in product development, operations, and scaling teams, Mickey brings a practical, execution-led approach to building companies. He has successfully taken multiple ventures from early-stage through to scale, driving growth through strong product-market fit and disciplined execution.',
    image: mickeyImg,
    imageObjectPosition: 'object-[center_22%]',
  },
];

const whatWeDoItems = [
  'Seamless checkout integration',
  'Clear, customer-first value propositions',
  'Fully managed operations and support',
  'Real-time performance and revenue visibility',
] as const;

const whyTegoCards: { icon: typeof Shield; title: string; desc: string }[] = [
  {
    icon: Shield,
    title: 'Built for revenue at checkout',
    desc: 'Optimised for high-intent booking flows where conversion, clarity, and margin matter most.',
  },
  {
    icon: Globe2,
    title: 'Designed for global scale',
    desc: 'Built to integrate seamlessly across international travel platforms, carriers, and booking systems.',
  },
  {
    icon: Handshake,
    title: 'Aligned with your economics',
    desc: 'Structured to drive incremental revenue without impacting core pricing or customer experience.',
  },
  {
    icon: Users,
    title: 'Simple for customers. Trusted by partners.',
    desc: 'Clear, transparent products that customers understand, and partners can confidently stand behind.',
  },
];

export default function AboutPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        {/* Hero: matches landing Hero with gradient mesh */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] -top-48 -right-48"
              style={{
                background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))',
                animation: 'mesh-move 20s ease-in-out infinite',
              }}
            />
            <div
              className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] top-1/2 -left-64"
              style={{
                background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))',
                animation: 'mesh-move 25s ease-in-out infinite reverse',
              }}
            />
            <div
              className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] bottom-0 right-1/4"
              style={{
                background: 'linear-gradient(135deg, hsl(280 60% 60%), hsl(340 60% 55%))',
                animation: 'mesh-move 18s ease-in-out infinite 3s',
              }}
            />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-5">
            <p
              className={`hin text-accent text-[14px] font-medium mb-3 ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              Company
            </p>
            <h1
              className={`hin max-lg:text-balance text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.12] tracking-tight text-foreground max-w-2xl ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              Built for the moments that matter in booking decisions
            </h1>
            <p
              className={`hin text-[17px] md:text-[18px] text-muted-foreground max-w-xl mt-4 leading-relaxed ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.35s' }}
            >
              Tego Group is a provider of embedded ancillary solutions designed to unlock revenue and remove friction at the point of sale.
            </p>
            <Link
              to="/contact"
              className={`hin inline-flex items-center gap-1.5 mt-8 px-5 py-3 rounded-full bg-accent text-accent-foreground text-[15px] font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20 ${!ready && 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              Contact sales <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Who We Are: Sectors-style layout + local copy blocks */}
        <section className="py-14 md:py-28 bg-secondary/50">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4 rl">
                <div className="lg:sticky lg:top-28">
                  <p className="text-accent text-[14px] font-medium mb-3">Who We Are</p>
                  <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight mb-5">
                    Our story and mission
                  </h2>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    Tego Group is a provider of embedded ancillary solutions designed to unlock revenue and remove friction at the point of sale.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-10">
                <div className="space-y-5 r rr dl1">
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    We work with travel platforms and booking businesses to enhance the customer proposition at checkout, turning uncertainty into confidence, and confidence into conversion.
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    Our products are built around a simple principle: when customers feel protected, they are more likely to complete their purchase. When implemented correctly, that protection becomes a meaningful and scalable revenue stream.
                  </p>
                </div>

                <div className="r rr dl2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-display">What we do</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                    We design and operate fully managed, embedded solutions that sit seamlessly within existing booking flows. Our products require no operational overhead from partners: we handle the end-to-end service, from customer experience through to fulfilment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {whatWeDoItems.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                        <span className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                        </span>
                        <span className="text-[14px] text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="r rr dl3 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-display">Our approach</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                    We don&apos;t position protection as an afterthought: we embed it as a core part of the booking experience.
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                    By aligning customer needs with partner incentives, we create solutions that are intuitive to buy, easy to integrate, and commercially impactful from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet The Founders: Tego compact cards + PNG assets */}
        <section className="py-14 md:py-28 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
            <div className="mb-14 r">
              <p className="text-accent text-[14px] font-medium mb-3">Meet The Founders</p>
              <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight max-w-xl">
                The people behind Tego
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {founders.map((f, i) => (
                <div
                  key={f.name}
                  className={`rs dl${i + 1} rounded-2xl border border-border bg-card p-8 hover:border-border/80 transition-colors`}
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src={f.image}
                      alt={f.name}
                      loading="lazy"
                      decoding="async"
                      className={`w-20 h-20 rounded-xl object-cover bg-secondary flex-shrink-0 ${f.imageObjectPosition ?? ''}`}
                    />
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-foreground">{f.name}</h3>
                      <p className="text-accent text-[13px] font-medium mb-3">{f.role}</p>
                      {f.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-[14px] text-muted-foreground leading-relaxed mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Tego?: Tego card style, four cards + full intro */}
        <section className="py-14 md:py-28 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
            <div className="text-center mb-14 r max-w-3xl mx-auto">
              <p className="text-accent text-[14px] font-medium mb-3">Why Tego?</p>
              <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight mb-4">
                What drives every decision
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                We combine commercial focus with operational excellence. Every product is designed to deliver both improved customer outcomes and measurable revenue uplift, without adding complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyTegoCards.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div
                    key={w.title}
                    className={`r dl${i + 1} rounded-2xl border border-border bg-background p-8 flex flex-col`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/[0.07] flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{w.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <IndustryCTA />
      </main>
      <Footer />
    </div>
  );
}
