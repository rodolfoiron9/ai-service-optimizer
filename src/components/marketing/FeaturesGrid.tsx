import { Target, TrendingUp, Users, BarChart3, BrainCircuit, MessageSquare } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: <Target />,
      title: "Smart Campaign Management",
      description: "AI-driven campaign optimization that automatically adjusts targeting and budget allocation for maximum ROI."
    },
    {
      icon: <TrendingUp />,
      title: "Performance Analytics",
      description: "Real-time analytics dashboard with predictive insights and automated reporting capabilities."
    },
    {
      icon: <Users />,
      title: "Audience Segmentation",
      description: "Advanced segmentation tools powered by machine learning for precise targeting and personalization."
    },
    {
      icon: <BarChart3 />,
      title: "Conversion Optimization",
      description: "Automated A/B testing and funnel optimization to maximize conversion rates across channels."
    },
    {
      icon: <BrainCircuit />,
      title: "AI Content Generation",
      description: "Generate engaging marketing content with AI assistance for emails, social media, and ads."
    },
    {
      icon: <MessageSquare />,
      title: "Multi-channel Automation",
      description: "Seamlessly coordinate marketing efforts across email, social media, and advertising platforms."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
        Comprehensive Marketing Solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};