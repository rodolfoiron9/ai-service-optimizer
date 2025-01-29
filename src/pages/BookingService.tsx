import { Calendar, Clock, Bell, Users, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <CalendarCheck className="w-6 h-6 text-primary" />,
    title: "Smart Scheduling",
    description: "AI-powered scheduling that learns from your preferences and patterns"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Group Bookings",
    description: "Handle multiple bookings and group reservations with ease"
  },
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Automated Reminders",
    description: "SMS and email notifications to reduce no-shows"
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "24/7 Availability",
    description: "Let clients book appointments anytime, anywhere"
  }
];

const BookingService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-8">
              <Calendar className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-medium">Booking System</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Transform Your Booking Experience
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your appointment scheduling with our intelligent booking system. 
              Save time, reduce no-shows, and delight your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-gray-600">
              Our booking system comes packed with features to help you manage appointments effortlessly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-primary/5 to-blue-600/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses that trust our booking system
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingService;