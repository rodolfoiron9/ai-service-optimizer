import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/50 backdrop-blur-[2px]"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-secondary">
          AI-Powered Web Development & Automation Pack
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
          Transform Your Business with Cutting-Edge AI Automation!
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started for $399
        </Button>
      </div>
    </div>
  );
};