import { Mail, Users, Zap, BarChart3, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EmailCampaign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-8">
              <Mail className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-medium">Smart Email Campaigns</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Intelligent Email Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create and automate personalized email campaigns that engage your audience and drive conversions.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Audience Segmentation</CardTitle>
              <CardDescription>
                Target specific customer segments with tailored content.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Zap className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Smart Automation</CardTitle>
              <CardDescription>
                Automate your email campaigns for maximum efficiency.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Track and analyze campaign performance metrics.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Settings className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Easy Configuration</CardTitle>
              <CardDescription>
                Simple setup and management of your email campaigns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Security First</CardTitle>
              <CardDescription>
                Enterprise-grade security for your email operations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Mail className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Template Library</CardTitle>
              <CardDescription>
                Access to professional email templates and designs.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailCampaign;