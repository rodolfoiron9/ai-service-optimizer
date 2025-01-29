import { FileText, Zap, BarChart3, Settings, Shield, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContentGeneration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-8">
              <FileText className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-medium">AI Content Generation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Create Content at Scale
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Generate engaging, SEO-optimized content automatically with our AI content generation tools.
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
              <Bot className="w-12 h-12 text-primary mb-4" />
              <CardTitle>AI Writing</CardTitle>
              <CardDescription>
                Generate high-quality content with AI assistance.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Zap className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Quick Generation</CardTitle>
              <CardDescription>
                Create content in minutes, not hours.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Settings className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Customization</CardTitle>
              <CardDescription>
                Tailor content to your brand voice and style.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Performance Tracking</CardTitle>
              <CardDescription>
                Monitor content performance and engagement.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Content Protection</CardTitle>
              <CardDescription>
                Ensure your content is unique and protected.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <FileText className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Multi-Format Support</CardTitle>
              <CardDescription>
                Create content for various platforms and formats.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentGeneration;