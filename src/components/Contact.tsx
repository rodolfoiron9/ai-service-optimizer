import { Mail, Phone, Globe, Building2, Handshake, Award } from "lucide-react";
import { Button } from "./ui/button";

const ContactInfo = ({ icon: Icon, text, href }: { icon: any; text: string; href?: string }) => (
  <a 
    href={href} 
    className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-gray-800 transition-colors"
  >
    <Icon className="w-5 h-5" />
    <span>{text}</span>
  </a>
);

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

export const Contact = () => {
  return (
    <footer className="w-full bg-gray-100/80 backdrop-blur-md border-t border-gray-200/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">AI Service Pack</h3>
            <p className="text-sm text-gray-600">
              Transforming businesses with cutting-edge AI automation solutions and innovative web development services.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon"
                className="bg-gray-100/50 hover:bg-gray-200/50"
              >
                <Globe className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                size="icon" 
                className="bg-gray-100/50 hover:bg-gray-200/50"
              >
                <Award className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <FooterSection title="Contact Us">
            <ContactInfo 
              icon={Phone} 
              text="+1 (555) 123-4567"
              href="tel:+15551234567"
            />
            <ContactInfo 
              icon={Mail} 
              text="contact@aiservicepack.com"
              href="mailto:contact@aiservicepack.com"
            />
            <ContactInfo 
              icon={Building2} 
              text="123 AI Plaza, Tech Valley"
            />
          </FooterSection>

          {/* Services */}
          <FooterSection title="Our Services">
            <ContactInfo icon={Globe} text="AI Chatbot Solutions" />
            <ContactInfo icon={Handshake} text="Business Automation" />
            <ContactInfo icon={Award} text="Web Development" />
          </FooterSection>

          {/* CTA Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Ready to Get Started?</h3>
            <p className="text-sm text-gray-600">
              Transform your business with our AI-powered solutions today.
            </p>
            <div className="space-y-2">
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
              >
                Schedule a Demo
              </Button>
              <Button 
                variant="outline" 
                className="w-full bg-gray-100/50 hover:bg-gray-200/50"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200/20 text-center text-sm text-gray-600">
          <p>© 2024 AI Service Pack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};