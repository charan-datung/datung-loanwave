import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface ProcessingStep {
  id: number;
  label: string;
  progress: number;
  status: "pending" | "processing" | "completed";
}

export const ProcessingVisualization = () => {
  const [steps, setSteps] = useState<ProcessingStep[]>([
    { id: 1, label: "AI Credit Scoring", progress: 0, status: "pending" },
    { id: 2, label: "Risk Assessment", progress: 0, status: "pending" },
    { id: 3, label: "Community Validation", progress: 0, status: "pending" },
    { id: 4, label: "Loan Approval", progress: 0, status: "pending" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps(prev => {
        const newSteps = [...prev];
        let hasActiveStep = false;

        // Find the first non-completed step
        for (let i = 0; i < newSteps.length; i++) {
          if (newSteps[i].status !== "completed") {
            hasActiveStep = true;
            newSteps[i].status = "processing";
            
            // Increment progress
            if (newSteps[i].progress < 100) {
              newSteps[i].progress += Math.random() * 15 + 5;
              if (newSteps[i].progress >= 100) {
                newSteps[i].progress = 100;
                newSteps[i].status = "completed";
              }
            }
            break;
          }
        }

        // Reset if all completed
        if (!hasActiveStep) {
          return [
            { id: 1, label: "AI Credit Scoring", progress: 0, status: "pending" },
            { id: 2, label: "Risk Assessment", progress: 0, status: "pending" },
            { id: 3, label: "Community Validation", progress: 0, status: "pending" },
            { id: 4, label: "Loan Approval", progress: 0, status: "pending" },
          ];
        }

        return newSteps;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            Real-time Loan Processing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our AI-powered system process loan applications in real-time
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${
                      step.status === "completed" ? "text-secondary" :
                      step.status === "processing" ? "text-primary" :
                      "text-muted-foreground"
                    }`}>
                      {step.label}
                    </span>
                    <span className={`text-sm ${
                      step.status === "completed" ? "text-secondary" :
                      step.status === "processing" ? "text-primary" :
                      "text-muted-foreground"
                    }`}>
                      {Math.round(step.progress)}%
                    </span>
                  </div>
                  <Progress 
                    value={step.progress} 
                    className={`h-2 ${
                      step.status === "processing" ? "animate-pulse" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                Processing applications 24/7 with AI precision
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};