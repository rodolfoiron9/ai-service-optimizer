import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, HeadphonesIcon, Bot, Calendar, Mail, Newspaper } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/90 to-blue-900/90">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              AI-Powered Solutions for Every Business
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Transform your business with our comprehensive suite of AI automation tools. Professional service, expert guidance, and cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 group"
              >
                Explore Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Get Started for $399
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <ServiceFeature icon={<Bot />} title="AI Chatbot" description="24/7 Customer Support" />
            <ServiceFeature icon={<Calendar />} title="Booking System" description="Automated Scheduling" />
            <ServiceFeature icon={<Mail />} title="Marketing" description="Smart Campaigns" />
            <ServiceFeature icon={<Newspaper />} title="Blog Automation" description="SEO Content" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceFeature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
    <div className="w-12 h-12 mb-4 text-white flex items-center justify-center bg-white/20 rounded-lg">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-200">{description}</p>
  </div>
);