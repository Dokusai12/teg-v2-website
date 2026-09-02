import { LayoutGrid, Plane, Train, Building, Ticket, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  { icon: LayoutGrid, name: 'Platforms', path: '/industries/platforms', examples: 'Booking engines, SaaS platforms, and distribution providers' },
  { icon: Plane, name: 'Travel', path: '/industries/travel', examples: 'Airlines, OTAs, booking platforms' },
  { icon: Train, name: 'Transport', path: '/industries/transport', examples: 'Rail, coach, and ferry operators' },
  { icon: Building, name: 'Accommodation', path: '/industries/accommodation', examples: 'Hotels, hostels, vacation rentals' },
  { icon: Ticket, name: 'Events', path: '/industries/events', examples: 'Concerts, sports, festivals' },
  { icon: MapPin, name: 'Experiences', path: '/industries/experiences', examples: 'Tours, activities, attractions' },
];

export function Sectors() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 rl">
            <p className="text-accent text-[14px] font-medium mb-3">Industries</p>
            <h2 className="text-3xl md:text-[2.75rem] font-semibold text-foreground leading-tight tracking-tight mb-5">
              Built for every booking platform
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              From travel and transport to events and experiences, Tego helps online booking businesses embed high-margin revenue products directly into checkout.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {sectors.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.name}
                    to={s.path}
                    aria-label={`Go to ${s.name} industry page`}
                    className={`rr dl${i + 1} block flex items-center gap-5 p-5 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors group`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-accent/[0.12] transition-colors">
                      <Icon className="w-[18px] h-[18px] text-accent" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground text-[15px]">{s.name}</div>
                      <div className="text-[13px] text-muted-foreground">{s.examples}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
