import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI-Powered Web Development & Automation Pack
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Transform Your Business with Cutting-Edge AI Automation!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90">
            Get Started for $399 <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20">
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
};