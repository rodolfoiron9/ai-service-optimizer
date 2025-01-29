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

  if (item.related.length > 0) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-black hover:text-gray-700">
          <span className="flex items-center gap-2">
            <Icon className="w-4 h-4" />
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
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-black"
                  >
                    <div className="text-sm font-medium text-black">
                      {related.title}
                    </div>
                    <p className="text-sm text-gray-700">
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
          "flex items-center gap-2 py-2 px-4 text-sm font-medium transition-colors",
          "before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-gray-700 before:transition-all before:duration-300 hover:before:w-full",
          currentPath === item.path
            ? "text-black before:w-full"
            : "text-black hover:text-gray-700"
        )}
      >
        <Icon className="w-4 h-4" />
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};