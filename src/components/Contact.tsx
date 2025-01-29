import { Mail, Phone, Globe, Facebook, Instagram, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Contact = () => {
  const location = useLocation();
  const path = location.pathname;

  const getFooterStyle = () => {
    switch (path) {
      case '/chatbot':
        return {
          bgColor: 'bg-[#1A1F2C]',
          accentColor: 'text-[#9b87f5]',
          hoverColor: 'hover:text-[#b4a6f7]'
        };
      case '/booking':
        return {
          bgColor: 'bg-[#221F26]',
          accentColor: 'text-blue-400',
          hoverColor: 'hover:text-blue-300'
        };
      case '/marketing':
        return {
          bgColor: 'bg-[#403E43]',
          accentColor: 'text-emerald-400',
          hoverColor: 'hover:text-emerald-300'
        };
      case '/blog':
        return {
          bgColor: 'bg-[#222222]',
          accentColor: 'text-orange-400',
          hoverColor: 'hover:text-orange-300'
        };
      default:
        return {
          bgColor: 'bg-[#1A1F2C]',
          accentColor: 'text-blue-500',
          hoverColor: 'hover:text-blue-400'
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
    <footer className={`${style.bgColor} text-white py-16 border-t border-gray-800`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${style.accentColor}`}>{content.title}</h3>
            <p className="text-gray-400">
              {content.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${style.accentColor}`}>Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-gray-400 ${style.hoverColor} transition-colors`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${style.accentColor}`}>Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:+1234567890" 
                className={`flex items-center space-x-2 text-gray-400 ${style.hoverColor}`}
              >
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a 
                href="mailto:support@yourwebsite.com" 
                className={`flex items-center space-x-2 text-gray-400 ${style.hoverColor}`}
              >
                <Mail className="w-5 h-5" />
                <span>support@yourwebsite.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>123 AI Street, Tech City</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${style.accentColor}`}>Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className={`text-gray-400 ${style.hoverColor} transition-colors`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                className={`text-gray-400 ${style.hoverColor} transition-colors`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.yourwebsite.com" 
                className={`text-gray-400 ${style.hoverColor} transition-colors`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} {content.title}. {content.ctaText}</p>
        </div>
      </div>
    </footer>
  );
};