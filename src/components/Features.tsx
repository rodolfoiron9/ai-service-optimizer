import { CheckCircle, Bot, Calendar, Mail, Newspaper, Zap, Shield, Clock, Gift } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-Powered Chatbot",
    description: "24/7 customer support with intelligent responses"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Smart Booking",
    description: "Automated scheduling and calendar management"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Marketing Suite",
    description: "AI-driven email campaigns and analytics"
  },
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: "Content Automation",
    description: "SEO-optimized blog posts and social media"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Integration",
    description: "Quick setup with existing platforms"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Advanced protection for your data"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time-Saving",
    description: "Automate repetitive tasks efficiently"
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Regular Updates",
    description: "Continuous improvements and new features"
  }
];

export const Features = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <div className="container relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Comprehensive Features for Your Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl backdrop-blur-md bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};