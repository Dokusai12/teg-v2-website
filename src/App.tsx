import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import RefundShieldPage from "./pages/RefundShieldPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RefundShieldProductPage from "./pages/products/RefundShield";
import BaggageShieldProductPage from "./pages/products/BaggageShield";
import AirShieldProductPage from "./pages/products/AirShield";
import BundlesProductPage from "./pages/products/Bundles";
import TravelIndustryPage from "./pages/industries/Travel";
import TransportIndustryPage from "./pages/industries/Transport";
import AccommodationIndustryPage from "./pages/industries/Accommodation";
import EventsIndustryPage from "./pages/industries/Events";
import ExperiencesIndustryPage from "./pages/industries/Experiences";
import PlatformsIndustryPage from "./pages/industries/Platforms";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";
import AntiBriberyPage from "./pages/AntiBriberyPage";
import ModernSlaveryPage from "./pages/ModernSlaveryPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import CareerJobPage from "./pages/CareerJobPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const basename = (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/about-us/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/refundshield"
            element={<Navigate to="/products/refund-shield" replace />}
          />
          <Route
            path="/refundshield/"
            element={<Navigate to="/products/refund-shield" replace />}
          />
          <Route path="/refund-shield" element={<RefundShieldPage />} />
          <Route path="/products/refund-shield" element={<RefundShieldProductPage />} />
          <Route path="/products/baggage-shield" element={<BaggageShieldProductPage />} />
          <Route path="/products/air-shield" element={<AirShieldProductPage />} />
          <Route path="/products/bundles" element={<BundlesProductPage />} />
          <Route path="/industries/travel" element={<TravelIndustryPage />} />
          <Route path="/industries/transport" element={<TransportIndustryPage />} />
          <Route path="/industries/accommodation" element={<AccommodationIndustryPage />} />
          <Route path="/industries/events" element={<EventsIndustryPage />} />
          <Route path="/industries/experiences" element={<ExperiencesIndustryPage />} />
          <Route path="/industries/platforms" element={<PlatformsIndustryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/anti-bribery" element={<AntiBriberyPage />} />
          <Route path="/modern-slavery" element={<ModernSlaveryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:jobId" element={<CareerJobPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
