import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
}

export const ServiceCard = ({ icon: Icon, title, description, path }: ServiceCardProps) => {
  return (
    <Card className="glass-card group hover:translate-y-[-4px]">
      <CardHeader>
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </CardHeader>
      <CardContent>
        <Link to={path}>
          <Button className="w-full bg-primary hover:bg-primary/90">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};