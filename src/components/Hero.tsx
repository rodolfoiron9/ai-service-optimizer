import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Building2, Truck } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#4A2618] to-[#1E3C72]">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/739e0ada-3f31-4671-9d52-d32d4800f60c.png')] bg-cover bg-center"
        style={{ opacity: 0.4 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Quality Building Supplies for Every Project
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Your trusted partner in roofing and building materials. Professional service, expert advice, and top-quality products.
          </p>
          <Button 
            size="lg"
            className="bg-[#F97316] text-white hover:bg-[#F97316]/90 group"
          >
            Explore Our Products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <FeatureCard 
              icon={<Package />}
              title="Quality Materials"
              description="Premium building supplies"
            />
            <FeatureCard 
              icon={<Building2 />}
              title="Expert Advice"
              description="Professional guidance"
            />
            <FeatureCard 
              icon={<Truck />}
              title="Fast Delivery"
              description="Reliable shipping"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-effect rounded-lg p-6 text-left">
    <div className="w-12 h-12 mb-4 text-white flex items-center justify-center bg-white/20 rounded-lg backdrop-blur-sm">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
    <p className="text-sm text-gray-200">{description}</p>
  </div>
);