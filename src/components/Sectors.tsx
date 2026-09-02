import { LayoutGrid, Plane, Train, Building, Ticket, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionHeading } from '@/components/system/Section';

const sectors = [
  {
    icon: LayoutGrid,
    name: 'Platforms',
    path: '/industries/platforms',
    examples: 'Booking engines, SaaS platforms, and distribution providers',
    note: 'White-label the whole suite for your merchants.',
  },
  {
    icon: Plane,
    name: 'Travel',
    path: '/industries/travel',
    examples: 'Airlines, OTAs and booking platforms',
    note: 'Refundable fares, baggage and disruption cover in one flow.',
  },
  {
    icon: Train,
    name: 'Transport',
    path: '/industries/transport',
    examples: 'Rail, coach and ferry operators',
    note: 'High-frequency, low-value bookings priced accordingly.',
  },
  {
    icon: Building,
    name: 'Accommodation',
    path: '/industries/accommodation',
    examples: 'Hotels, hostels and vacation rentals',
    note: 'Turn non-refundable rates into a revenue line.',
  },
  {
    icon: Ticket,
    name: 'Events',
    path: '/industries/events',
    examples: 'Concerts, sports and festivals',
    note: 'Refund protection sized to ticket value.',
  },
  {
    icon: MapPin,
    name: 'Experiences',
    path: '/industries/experiences',
    examples: 'Tours, activities and attractions',
    note: 'Weather and cancellation cover at the point of sale.',
  },
];

export function Sectors() {
  return (
    <Section id="solutions">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="rl lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Industries"
            title="Built for every booking platform"
            description="From travel and transport to events and experiences, Tego helps online booking businesses embed high-margin revenue products directly into checkout."
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.name}
                to={s.path}
                aria-label={`Go to ${s.name} industry page`}
                className={`rr dl${i + 1} surface-1 lift focus-ring group relative flex flex-col gap-3 overflow-hidden p-6 no-underline`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/[0.08] transition-[background-color,transform] duration-3 ease-spring group-hover:scale-105 group-hover:bg-accent/[0.14]">
                    <Icon className="h-[18px] w-[18px] text-accent" strokeWidth={1.8} />
                  </span>
                  <ArrowUpRight className="arrow-slide h-4 w-4 text-muted-foreground opacity-0 transition-opacity duration-2 group-hover:opacity-100" />
                </div>
                <div>
                  <div className="text-[15.5px] font-medium text-foreground">{s.name}</div>
                  <div className="t-caption mt-1">{s.examples}</div>
                </div>
                <p className="t-caption mt-auto border-t border-border pt-3 text-muted-foreground">
                  {s.note}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
