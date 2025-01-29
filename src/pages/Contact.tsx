import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const ContactInfo = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-lg bg-primary/10">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ContactInfo
            icon={Phone}
            title="Call Us"
            text="+1 (555) 123-4567"
          />
          <ContactInfo
            icon={Mail}
            title="Email Us"
            text="contact@aiservicepack.com"
          />
          <ContactInfo
            icon={Clock}
            title="Business Hours"
            text="Mon-Fri: 9AM - 6PM EST"
          />
        </div>

        <Card className="p-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input placeholder="How can we help?" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                placeholder="Tell us more about your needs..." 
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full">Send Message</Button>
          </form>
        </Card>

        <div className="mt-12 text-center text-sm text-gray-600">
          <p>
            By submitting this form you agree to our{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;