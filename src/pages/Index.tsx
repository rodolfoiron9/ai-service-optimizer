import { Bot, Calendar, Mail, Newspaper } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Features } from "@/components/Features";

const services = [
  {
    title: "AI Chatbot",
    description: "Enhance customer support with our intelligent chatbot that handles inquiries 24/7, integrates seamlessly with your platform, and learns from interactions.",
    icon: <Bot className="w-7 h-7" />,
    demoLink: "/chatbot",
  },
  {
    title: "Booking System",
    description: "Streamline your appointment scheduling with our automated booking system featuring calendar sync, reminders, and customizable booking rules.",
    icon: <Calendar className="w-7 h-7" />,
    demoLink: "/booking",
  },
  {
    title: "Marketing Automation",
    description: "Elevate your marketing with AI-driven campaigns, smart email automation, and data-driven insights to maximize your conversion rates.",
    icon: <Mail className="w-7 h-7" />,
    demoLink: "/marketing",
  },
  {
    title: "Blog Automation",
    description: "Generate SEO-optimized content automatically, schedule posts strategically, and maintain a consistent content calendar effortlessly.",
    icon: <Newspaper className="w-7 h-7" />,
    demoLink: "/blog",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative">
        <Hero />
        
        <div className="container py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-6">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your business operations with our comprehensive suite of AI-powered tools and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <Features />
      </div>
    </div>
  );
};

export default Index;