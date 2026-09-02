import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Mail, Briefcase } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const NotFound = () => {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    const prev = document.title;
    document.title = "Page not found | Tego Group";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <section className="relative flex-1 flex items-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] -top-48 -right-48"
              style={{
                background: "linear-gradient(135deg, hsl(228 76% 59%), hsl(280 60% 60%))",
                animation: "mesh-move 20s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] bottom-0 -left-64"
              style={{
                background: "linear-gradient(135deg, hsl(190 70% 50%), hsl(228 76% 59%))",
                animation: "mesh-move 25s ease-in-out infinite reverse",
              }}
            />
          </div>

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 lg:px-5">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">
                Error 404
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground font-display leading-[1.05] mb-5">
                This page doesn&apos;t exist
              </h1>
              <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
                The URL may be wrong or the page was moved. If you followed a link from
                elsewhere, let us know and we&apos;ll fix it.
              </p>
              <p className="text-sm text-muted-foreground/80 font-mono mb-10 break-all">
                {location.pathname}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
                <Button asChild size="lg" className="rounded-md">
                  <Link to="/">
                    <Home className="size-4" />
                    Back to home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md">
                  <Link to="/contact">
                    <Mail className="size-4" />
                    Contact us
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mb-3">Popular destinations</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-foreground underline-offset-4 hover:underline hover:text-accent transition-colors"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:underline hover:text-accent transition-colors"
                  >
                    <Briefcase className="size-3.5 opacity-70" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/refund-shield"
                    className="text-foreground underline-offset-4 hover:underline hover:text-accent transition-colors"
                  >
                    Refund Shield
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
