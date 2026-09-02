import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { WhyTego } from "@/components/sections/WhyTego";
import { BentoGrid } from "@/components/BentoGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/Stats";
import { Sectors } from "@/components/Sectors";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <WhyTego />
        <BentoGrid />
        <HowItWorks />
        <Stats />
        <Sectors />
        <FaqSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
