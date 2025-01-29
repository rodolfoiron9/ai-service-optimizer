import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  demoLink: string;
}

export const ServiceCard = ({ title, description, icon, demoLink }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 mb-4 text-primary flex items-center justify-center bg-blue-50 rounded-lg">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="w-full">
          <a href={demoLink}>View Demo</a>
        </Button>
      </CardContent>
    </Card>
  );
};