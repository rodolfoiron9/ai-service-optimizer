import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const ContactInfo = ({ icon: Icon, title, text }: ContactInfoProps) => (
  <Card className="glass-card">
    <CardHeader>
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{text}</CardDescription>
        </div>
      </div>
    </CardHeader>
  </Card>
);