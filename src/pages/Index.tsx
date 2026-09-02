import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { BentoGrid } from "@/components/BentoGrid";
import { Stats } from "@/components/Stats";
import { Sectors } from "@/components/Sectors";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <BentoGrid />
      <Stats />
      <Sectors />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
