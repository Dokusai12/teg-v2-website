import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { publicUrl } from '@/lib/publicUrl';

const products = [
  { label: 'Refund Shield', to: '/products/refund-shield' },
  { label: 'Baggage Shield', to: '/products/baggage-shield' },
  { label: 'Air Shield', to: '/products/air-shield' },
  { label: 'Bundles', to: '/products/bundles' },
];

const links = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/about' },
];

const PRODUCTS_MENU_ID = 'nav-products-menu';

export function Navbar() {
  const [s, setS] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [mobProdOpen, setMobProdOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setS(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProdOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${s ? 'nav-s' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center shrink-0 py-1" aria-label="Tego Group home">
            <img
              src={publicUrl('wordmark-dark.png')}
              alt=""
              width={88}
              height={24}
              fetchPriority="high"
              decoding="async"
              className="h-[22px] w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>
            ))}
            {/* Products dropdown (click to open: avoids stray hover hits below the label) */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                id="nav-products-trigger"
                aria-expanded={prodOpen}
                aria-haspopup="true"
                aria-controls={PRODUCTS_MENU_ID}
                onClick={() => setProdOpen((v) => !v)}
                className="text-[14px] text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-1 -mx-1 py-1 transition-colors duration-300"
              >
                Products{' '}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-500 ease-smooth ${prodOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div className="absolute left-0 top-full z-50 w-[13.5rem] pt-2" id={PRODUCTS_MENU_ID} role="region" aria-label="Products">
                <div
                  aria-hidden={!prodOpen}
                  className={[
                    'origin-top rounded-xl border border-border/80 bg-background/90 py-1.5 shadow-lg shadow-foreground/[0.06] ring-1 ring-border/50 backdrop-blur-xl backdrop-saturate-150',
                    'transition-[opacity,transform] duration-300 ease-smooth motion-reduce:transition-none',
                    prodOpen
                      ? 'pointer-events-auto visible translate-y-0 scale-100 opacity-100'
                      : 'pointer-events-none invisible -translate-y-1 scale-[0.98] opacity-0',
                  ].join(' ')}
                >
                  {products.map((p, i) => (
                    <Link
                      key={p.label}
                      to={p.to}
                      tabIndex={prodOpen ? undefined : -1}
                      onClick={() => setProdOpen(false)}
                      className={[
                        'block px-4 py-2.5 text-[14px] text-muted-foreground transition-[color,background-color,transform,opacity] duration-300 ease-smooth motion-reduce:transition-none',
                        'hover:bg-secondary/60 hover:text-foreground',
                        'first:rounded-t-[10px] last:rounded-b-[10px]',
                        prodOpen ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0',
                      ].join(' ')}
                      style={{
                        transitionDelay: prodOpen ? `${60 + i * 45}ms` : '0ms',
                      }}
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/contact" className="text-[14px] font-medium text-primary-foreground bg-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1">
            Contact sales <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2.5 -mr-1 min-w-11 min-h-11 flex items-center justify-center rounded-lg hover:bg-secondary/50 transition-colors" aria-label="Menu" aria-expanded={open}>
          <div className="space-y-1.5">
            <span className={`block w-5 h-[1.5px] bg-foreground transition-all ${open ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-foreground transition-all ${open ? '-rotate-45 -translate-y-[1.5px]' : ''}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="block text-[15px] text-foreground py-1">{l.label}</Link>
          ))}
          {/* Mobile products accordion */}
          <button
            type="button"
            onClick={() => setMobProdOpen(!mobProdOpen)}
            className="flex items-center gap-1 text-[15px] text-foreground py-2 w-full text-left rounded-lg transition-colors hover:bg-secondary/40"
          >
            Products{' '}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-500 ease-smooth ${mobProdOpen ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className="grid transition-[grid-template-rows] duration-300 ease-smooth motion-reduce:transition-none"
            style={{ gridTemplateRows: mobProdOpen ? '1fr' : '0fr' }}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="pl-3 border-l border-border/60 ml-1 space-y-0.5 pb-1">
                {products.map((p, i) => (
                  <Link
                    key={p.label}
                    to={p.to}
                    tabIndex={mobProdOpen ? undefined : -1}
                    onClick={() => setOpen(false)}
                    className="block text-[14px] text-muted-foreground py-2 px-2 rounded-lg transition-all duration-300 ease-smooth hover:bg-secondary/50 hover:text-foreground motion-reduce:transition-none"
                    style={{
                      opacity: mobProdOpen ? 1 : 0,
                      transform: mobProdOpen ? 'translateY(0)' : 'translateY(-4px)',
                      transitionDelay: mobProdOpen ? `${40 + i * 35}ms` : '0ms',
                    }}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-center text-[14px] font-medium text-primary-foreground bg-foreground px-4 py-2.5 rounded-full mt-3">Contact sales</Link>
        </div>
      )}
    </header>
  );
}
