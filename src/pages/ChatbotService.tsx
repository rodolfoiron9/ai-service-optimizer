import { Bot, MessageSquare, Zap, BarChart3, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ChatbotService = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block p-4 rounded-full bg-[#1A1F2C] mb-6">
          <Bot className="w-12 h-12 text-[#9b87f5]" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text text-transparent mb-6">
          AI-Powered Chatbot Service
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your customer support with our intelligent chatbot that handles inquiries 24/7, learns from interactions, and seamlessly integrates with your platform.
        </p>
        <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
          Start Free Trial
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <MessageSquare className="w-10 h-10 text-[#9b87f5] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
          <p className="text-gray-600">
            Advanced NLP capabilities for understanding and responding to customer queries naturally.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Zap className="w-10 h-10 text-[#9b87f5] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
          <p className="text-gray-600">
            Lightning-fast responses to common queries, reducing wait times and improving satisfaction.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <BarChart3 className="w-10 h-10 text-[#9b87f5] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600">
            Comprehensive insights into chat performance, user satisfaction, and key metrics.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Settings className="w-10 h-10 text-[#9b87f5] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
          <p className="text-gray-600">
            Seamless integration with your existing platforms and customizable to match your brand.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <Shield className="w-10 h-10 text-[#9b87f5] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
          <p className="text-gray-600">
            Bank-grade encryption and security measures to protect sensitive customer data.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-[#1A1F2C] to-[#403E43] text-white">
          <Bot className="w-10 h-10 text-[#9b87f5] mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
          <p className="text-gray-300">
            Round-the-clock customer support without the need for human intervention.
          </p>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1A1F2C] rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Customer Support?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that have improved their customer satisfaction with our AI chatbot service.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotService;