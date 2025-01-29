import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Marketing?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using our AI-powered marketing automation platform to drive growth and increase efficiency.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Schedule Demo
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  );
};