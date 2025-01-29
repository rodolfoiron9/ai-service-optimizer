import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <footer className="w-full bg-gray-100/80 backdrop-blur-md border-t border-gray-200/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <Phone className="w-5 h-5" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <Mail className="w-5 h-5" />
            <span>contact@aiservicepack.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <Button 
              variant="outline" 
              className="bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-800"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};