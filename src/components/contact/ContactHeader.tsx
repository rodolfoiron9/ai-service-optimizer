import { Mail } from "lucide-react";

export const ContactHeader = () => {
  return (
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
  );
};