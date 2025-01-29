import { 
  Bot, 
  Calendar,
  MessageSquare,
  Users,
  BarChart,
  DollarSign,
  Video,
  Mail,
  Search,
  FileText,
  Bell,
  Rocket
} from "lucide-react";

export const menuItems = [
  {
    title: "AI Chatbot",
    path: "/chatbot",
    icon: Bot,
    related: [{
      title: "24/7 Customer Support",
      description: "Intelligent automated responses for customer inquiries"
    }]
  },
  {
    title: "Booking System",
    path: "/booking",
    icon: Calendar,
    related: [{
      title: "Smart Scheduling",
      description: "Automated scheduling and calendar management"
    }]
  },
  {
    title: "Marketing",
    path: "/marketing",
    icon: Rocket,
    related: [{
      title: "AI Marketing",
      description: "AI-powered marketing automation solutions"
    }]
  },
  {
    title: "Blog",
    path: "/blog",
    icon: FileText,
    related: [{
      title: "Content Management",
      description: "Automated blog content management system"
    }]
  },
  {
    title: "SEO Optimization",
    path: "/seo",
    icon: Search,
    related: [{
      title: "Search Engine Optimization",
      description: "AI-powered SEO tools and analytics"
    }]
  },
  {
    title: "Email Campaigns",
    path: "/email",
    icon: Mail,
    related: [{
      title: "Email Marketing",
      description: "Automated email campaign management"
    }]
  },
  {
    title: "Lead Generation",
    path: "/leads",
    icon: Users,
    related: [{
      title: "Lead Management",
      description: "Smart lead capture and nurturing system"
    }]
  },
  {
    title: "Content Generation",
    path: "/content",
    icon: FileText,
    related: [{
      title: "AI Content Creation",
      description: "Automated content generation tools"
    }]
  },
  {
    title: "Automation Reminders",
    path: "/reminders",
    icon: Bell,
    related: [{
      title: "Smart Notifications",
      description: "Automated reminder and notification system"
    }]
  },
  {
    title: "Schedule Demo",
    path: "/demo",
    icon: Video,
    related: [{
      title: "Live Demo",
      description: "Schedule a live demonstration of our platform"
    }]
  },
  {
    title: "Pricing",
    path: "/pricing",
    icon: DollarSign,
    related: [{
      title: "Plans & Packages",
      description: "View our pricing plans and packages"
    }]
  },
  {
    title: "Contact",
    path: "/contact",
    icon: MessageSquare,
    related: [{
      title: "Get in Touch",
      description: "Contact our support team"
    }]
  }
];