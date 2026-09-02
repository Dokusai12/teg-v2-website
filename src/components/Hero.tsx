import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 768px)").matches;
    if (narrow) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 150);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-4 md:pt-36 md:pb-8">
      {/* Gradient mesh background — .hero-mesh-blob animation disabled on mobile via index.css */}
      <div className="hero-mesh absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="hero-mesh-blob absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] -top-48 -right-48"
          style={{ background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))', animation: 'mesh-move 20s ease-in-out infinite' }}
        />
        <div
          className="hero-mesh-blob absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] top-1/2 -left-64"
          style={{ background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))', animation: 'mesh-move 25s ease-in-out infinite reverse' }}
        />
        <div
          className="hero-mesh-blob absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] bottom-0 right-1/4"
          style={{ background: 'linear-gradient(135deg, hsl(280 60% 60%), hsl(340 60% 55%))', animation: 'mesh-move 18s ease-in-out infinite 3s' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 lg:px-5">
        {/* Top banner */}
        <div className={`hin flex justify-center mb-8 ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <a href="#products" className="inline-flex items-center gap-2 text-[13px] text-muted-foreground border border-border rounded-full pl-3 pr-2 py-1 hover:bg-secondary transition-colors">
            <span className="bg-accent/10 text-accent text-[11px] font-semibold px-2 py-0.5 rounded-full">New</span>
            Refund Shield is now available across 50+ markets
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          </a>
        </div>

        {/* Headline */}
        <h1 className={`hin text-center max-lg:text-balance text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.12] tracking-tight text-foreground max-w-4xl mx-auto mb-5 ${!ready && 'opacity-0'}`}
          style={{ animationDelay: '0.25s' }}>
          Revenue infrastructure for the world’s booking platforms.
        </h1>

        {/* Subheadline */}
        <p className={`hin text-center text-[17px] md:text-[19px] text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 ${!ready && 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}>
          Embed high-margin ancillary products into your checkout. Go live in days.
        </p>

        {/* CTAs */}
        <div className={`hin flex items-center justify-center gap-4 mb-20 ${!ready && 'opacity-0'}`}
          style={{ animationDelay: '0.55s' }}>
          <Link to="/contact" className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-accent text-accent-foreground text-[15px] font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20">
            Contact sales <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Hero visual: dashboard mockup */}
        <div className={`hin ${!ready && 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <div className="relative rounded-xl border border-border overflow-hidden shadow-2xl shadow-foreground/[0.06] bg-background">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[hsl(0_65%_65%)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(42_75%_60%)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(140_55%_50%)]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background border border-border rounded-md px-3 py-1 text-[11px] text-muted-foreground w-64 text-center">partner.tego-group.com</div>
              </div>
            </div>
            {/* Dashboard content */}
            <div className="p-6 md:p-8 bg-card">
              <div className="grid grid-cols-12 gap-5">
                {/* Sidebar */}
                <div className="hidden md:block col-span-2 space-y-1">
                  {['Overview', 'Transactions', 'Products', 'Analytics', 'Settings'].map((item, i) => (
                    <div key={item} className={`text-[12px] px-3 py-2 rounded-md ${i === 0 ? 'bg-accent/10 text-accent font-medium' : 'text-muted-foreground'}`}>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="col-span-12 md:col-span-10 space-y-5">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: 'Revenue', value: '£1,514,762', change: '+19.1%' },
                      { label: 'Transactions', value: '184,847', change: '+12.6%' },
                      { label: 'Conversion', value: '19.89%', change: '+1.12%' },
                      { label: 'Avg. Value', value: '£41.20', change: '+4.7%' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-background border border-border rounded-lg p-4">
                        <div className="text-[11px] text-muted-foreground mb-1">{stat.label}</div>
                        <div className="text-[18px] font-semibold text-foreground">{stat.value}</div>
                        <div className="text-[11px] text-[hsl(145_60%_40%)] font-medium mt-1">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                  {/* Chart placeholder */}
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="text-[12px] text-muted-foreground mb-3">Revenue · Last 30 days</div>
                    <div className="flex items-end gap-[3px] h-24">
                      {[35,42,38,55,48,62,45,70,65,78,55,82,70,88,75,92,68,85,90,78,95,88,82,96,85,92,98,90,95,100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-accent/20 hover:bg-accent/40 transition-colors" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
