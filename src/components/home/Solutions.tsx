import { Building2, Users, Computer } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessingVisualization } from "@/components/home/ProcessingVisualization";
import businessLoansBg from "@/assets/business-loans-bg-new.jpg";
import salaryLoansBg from "@/assets/salary-loans-bg.jpg";
import technologyBg from "@/assets/technology-solutions-bg.jpg";

export const Solutions = () => {
  return (
    <section className="py-8 md:py-12 lg:py-20 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 backdrop-blur-xl" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4 px-4">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Our Solutions
          </span>
        </h2>
        <p className="text-sm md:text-base text-center text-white/80 mb-6 md:mb-12 max-w-2xl mx-auto px-4">
          We have <span className="font-bold text-accent glow-text">empowered</span> <span className="font-bold text-secondary glow-text">thousands</span> of Filipino entrepreneurs and professionals with innovative financial solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-sm md:max-w-none mx-auto px-4">
          <Link to="/business-loans" className="group">
            <ServiceCard
              title="Business Loans"
              description="Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment for Filipino entrepreneurs."
              backgroundImage={businessLoansBg}
            />
          </Link>
          <Link to="/salary-loans" className="group">
            <ServiceCard
              title="Salary Loans"
              description="Employee loan management and HR technology solutions for Filipino workplaces and professionals."
              backgroundImage={salaryLoansBg}
            />
          </Link>
          <Link to="/technology" className="group">
            <ServiceCard
              title="Technology Solutions"
              description="Advanced loan underwriting and credit assessment powered by AI, tailored for the Philippine market."
              backgroundImage={technologyBg}
            />
          </Link>
        </div>
        
        {/* Real-time Processing Visualization */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <ProcessingVisualization />
        </div>
      </div>
    </section>
  );
};