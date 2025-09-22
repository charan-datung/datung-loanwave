import { Button } from "@/components/ui/button";
import { Brain, Shield, Database, Camera, ChartBar, Code2, Workflow, Zap } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const TechnologyHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.95), rgba(36, 59, 85, 0.98)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            AI-Powered Financial Technology Solutions
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Advanced credit assessment and risk management systems powered by artificial intelligence and computer vision technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <ContactForm 
              defaultType="demo"
              triggerComponent={
                <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 animate-pulse hover:animate-none">
                  Schedule Demo
                </Button>
              }
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover-scale">
            <Brain className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Credit Scoring</h3>
            <p className="text-white/80">Advanced algorithms for accurate credit assessment and risk prediction.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover-scale">
            <Shield className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Risk Management</h3>
            <p className="text-white/80">Comprehensive risk analysis and monitoring systems.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover-scale">
            <Database className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Loan Platform</h3>
            <p className="text-white/80">End-to-end loan management and processing solution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};