import { Users, Target, Zap, BarChart3, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LeadGeneration = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-7xl">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <div className="inline-block p-4 rounded-full bg-secondary/10 mb-6">
          <Target className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          AI Lead Generation
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Generate and nurture high-quality leads with our AI-powered lead generation system.
        </p>
        <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
          Start Free Trial
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16 px-4">
        <Card className="glass-card p-6">
          <Users className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Lead Scoring</h3>
          <p className="text-gray-600">
            Automatically score and qualify leads based on behavior.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Smart Follow-ups</h3>
          <p className="text-gray-600">
            Automated follow-up sequences to nurture leads.
          </p>
        </Card>

        <Card className="glass-card p-6">
          <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Conversion Tracking</h3>
          <p className="text-gray-600">
            Monitor and optimize your lead conversion rates.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LeadGeneration;