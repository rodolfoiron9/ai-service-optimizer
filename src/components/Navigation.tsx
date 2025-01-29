import { useState, useEffect } from "react";
import { Menu, X, Atom } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

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
    { title: "Home", path: "/" },
    { title: "AI Chatbot", path: "/chatbot" },
    { title: "Booking System", path: "/booking" },
    { title: "Marketing Automation", path: "/marketing" },
    { title: "Blog Automation", path: "/blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#1A1F2C] shadow-lg"
          : "bg-[#1A1F2C] bg-opacity-95 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            <Atom className="h-8 w-8 text-[#9b87f5]" />
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent">
              AI Service Pack
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors",
                  "before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-[#9b87f5] before:transition-all before:duration-300 hover:before:w-full",
                  location.pathname === item.path
                    ? "text-[#9b87f5] before:w-full"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-[#403E43] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 px-4 pt-2 pb-4 bg-[#1A1F2C] shadow-lg transition-all duration-300 ease-in-out",
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
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-[#403E43] text-[#9b87f5]"
                    : "text-gray-300 hover:bg-[#403E43] hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};