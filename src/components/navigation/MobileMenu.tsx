import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{
    title: string;
    path: string;
    icon: LucideIcon;
    related: Array<{
      title: string;
      description: string;
    }>;
  }>;
  currentPath: string;
  onItemClick: () => void;
}

export const MobileMenu = ({ isOpen, items, currentPath, onItemClick }: MobileMenuProps) => {
  return (
    <div
      id="mobile-menu"
      className={cn(
        "md:hidden absolute left-0 right-0 px-4 pt-2 pb-4 bg-white shadow-lg transition-all duration-300 ease-in-out",
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
      role="menu"
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                "hover:bg-gray-100 focus:bg-gray-100 outline-none",
                isActive
                  ? "text-primary bg-gray-100"
                  : "text-gray-600 hover:text-primary focus:text-primary"
              )}
              onClick={onItemClick}
              role="menuitem"
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {item.title}
              {item.related.length > 0 && (
                <span className="ml-auto text-xs text-gray-400">
                  {item.related.length} options
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};