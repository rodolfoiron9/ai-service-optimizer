import { Mail, Users, Zap, BarChart3, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EmailCampaign = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-7xl">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <div className="inline-block p-4 rounded-full bg-secondary/10 mb-6">
          <Mail className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Smart Email Campaigns
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create and automate personalized email campaigns that engage your audience and drive conversions.
        </p>
        <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
          Start Free Trial
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 px-4">
        <Card className="glass-card p-6">
          <Users className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Audience Segmentation</h3>
          <p className="text-gray-600">
            Target specific customer segments with tailored content.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Smart Automation</h3>
          <p className="text-gray-600">
            Automate your email campaigns for maximum efficiency.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Performance Analytics</h3>
          <p className="text-gray-600">
            Track and analyze campaign performance metrics.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default EmailCampaign;