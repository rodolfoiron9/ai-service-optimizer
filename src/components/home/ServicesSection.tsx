import { ServiceCard } from "./ServiceCard";
import { ServicesHeader } from "./ServicesHeader";
import { Bot, Calendar, Mail, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "24/7 customer support with intelligent responses",
    path: "/chatbot"
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Automated scheduling and calendar management",
    path: "/booking"
  },
  {
    icon: Mail,
    title: "Marketing Suite",
    description: "AI-driven email campaigns and analytics",
    path: "/marketing"
  },
  {
    icon: MessageSquare,
    title: "Blog Service",
    description: "Content generation and management",
    path: "/blog"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <ServicesHeader 
          title="Our AI-Powered Services"
          description="Explore our suite of intelligent solutions designed to enhance your business operations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              path={service.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};