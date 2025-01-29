import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PageLayout } from "@/components/layouts/PageLayout";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-blue-50/30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <PageLayout
        title="AI Service Pack"
        description="Comprehensive AI solutions for modern businesses"
      >
        <HeroSection />
        <ServicesSection />
      </PageLayout>
    </div>
  );
};

export default Index;