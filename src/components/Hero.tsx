import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Calendar, Mail, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-800 to-blue-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            AI-Powered Solutions for Every Business
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Transform your business with our comprehensive suite of AI automation tools. Professional service, expert guidance, and cutting-edge solutions.
          </p>
          <Button 
            size="lg"
            className="bg-[#F97316] text-white hover:bg-[#F97316]/90 group"
          >
            Explore Our Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <FeatureCard 
              icon={<Bot />}
              title="AI Chatbot"
              description="24/7 customer support"
            />
            <FeatureCard 
              icon={<Calendar />}
              title="Smart Booking"
              description="Automated scheduling"
            />
            <FeatureCard 
              icon={<Mail />}
              title="Marketing Suite"
              description="AI-driven campaigns"
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