import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInfo = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <Card className="glass-card">
    <CardHeader>
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{text}</CardDescription>
        </div>
      </div>
    </CardHeader>
  </Card>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-8">
              <Mail className="w-6 h-6 text-primary mr-2" />
              <span className="text-primary font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
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

        <Card className="glass-card max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">Name</Label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">Email</Label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">Subject</Label>
                <Input placeholder="How can we help?" />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">Message</Label>
                <Textarea 
                  placeholder="Tell us more about your needs..." 
                  className="min-h-[150px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
            </form>
          </CardContent>
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