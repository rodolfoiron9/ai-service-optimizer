import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const ContactForm = () => {
  return (
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
  );
};