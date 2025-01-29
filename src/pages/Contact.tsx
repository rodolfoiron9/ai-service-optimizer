import { Mail, Phone, Clock } from "lucide-react";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHeader } from "@/components/contact/ContactHeader";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4">
          <ContactHeader />
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

        <ContactForm />

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