import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        AI-Powered Web Development & Automation Pack
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Transform Your Business with Cutting-Edge AI Automation!
      </p>
      <Button size="lg" className="bg-primary hover:bg-primary/90">
        Get Started for $399
      </Button>
    </div>
  );
};