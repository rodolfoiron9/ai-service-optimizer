import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./navigation/MenuItem";
import { MobileMenu } from "./navigation/MobileMenu";
import { menuItems } from "./navigation/menuItems";

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
            className="flex items-center space-x-2 text-xl font-bold text-black hover:text-gray-700 transition-colors"
          >
            <span className="text-black">
              AI Service Pack
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <MenuItem 
                    key={item.path} 
                    item={item} 
                    currentPath={location.pathname}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:text-gray-700 hover:bg-gray-100 transition-colors"
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
        <MobileMenu 
          isOpen={isOpen}
          items={menuItems}
          currentPath={location.pathname}
          onItemClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
};