import { Bot, Calendar, Mail, Newspaper, Rocket, DollarSign, Zap, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const serviceCards = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Chatbot",
    description: "Intelligent chatbot to handle customer inquiries instantly with seamless platform integration.",
    link: "/chatbot"
  },
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    title: "Booking System",
    description: "Fully automated appointment booking with calendar sync and automated reminders.",
    link: "/booking"
  },
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: "Marketing Automation",
    description: "Smart email campaigns and AI-generated content to maximize conversions.",
    link: "/marketing"
  },
  {
    icon: <Newspaper className="w-8 h-8 text-primary" />,
    title: "Blog Automation",
    description: "AI-generated SEO-optimized blog posts with automated scheduling and publishing.",
    link: "/blog"
  }
];

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Time-Saving Automation",
    description: "Let AI handle tasks while you focus on growth"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: "Cost-Effective Solution",
    description: "Full-featured package at a one-time price"
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "AI-Driven Efficiency",
    description: "Enhance operations with intelligent automation"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Hero />
      
      {/* Dashboard Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
              Comprehensive Dashboard for Service Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take control of your business with our intuitive dashboard featuring real-time analytics, 
              easy customization, and AI-driven recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button className="w-full group">
                      View Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our AI-Powered Pack?
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with cutting-edge AI automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-4">One-Time Setup Fee: $399</h2>
              <div className="flex justify-center gap-4 mb-6">
                <span className="inline-flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Instant Activation
                </span>
                <span className="inline-flex items-center text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Lifetime Updates
                </span>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;