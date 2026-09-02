import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IndustryCTA() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-[700px] mx-auto px-4 lg:px-5 text-center">
        <div className="r">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground font-display mb-4">
            Ready to unlock new revenue?
          </h2>
          <p className="text-[15px] text-muted-foreground mb-8 max-w-md mx-auto">
            Get in touch to see how Tego can work across your booking flow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-primary-foreground text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            Contact sales
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
