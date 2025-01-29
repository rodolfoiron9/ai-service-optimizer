import { Mail, Phone, Globe, Facebook, Instagram, MapPin, Shield, Award, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Contact = () => {
  const location = useLocation();
  const path = location.pathname;

  const getFooterStyle = () => {
    switch (path) {
      case '/chatbot':
        return {
          bgColor: 'bg-gray-900/80 backdrop-blur-md border-t border-gray-700/20',
          accentColor: 'text-[#b4a6f7]',
          hoverColor: 'hover:text-[#9b87f5]'
        };
      case '/booking':
        return {
          bgColor: 'bg-gray-900/80 backdrop-blur-md border-t border-gray-700/20',
          accentColor: 'text-blue-300',
          hoverColor: 'hover:text-blue-400'
        };
      case '/marketing':
        return {
          bgColor: 'bg-gray-900/80 backdrop-blur-md border-t border-gray-700/20',
          accentColor: 'text-emerald-300',
          hoverColor: 'hover:text-emerald-400'
        };
      case '/blog':
        return {
          bgColor: 'bg-gray-900/80 backdrop-blur-md border-t border-gray-700/20',
          accentColor: 'text-orange-300',
          hoverColor: 'hover:text-orange-400'
        };
      default:
        return {
          bgColor: 'bg-gray-900/80 backdrop-blur-md border-t border-gray-700/20',
          accentColor: 'text-blue-400',
          hoverColor: 'hover:text-blue-500'
        };
    }
  };

  const getFooterContent = () => {
    switch (path) {
      case '/chatbot':
        return {
          title: "AI Chatbot Solutions",
          description: "Revolutionizing Customer Support with Intelligent Automation",
          ctaText: "Experience the Future of Customer Service"
        };
      case '/booking':
        return {
          title: "Smart Booking System",
          description: "Streamline Your Appointment Management",
          ctaText: "Transform Your Scheduling Experience"
        };
      case '/marketing':
        return {
          title: "Marketing Automation Hub",
          description: "Elevate Your Marketing Strategy with AI",
          ctaText: "Unlock Marketing Potential"
        };
      case '/blog':
        return {
          title: "Blog Content Engine",
          description: "Automate Your Content Creation Journey",
          ctaText: "Power Up Your Content Strategy"
        };
      default:
        return {
          title: "AI Service Pack",
          description: "Transform Your Business with Cutting-Edge AI Automation",
          ctaText: "Discover the Power of AI"
        };
    }
  };

  const style = getFooterStyle();
  const content = getFooterContent();
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "AI Chatbot", path: "/chatbot" },
    { title: "Booking System", path: "/booking" },
    { title: "Marketing Automation", path: "/marketing" },
    { title: "Blog Automation", path: "/blog" },
  ];

  return (
    <footer className={`${style.bgColor} text-white py-16 border-t border-gray-800/30 backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className={`w-6 h-6 ${style.accentColor}`} />
              <h3 className={`text-xl font-bold ${style.accentColor}`}>{content.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {content.description}
            </p>
            <div className="flex items-center space-x-2">
              <Award className={`w-5 h-5 ${style.accentColor}`} />
              <span className="text-sm text-gray-400">Trusted by 1000+ businesses</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className={`w-6 h-6 ${style.accentColor}`} />
              <h3 className={`text-xl font-bold ${style.accentColor}`}>Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-gray-300 ${style.hoverColor} transition-colors duration-300 flex items-center space-x-2`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className={`w-6 h-6 ${style.accentColor}`} />
              <h3 className={`text-xl font-bold ${style.accentColor}`}>Contact Us</h3>
            </div>
            <div className="space-y-4">
              <a 
                href="tel:+1234567890" 
                className={`flex items-center space-x-3 text-gray-300 ${style.hoverColor} transition-all duration-300 group`}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+1 (234) 567-890</span>
              </a>
              <a 
                href="mailto:support@yourwebsite.com" 
                className={`flex items-center space-x-3 text-gray-300 ${style.hoverColor} transition-all duration-300 group`}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>support@yourwebsite.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>123 AI Street, Tech City</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className={`w-6 h-6 ${style.accentColor}`} />
              <h3 className={`text-xl font-bold ${style.accentColor}`}>Follow Us</h3>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className={`text-gray-300 ${style.hoverColor} transition-all duration-300 transform hover:scale-110`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                className={`text-gray-300 ${style.hoverColor} transition-all duration-300 transform hover:scale-110`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.yourwebsite.com" 
                className={`text-gray-300 ${style.hoverColor} transition-all duration-300 transform hover:scale-110`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/30 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {content.title}. {content.ctaText}
          </p>
        </div>
      </div>
    </footer>
  );
};
