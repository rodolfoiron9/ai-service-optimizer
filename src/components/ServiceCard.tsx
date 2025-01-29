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
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader>
        <div className="w-14 h-14 mb-5 text-primary flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-base text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          asChild 
          variant="outline" 
          className="w-full bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-primary/20 transition-all duration-300"
        >
          <Link to={demoLink} className="flex items-center justify-center gap-2">
            View Demo
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};