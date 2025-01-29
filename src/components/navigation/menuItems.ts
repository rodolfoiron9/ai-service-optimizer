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
    title: "Services",
    items: [
      {
        title: "AI Chatbot",
        path: "/chatbot",
        icon: Bot,
        description: "24/7 customer support with intelligent responses"
      },
      {
        title: "Booking System",
        path: "/booking",
        icon: Calendar,
        description: "Automated scheduling and calendar management"
      },
      {
        title: "Marketing",
        path: "/marketing",
        icon: Rocket,
        description: "AI-powered marketing automation"
      },
      {
        title: "Blog",
        path: "/blog",
        icon: FileText,
        description: "Content management and automation"
      }
    ]
  },
  {
    title: "Tools",
    items: [
      {
        title: "SEO Optimization",
        path: "/seo",
        icon: Search,
        description: "Search engine optimization tools"
      },
      {
        title: "Email Campaigns",
        path: "/email",
        icon: Mail,
        description: "Automated email marketing"
      },
      {
        title: "Lead Generation",
        path: "/leads",
        icon: Users,
        description: "Lead capture and nurturing"
      },
      {
        title: "Content Generation",
        path: "/content",
        icon: FileText,
        description: "AI-powered content creation"
      },
      {
        title: "Automation Reminders",
        path: "/reminders",
        icon: Bell,
        description: "Smart scheduling and notifications"
      }
    ]
  },
  {
    title: "Company",
    items: [
      {
        title: "Schedule Demo",
        path: "/demo",
        icon: Video,
        description: "See our platform in action"
      },
      {
        title: "Pricing",
        path: "/pricing",
        icon: DollarSign,
        description: "Plans and packages"
      },
      {
        title: "Contact",
        path: "/contact",
        icon: MessageSquare,
        description: "Get in touch with us"
      }
    ]
  }
];