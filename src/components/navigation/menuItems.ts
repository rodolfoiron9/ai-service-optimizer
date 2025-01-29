import { 
  Home, 
  Bot, 
  Calendar, 
  Megaphone, 
  Newspaper,
  Search,
  Mail,
  Target,
  FileText,
  Bell
} from "lucide-react";

export const menuItems = [
  { 
    title: "Home",
    path: "/",
    icon: Home,
    related: []
  },
  { 
    title: "AI Chatbot",
    path: "/chatbot",
    icon: Bot,
    related: [
      { title: "Customer Support Bot", description: "24/7 automated support" },
      { title: "Sales Assistant Bot", description: "Convert leads automatically" },
    ]
  },
  { 
    title: "Booking System",
    path: "/booking",
    icon: Calendar,
    related: [
      { title: "Calendar Integration", description: "Sync with your schedule" },
      { title: "Automated Reminders", description: "Reduce no-shows" },
    ]
  },
  { 
    title: "Marketing",
    path: "/marketing",
    icon: Megaphone,
    related: [
      { title: "Email Campaigns", description: "AI-driven email marketing" },
      { title: "Lead Generation", description: "Automated lead nurturing" },
    ]
  },
  { 
    title: "Blog",
    path: "/blog",
    icon: Newspaper,
    related: [
      { title: "Content Generation", description: "AI-written blog posts" },
      { title: "SEO Optimization", description: "Rank higher in search" },
    ]
  },
  { 
    title: "SEO",
    path: "/seo",
    icon: Search,
    related: [
      { title: "Keyword Analysis", description: "Target the right keywords" },
      { title: "Performance Tracking", description: "Monitor your rankings" },
    ]
  },
  { 
    title: "Email Campaigns",
    path: "/email",
    icon: Mail,
    related: [
      { title: "Campaign Builder", description: "Create engaging emails" },
      { title: "Analytics", description: "Track campaign performance" },
    ]
  },
  { 
    title: "Lead Generation",
    path: "/leads",
    icon: Target,
    related: [
      { title: "Lead Scoring", description: "Qualify leads automatically" },
      { title: "Lead Nurturing", description: "Automated follow-ups" },
    ]
  },
  { 
    title: "Content",
    path: "/content",
    icon: FileText,
    related: [
      { title: "AI Writing", description: "Generate content automatically" },
      { title: "Content Strategy", description: "Plan your content" },
    ]
  },
  { 
    title: "Reminders",
    path: "/reminders",
    icon: Bell,
    related: [
      { title: "Smart Scheduling", description: "Intelligent timing" },
      { title: "Custom Rules", description: "Personalized automation" },
    ]
  },
];