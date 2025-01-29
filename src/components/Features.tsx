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
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white/50 to-blue-50/50 backdrop-blur-sm"></div>
      <div className="container relative">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Why Choose Our AI-Powered Pack?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-3 p-4 rounded-lg backdrop-blur-sm bg-white/50 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="text-primary w-6 h-6" />
              <span className="text-lg text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};