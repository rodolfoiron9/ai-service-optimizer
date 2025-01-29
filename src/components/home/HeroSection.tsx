import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Transform Your Business with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Unlock the power of artificial intelligence with our comprehensive suite of business solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/chatbot">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
            >
              Try Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};