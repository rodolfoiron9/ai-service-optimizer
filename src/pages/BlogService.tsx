import { Newspaper, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/50 to-indigo-100/50 backdrop-blur-sm">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-md">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Blog Content Automation</h1>
            <p className="text-xl mb-8">Generate SEO-optimized content with AI precision</p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 backdrop-blur-md"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-xl overflow-hidden backdrop-blur-md">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="AI Content Generation" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">AI Content Generation</h3>
                <p>Create engaging blog posts with advanced AI technology</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden backdrop-blur-md">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Team Collaboration" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                <p>Seamless workflow for content review and publishing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Blog Automation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "SEO-optimized content generation",
            "Automated publishing schedule",
            "Content performance analytics",
            "Keyword research integration",
            "Multi-platform distribution",
            "Custom voice and tone settings"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3 bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/40 transition-all duration-300 border border-white/20">
              <Check className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogService;