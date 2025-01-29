import { Mail, Phone, Globe, Facebook, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-secondary">
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </a>
          <a href="mailto:support@yourwebsite.com" className="flex items-center space-x-2 hover:text-secondary">
            <Mail className="w-5 h-5" />
            <span>support@yourwebsite.com</span>
          </a>
          <a href="https://www.yourwebsite.com" className="flex items-center space-x-2 hover:text-secondary">
            <Globe className="w-5 h-5" />
            <span>www.yourwebsite.com</span>
          </a>
          <div className="flex space-x-4">
            <a href="https://facebook.com/yourbusiness" className="hover:text-secondary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/yourbusiness" className="hover:text-secondary">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};