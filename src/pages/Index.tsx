import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#243949] via-[#517fa4] to-[#243949]">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default Index;