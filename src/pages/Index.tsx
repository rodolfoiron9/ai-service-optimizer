import { Bot, Calendar, Mail, Newspaper, ArrowRight, CheckCircle2, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Chatbot",
    description: "24/7 customer support with intelligent responses and seamless platform integration.",
    link: "/chatbot",
    features: [
      "Intelligent chatbot to handle customer inquiries instantly",
      "Seamless integration with your website and social platforms",
      "Customizable response flows and conversation scripts",
      "Analytics to track user interactions and improve engagement"
    ]
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Booking System",
    description: "Automated scheduling with calendar sync and smart reminders.",
    link: "/booking",
    features: [
      "Fully automated appointment booking with calendar sync",
      "Integration with Google Calendar & third-party tools",
      "Automated reminders via email and SMS",
      "Customizable booking forms for tailored experiences"
    ]
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Marketing Automation",
    description: "Smart email campaigns and AI-generated content to maximize conversions.",
    link: "/marketing",
    features: [
      "Smart email campaigns designed to maximize conversions",
      "AI-generated content to engage customers effortlessly",
      "Lead generation and nurturing with automated follow-ups",
      "Performance insights and optimization recommendations"
    ]
  },
  {
    icon: <Newspaper className="w-8 h-8" />,
    title: "Blog Automation",
    description: "SEO-optimized blog posts with automated scheduling and publishing.",
    link: "/blog",
    features: [
      "AI-generated SEO-optimized blog posts to drive traffic",
      "Automated scheduling for consistent posting",
      "Integration with social media for auto-publishing",
      "Content tailored to your business niche"
    ]
  }
];

const blogPosts = [
  {
    title: "How AI is Changing Web Development",
    excerpt: "Discover the latest trends in AI-powered web development...",
    date: "March 15, 2024"
  },
  {
    title: "5 Ways to Automate Your Marketing Strategy",
    excerpt: "Learn how to leverage automation for better marketing results...",
    date: "March 14, 2024"
  },
  {
    title: "Chatbots vs. Live Chat: Which is Best?",
    excerpt: "A comprehensive comparison of automated and human support...",
    date: "March 13, 2024"
  }
];

const Index = () => {
  const [selectedService, setSelectedService] = useState("");
  const [postcode, setPostcode] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/90 to-blue-900/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Web Development & Automation Pack
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform Your Business with Cutting-Edge AI Automation!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90">
              Get Started for $399 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20">
              View Demo
            </Button>
          </div>
        </div>
      </section>

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
            {services.map((service, index) => (
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
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest AI automation trends and business growth tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{post.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-gray-600">{post.excerpt}</p>
                    {/* Add full blog content here */}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-center mb-8">Get Your AI-Powered Pack Today!</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Time-Saving</h3>
                    <p className="text-sm text-gray-600">Let AI handle tasks</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">Cost-Effective</h3>
                    <p className="text-sm text-gray-600">One-time price</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bot className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">AI-Driven</h3>
                    <p className="text-sm text-gray-600">Smart automation</p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold mb-4">$399</div>
                <div className="flex justify-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Instant Activation
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Lifetime Updates
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    className="w-full p-3 border rounded-lg"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">Select a Service</option>
                    <option value="chatbot">AI Chatbot</option>
                    <option value="booking">Booking System</option>
                    <option value="marketing">Marketing Automation</option>
                    <option value="blog">Blog Automation</option>
                  </select>
                  <Input
                    type="text"
                    placeholder="Enter Your Postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;