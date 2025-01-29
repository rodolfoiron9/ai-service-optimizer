import { PageLayout } from "@/components/layouts/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Edit, Search, BarChart3, Globe2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BlogService = () => {
  const features = [
    {
      icon: <Edit className="w-6 h-6" />,
      title: "AI Content Writing",
      description: "Generate engaging blog posts automatically"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Optimize content for search engines"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track performance and engagement"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Multi-language Support",
      description: "Create content in multiple languages"
    },
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: "Content Calendar",
      description: "Schedule and manage publications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Publishing",
      description: "Streamlined publishing workflow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <PageLayout
        title="AI Blog Management"
        description="Create, optimize, and manage your blog content with artificial intelligence"
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
              Start Blogging <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </PageLayout>
    </div>
  );
};

export default BlogService;