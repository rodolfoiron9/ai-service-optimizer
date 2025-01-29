import { HeroSection } from "@/components/marketing/HeroSection";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";
import { StatsSection } from "@/components/marketing/StatsSection";
import { CTASection } from "@/components/marketing/CTASection";

const MarketingService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <HeroSection />
      <FeaturesGrid />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default MarketingService;