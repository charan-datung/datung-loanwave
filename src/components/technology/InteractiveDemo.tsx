import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, TrendingUp, Users, DollarSign, AlertTriangle } from "lucide-react";

const demoSteps = [
  { id: 1, title: "Document Upload", status: "completed", icon: CheckCircle },
  { id: 2, title: "AI Analysis", status: "active", icon: Clock },
  { id: 3, title: "Risk Assessment", status: "pending", icon: TrendingUp },
  { id: 4, title: "Credit Decision", status: "pending", icon: CheckCircle },
];

const mockData = {
  businessName: "Maria's Sari-Sari Store",
  creditScore: 780,
  riskLevel: "Low",
  loanAmount: "₱50,000",
  approval: "Pre-approved",
  confidence: 94,
};

export const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [showResults, setShowResults] = useState(false);

  const handleRunDemo = () => {
    setShowResults(false);
    setCurrentStep(1);
    
    const steps = [1, 2, 3, 4];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(step + 1);
        if (step === 4) {
          setShowResults(true);
        }
      }, (index + 1) * 1500);
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            See Our AI in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Watch how our AI analyzes loan applications in real-time
          </p>
          <Button 
            onClick={handleRunDemo}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Run Live Demo
          </Button>
        </motion.div>

        <motion.div
          id="tech-demo"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Process Flow */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Processing Pipeline</h3>
                  <div className="space-y-6">
                    {demoSteps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0.5 }}
                        animate={{ 
                          opacity: currentStep >= step.id ? 1 : 0.5,
                          scale: currentStep === step.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                          currentStep >= step.id ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30' : 'bg-white/5'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          currentStep > step.id ? 'bg-green-500' : 
                          currentStep === step.id ? 'bg-blue-500 animate-pulse' : 'bg-gray-600'
                        }`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{step.title}</h4>
                          <p className="text-gray-400 text-sm capitalize">{step.status}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Processing Progress</span>
                      <span>{Math.min(currentStep * 25, 100)}%</span>
                    </div>
                    <Progress value={Math.min(currentStep * 25, 100)} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">AI Analysis Results</h3>
                  
                  {showResults ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="text-center p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">{mockData.approval}</h4>
                        <p className="text-gray-300">{mockData.businessName}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-400 text-sm">Credit Score</span>
                          </div>
                          <p className="text-2xl font-bold text-white">{mockData.creditScore}</p>
                        </div>
                        
                        <div className="bg-white/5 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-400 text-sm">Risk Level</span>
                          </div>
                          <p className="text-2xl font-bold text-green-400">{mockData.riskLevel}</p>
                        </div>
                        
                        <div className="bg-white/5 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-400 text-sm">Loan Amount</span>
                          </div>
                          <p className="text-2xl font-bold text-white">{mockData.loanAmount}</p>
                        </div>
                        
                        <div className="bg-white/5 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-400 text-sm">Confidence</span>
                          </div>
                          <p className="text-2xl font-bold text-white">{mockData.confidence}%</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-gray-400">Click "Run Live Demo" to see results</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};