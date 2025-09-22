import { Building2, Users, Computer } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard";
import businessLoansBg from "@/assets/business-loans-bg-new.jpg";
import salaryLoansBg from "@/assets/salary-loans-bg.jpg";
import technologyBg from "@/assets/technology-solutions-bg.jpg";

export const Solutions = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold elegant-title mb-6">Our Solutions</h2>
          <p className="text-lg elegant-subtitle max-w-2xl mx-auto">
            We have empowered <span className="font-semibold text-primary">thousands</span> of Filipino entrepreneurs and professionals with innovative financial solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link to="/business-loans" className="group animate-fade-in-up">
            <div className="elegant-card p-8 h-full hover-lift group-hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold elegant-title mb-4">Business Loans</h3>
              <p className="elegant-subtitle leading-relaxed">
                Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment for Filipino entrepreneurs.
              </p>
            </div>
          </Link>
          
          <Link to="/salary-loans" className="group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="elegant-card p-8 h-full hover-lift group-hover:border-secondary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold elegant-title mb-4">Salary Loans</h3>
              <p className="elegant-subtitle leading-relaxed">
                Employee loan management and HR technology solutions for Filipino workplaces and professionals.
              </p>
            </div>
          </Link>
          
          <Link to="/technology" className="group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="elegant-card p-8 h-full hover-lift group-hover:border-accent/30">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6">
                <Computer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold elegant-title mb-4">Technology Solutions</h3>
              <p className="elegant-subtitle leading-relaxed">
                Advanced loan underwriting and credit assessment powered by AI, tailored for the Philippine market.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};