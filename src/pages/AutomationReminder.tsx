import { Bell, Clock, Calendar, BarChart3, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AutomationReminder = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-7xl">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <div className="inline-block p-4 rounded-full bg-secondary/10 mb-6">
          <Bell className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Smart Automation Reminders
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Never miss important tasks with our intelligent automation reminder system.
        </p>
        <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
          Start Free Trial
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 px-4">
        <Card className="glass-card p-6">
          <Clock className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Smart Scheduling</h3>
          <p className="text-gray-600">
            Intelligent timing for your automated reminders.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Calendar className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Calendar Integration</h3>
          <p className="text-gray-600">
            Sync with your existing calendar systems.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <Settings className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Custom Rules</h3>
          <p className="text-gray-600">
            Set up personalized automation rules.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AutomationReminder;