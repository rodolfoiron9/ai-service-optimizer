import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Marketing Automation Hub</h1>
          <p className="text-xl mb-8">Transform your marketing strategy with AI-powered automation and data-driven insights</p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-emerald-50"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};