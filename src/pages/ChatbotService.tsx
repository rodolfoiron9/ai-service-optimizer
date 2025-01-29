import { Bot, MessageSquare, Zap, BarChart3, Settings, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatbotWidget } from "@/components/ChatbotWidget";

const ChatbotService = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block p-4 rounded-full bg-secondary/10 mb-6">
          <Bot className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          AI-Powered Chatbot Service
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your customer support with our intelligent chatbot that handles inquiries 24/7, learns from interactions, and seamlessly integrates with your platform.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
          Start Free Trial
        </Button>
      </div>

      {/* Demo Templates Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Ready-to-Use Chatbot Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Customer Support Bot</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>FAQ automation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Ticket creation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>24/7 availability</span>
              </li>
            </ul>
            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">Try Demo</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Sales Assistant Bot</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Product recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Price inquiries</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Lead qualification</span>
              </li>
            </ul>
            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">Try Demo</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Booking Assistant Bot</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Appointment scheduling</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Calendar integration</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Reminder setup</span>
              </li>
            </ul>
            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">Try Demo</Button>
          </Card>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
          <MessageSquare className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
          <p className="text-gray-600">
            Advanced NLP capabilities for understanding and responding to customer queries naturally.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
          <Zap className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
          <p className="text-gray-600">
            Lightning-fast responses to common queries, reducing wait times and improving satisfaction.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
          <BarChart3 className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600">
            Comprehensive insights into chat performance, user satisfaction, and key metrics.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
          <Settings className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
          <p className="text-gray-600">
            Seamless integration with your existing platforms and customizable to match your brand.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow border-primary/10">
          <Shield className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
          <p className="text-gray-600">
            Bank-grade encryption and security measures to protect sensitive customer data.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-secondary/5">
          <Bot className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
          <p className="text-gray-600">
            Round-the-clock customer support without the need for human intervention.
          </p>
        </Card>
      </div>

      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Template</h3>
              <p className="text-gray-600">Select from our pre-built templates or customize your own chatbot flow.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Customize & Train</h3>
              <p className="text-gray-600">Train your bot with your business knowledge and customize responses.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Deploy & Monitor</h3>
              <p className="text-gray-600">Launch your chatbot and track its performance through our analytics dashboard.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Customer Support?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that have improved their customer satisfaction with our AI chatbot service.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Schedule Demo
          </Button>
        </div>
      </div>

      {/* Add the ChatbotWidget component */}
      <ChatbotWidget />
    </div>
  );
};

export default ChatbotService;
