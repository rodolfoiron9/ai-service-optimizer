import { PageLayout } from "@/components/layouts/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Users, BarChart3, BrainCircuit, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const MarketingService = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Targeting",
      description: "AI-powered audience targeting and segmentation"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Real-time insights and reporting"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Management",
      description: "Advanced segmentation and personalization"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Campaign Tracking",
      description: "Comprehensive performance monitoring"
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Content Creation",
      description: "Automated content generation"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-channel Marketing",
      description: "Unified marketing across platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-blue-50/50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <PageLayout
        title="AI-Powered Marketing Suite"
        description="Transform your marketing strategy with intelligent automation and data-driven insights"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card group hover:translate-y-[-4px]">
              <div className="p-6">
                <div className="w-12 h-12 mb-4 text-primary flex items-center justify-center bg-primary/10 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </PageLayout>
    </div>
  );
};

export default MarketingService;