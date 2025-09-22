import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Brain, Shield, Database, CheckCircle } from "lucide-react";

interface ProcessingStep {
  id: string;
  name: string;
  icon: React.ElementType;
  progress: number;
  status: 'waiting' | 'processing' | 'completed';
}

export const ProcessingVisualization = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<ProcessingStep[]>([
    { id: 'analysis', name: 'Document Analysis', icon: Brain, progress: 0, status: 'waiting' },
    { id: 'risk', name: 'Risk Assessment', icon: Shield, progress: 0, status: 'waiting' },
    { id: 'scoring', name: 'Credit Scoring', icon: Database, progress: 0, status: 'waiting' },
    { id: 'decision', name: 'Decision Complete', icon: CheckCircle, progress: 0, status: 'waiting' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps(prevSteps => {
        const newSteps = [...prevSteps];
        
        // Update current step progress
        if (currentStep < newSteps.length) {
          const current = newSteps[currentStep];
          if (current.status === 'waiting') {
            current.status = 'processing';
            current.progress = 0;
          } else if (current.status === 'processing') {
            current.progress += 10;
            if (current.progress >= 100) {
              current.status = 'completed';
              setCurrentStep(prev => (prev + 1) % newSteps.length);
            }
          }
        }
        
        // Reset cycle when all steps complete
        if (currentStep >= newSteps.length) {
          setCurrentStep(0);
          newSteps.forEach(step => {
            step.progress = 0;
            step.status = 'waiting';
          });
        }
        
        return newSteps;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Real-Time AI Processing</h3>
        <p className="text-sm text-white/70">Watch our AI analyze loan applications</p>
      </div>
      
      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                step.status === 'processing'
                  ? 'bg-primary/20 border border-primary/30'
                  : step.status === 'completed'
                  ? 'bg-secondary/20 border border-secondary/30'
                  : 'bg-white/5 border border-white/10'
              }`}
              animate={{
                scale: step.status === 'processing' ? 1.02 : 1,
              }}
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.status === 'processing'
                    ? 'bg-primary text-white'
                    : step.status === 'completed'
                    ? 'bg-secondary text-white'
                    : 'bg-white/10 text-white/60'
                }`}
                animate={{
                  rotate: step.status === 'processing' ? 360 : 0,
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                }}
              >
                <Icon className="w-4 h-4" />
              </motion.div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-sm font-medium ${
                    step.status === 'completed' ? 'text-secondary' : 'text-white'
                  }`}>
                    {step.name}
                  </span>
                  {step.status === 'processing' && (
                    <span className="text-xs text-primary">{step.progress}%</span>
                  )}
                  {step.status === 'completed' && (
                    <CheckCircle className="w-4 h-4 text-secondary" />
                  )}
                </div>
                
                {(step.status === 'processing' || step.status === 'completed') && (
                  <Progress 
                    value={step.progress} 
                    className="h-1"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};