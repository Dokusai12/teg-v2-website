import { Link } from 'react-router-dom';
import { publicUrl } from '@/lib/publicUrl';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-14 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] lg:pb-14">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5">
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm shrink-0">
            <img
              src={publicUrl('wordmark-dark.png')}
              alt="Tego Group"
              width={88}
              height={24}
              decoding="async"
              loading="lazy"
              className="h-[22px] w-auto"
            />
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              Revenue infrastructure for the world’s booking platforms. Built for seamless API integration and global scale.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:gap-24 lg:gap-32 md:shrink-0">
            <div className="shrink-0">
              <h4 className="mb-3 text-[13px] font-medium text-foreground">Products</h4>
              <ul className="space-y-2">
                <li><Link to="/products/refund-shield" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Refund Shield</Link></li>
                <li><Link to="/products/baggage-shield" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Baggage Shield</Link></li>
                <li><Link to="/products/air-shield" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Air Shield</Link></li>
                <li><Link to="/products/bundles" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Bundles</Link></li>
              </ul>
            </div>

            <div className="shrink-0">
              <h4 className="mb-3 text-[13px] font-medium text-foreground">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">About</Link></li>
                <li><Link to="/contact" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Contact</Link></li>
                <li><Link to="/careers" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Careers</Link></li>
                <li><Link to="/privacy-policy" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="shrink-0">
              <h4 className="mb-3 text-[13px] font-medium text-foreground">Industries</h4>
              <ul className="space-y-2">
                <li><Link to="/industries/travel" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Travel</Link></li>
                <li><Link to="/industries/transport" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Transport</Link></li>
                <li><Link to="/industries/accommodation" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Accommodation</Link></li>
                <li><Link to="/industries/events" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Events</Link></li>
                <li><Link to="/industries/experiences" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Experiences</Link></li>
                <li><Link to="/industries/platforms" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Platforms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
          <p className="max-w-sm text-[12px] leading-relaxed text-muted-foreground">
            © 2026 Tego Group Limited. All rights reserved. Tego is a trading name of Tego Group Limited,
            registered in England & Wales with company number 15730915.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
            <span>•</span>
            <Link to="/anti-bribery" className="hover:text-foreground transition-colors">Anti-Bribery</Link>
            <span>•</span>
            <Link to="/modern-slavery" className="hover:text-foreground transition-colors">Modern Slavery</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
