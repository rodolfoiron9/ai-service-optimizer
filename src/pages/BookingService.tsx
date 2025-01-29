import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingService = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Calendar className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold">Booking System</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Fully automated appointment booking with calendar sync and automated reminders.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-4">
            <li>Automated Scheduling</li>
            <li>Calendar Integration</li>
            <li>SMS & Email Reminders</li>
            <li>Custom Booking Forms</li>
            <li>Real-time Availability</li>
          </ul>

          <div className="mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingService;