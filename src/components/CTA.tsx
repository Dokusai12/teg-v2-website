import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="r relative rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-foreground" />
          <div
            className="cta-ambient-blur absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]"
            style={{ background: 'linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))' }}
          />
          <div
            className="cta-ambient-blur absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-[80px]"
            style={{ background: 'linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))' }}
          />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground leading-tight tracking-tight mb-4">
              Start generating revenue from your checkout
            </h2>
            <p className="text-primary-foreground/60 text-[16px] leading-relaxed max-w-lg mx-auto mb-8">
              Embed high-margin products in days
            </p>
            <Link to="/contact" className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-accent text-accent-foreground text-[15px] font-medium hover:brightness-110 transition-all shadow-lg shadow-accent/20">
              Contact sales <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
