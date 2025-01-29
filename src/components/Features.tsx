import { CheckCircle } from "lucide-react";

const features = [
  "Time-Saving Automation",
  "Cost-Effective Solution",
  "AI-Driven Efficiency",
  "Instant Activation",
  "Lifetime Updates",
  "24/7 Support",
];

export const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI-Powered Pack?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-3">
              <CheckCircle className="text-primary w-6 h-6" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};