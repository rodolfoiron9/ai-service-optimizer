import { useState, useEffect } from "react";
import { Menu, X, Home, Bot, Calendar, Megaphone, Newspaper } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { 
      title: "Home",
      path: "/",
      icon: <Home className="w-4 h-4" />,
      related: []
    },
    { 
      title: "AI Chatbot",
      path: "/chatbot",
      icon: <Bot className="w-4 h-4" />,
      related: [
        { title: "Customer Support Bot", description: "24/7 automated support" },
        { title: "Sales Assistant Bot", description: "Convert leads automatically" },
      ]
    },
    { 
      title: "Booking System",
      path: "/booking",
      icon: <Calendar className="w-4 h-4" />,
      related: [
        { title: "Calendar Integration", description: "Sync with your schedule" },
        { title: "Automated Reminders", description: "Reduce no-shows" },
      ]
    },
    { 
      title: "Marketing Automation",
      path: "/marketing",
      icon: <Megaphone className="w-4 h-4" />,
      related: [
        { title: "Email Campaigns", description: "AI-driven email marketing" },
        { title: "Lead Generation", description: "Automated lead nurturing" },
      ]
    },
    { 
      title: "Blog Automation",
      path: "/blog",
      icon: <Newspaper className="w-4 h-4" />,
      related: [
        { title: "Content Generation", description: "AI-written blog posts" },
        { title: "SEO Optimization", description: "Rank higher in search" },
      ]
    },
  ];

  return (

    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-gray-100/80 backdrop-blur-md border-b border-gray-200/20 shadow-lg"
          : "bg-gray-100/60 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-cyan-300 hover:text-cyan-400 transition-colors"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Service Pack
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    {item.related.length > 0 ? (
                      <>
                        <NavigationMenuTrigger className="text-cyan-300 hover:text-cyan-400">
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.title}
                          </span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                            {item.related.map((related, index) => (
                              <li key={index}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-cyan-100 hover:text-slate-900"
                                  >
                                    <div className="text-sm font-medium text-cyan-900">
                                      {related.title}
                                    </div>
                                    <p className="text-sm text-cyan-700">
                                      {related.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center gap-2 py-2 px-4 text-sm font-medium transition-colors",
                          "before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-cyan-400 before:transition-all before:duration-300 hover:before:w-full",
                          location.pathname === item.path
                            ? "text-cyan-300 before:w-full"
                            : "text-cyan-300 hover:text-cyan-400"
                        )}
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-cyan-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 px-4 pt-2 pb-4 bg-slate-900 shadow-lg transition-all duration-300 ease-in-out",
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-cyan-500/10 text-cyan-300"
                    : "text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
