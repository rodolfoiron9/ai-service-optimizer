import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Target, TrendingUp, Users, BarChart3, BrainCircuit, Rocket, MessageSquare } from "lucide-react";

const MarketingService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Hero Section */}
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

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
          Comprehensive Marketing Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Target />}
            title="Smart Campaign Management"
            description="AI-driven campaign optimization that automatically adjusts targeting and budget allocation for maximum ROI."
          />
          <FeatureCard
            icon={<TrendingUp />}
            title="Performance Analytics"
            description="Real-time analytics dashboard with predictive insights and automated reporting capabilities."
          />
          <FeatureCard
            icon={<Users />}
            title="Audience Segmentation"
            description="Advanced segmentation tools powered by machine learning for precise targeting and personalization."
          />
          <FeatureCard
            icon={<BarChart3 />}
            title="Conversion Optimization"
            description="Automated A/B testing and funnel optimization to maximize conversion rates across channels."
          />
          <FeatureCard
            icon={<BrainCircuit />}
            title="AI Content Generation"
            description="Generate engaging marketing content with AI assistance for emails, social media, and ads."
          />
          <FeatureCard
            icon={<MessageSquare />}
            title="Multi-channel Automation"
            description="Seamlessly coordinate marketing efforts across email, social media, and advertising platforms."
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-emerald-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-emerald-300">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-emerald-300">Time Saved on Campaigns</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-emerald-300">Leads Generated</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our AI-powered marketing automation platform to drive growth and increase efficiency.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Schedule Demo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

export default MarketingService;