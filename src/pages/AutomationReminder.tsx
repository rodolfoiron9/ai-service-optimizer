import { Bell, Clock, Calendar, BarChart3, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AutomationReminder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-8">
              <Bell className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-medium">Smart Automation Reminders</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Never Miss Important Tasks
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automate your reminders and stay on top of your schedule with our intelligent system.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card">
            <CardHeader>
              <Clock className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Smart Scheduling</CardTitle>
              <CardDescription>
                Intelligent timing for your automated reminders.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Calendar Integration</CardTitle>
              <CardDescription>
                Sync with your existing calendar systems.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Settings className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Custom Rules</CardTitle>
              <CardDescription>
                Set up personalized automation rules.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Track and optimize your reminder patterns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Secure Notifications</CardTitle>
              <CardDescription>
                Private and secure reminder delivery.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <Bell className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Multi-Channel Alerts</CardTitle>
              <CardDescription>
                Get notified via email, SMS, or push notifications.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AutomationReminder;