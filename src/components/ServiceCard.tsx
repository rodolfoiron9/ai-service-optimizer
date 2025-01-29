import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  demoLink: string;
}

export const ServiceCard = ({ title, description, icon, demoLink }: ServiceCardProps) => {
  return (
    <Card className="relative overflow-hidden backdrop-blur-sm bg-white/50 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <CardHeader>
        <div className="w-12 h-12 mb-4 text-primary flex items-center justify-center bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="w-full backdrop-blur-sm bg-white/50 border-primary/20 hover:bg-primary/5">
          <Link to={demoLink}>View Demo</Link>
        </Button>
      </CardContent>
    </Card>
  );
};