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
      className={cn(
        "md:hidden absolute left-0 right-0 px-4 pt-2 pb-4 bg-white shadow-lg transition-all duration-300 ease-in-out",
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <div className="flex flex-col space-y-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                currentPath === item.path
                  ? "bg-gray-100 text-black"
                  : "text-black hover:bg-gray-100 hover:text-gray-700"
              )}
              onClick={onItemClick}
            >
              <Icon className="w-4 h-4" />
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};