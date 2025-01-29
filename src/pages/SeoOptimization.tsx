import { Bot, Search, BarChart3, Settings, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SeoOptimization = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-7xl">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <div className="inline-block p-4 rounded-full bg-secondary/10 mb-6">
          <Search className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          AI-Powered SEO Optimization
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Boost your website's visibility with our intelligent SEO optimization tools that analyze and improve your content for better search rankings.
        </p>
        <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
          Start Free Trial
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 px-4">
        <Card className="glass-card p-6">
          <Search className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Keyword Analysis</h3>
          <p className="text-gray-600">
            Advanced keyword research and analysis to target the right audience.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Performance Tracking</h3>
          <p className="text-gray-600">
            Real-time monitoring of your SEO performance and rankings.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Bot className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">AI Content Optimization</h3>
          <p className="text-gray-600">
            Smart suggestions to improve your content's SEO score.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SeoOptimization;