import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface MenuItemProps {
  item: {
    title: string;
    path: string;
    icon: LucideIcon;
    related: Array<{
      title: string;
      description: string;
    }>;
  };
  currentPath: string;
}

export const MenuItem = ({ item, currentPath }: MenuItemProps) => {
  const Icon = item.icon;
  const isActive = currentPath === item.path;

  if (item.related.length > 0) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger 
          className="text-primary hover:text-primary/80"
          aria-label={`${item.title} menu`}
        >
          <span className="flex items-center gap-2">
            <Icon className="w-4 h-4" aria-hidden="true" />
            {item.title}
          </span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2" role="menu">
            {item.related.map((related, index) => (
              <li key={index} role="menuitem">
                <NavigationMenuLink asChild>
                  <Link
                    to={item.path}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-primary"
                  >
                    <div className="text-sm font-medium text-primary">
                      {related.title}
                    </div>
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {related.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link
        to={item.path}
        className={cn(
          "flex items-center gap-2 py-2 px-4 text-sm font-medium rounded-md transition-colors",
          "hover:bg-gray-100 focus:bg-gray-100 outline-none",
          isActive
            ? "text-primary bg-gray-100"
            : "text-gray-600 hover:text-primary focus:text-primary"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        <Icon className="w-4 h-4" aria-hidden="true" />
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};