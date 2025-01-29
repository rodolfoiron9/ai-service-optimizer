import { Bot, Calendar, Mail, Newspaper } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";

const services = [
  {
    title: "AI Chatbot",
    description: "Intelligent chatbot to handle customer inquiries instantly with seamless platform integration.",
    icon: <Bot className="w-6 h-6" />,
    demoLink: "/chatbot",
  },
  {
    title: "Booking System",
    description: "Fully automated appointment booking with calendar sync and automated reminders.",
    icon: <Calendar className="w-6 h-6" />,
    demoLink: "/booking",
  },
  {
    title: "Marketing Automation",
    description: "Smart email campaigns and AI-generated content to maximize conversions.",
    icon: <Mail className="w-6 h-6" />,
    demoLink: "/marketing",
  },
  {
    title: "Blog Automation",
    description: "AI-generated SEO-optimized blog posts with automated scheduling and social media integration.",
    icon: <Newspaper className="w-6 h-6" />,
    demoLink: "/blog",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative">
        <Hero />
        
        <div className="container py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <Features />
        <Contact />
      </div>
    </div>
  );
};

export default Index;