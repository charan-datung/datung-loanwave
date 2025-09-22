import { ChartBar, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users } from "lucide-react";

export const Products = () => {
  return (
    <section className="py-20 md:py-24 elegant-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold elegant-title mb-6">Our Products</h2>
          <p className="text-lg elegant-subtitle max-w-2xl mx-auto">
            Comprehensive financial solutions designed for the Filipino market
          </p>
        </div>
        
        {/* Lending Products */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 elegant-title">Lending Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="elegant-card p-8 h-full hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold elegant-title mb-4">MSME Loans</h4>
                <p className="elegant-subtitle mb-6 leading-relaxed">
                  Fast and flexible financing for Filipino small and medium enterprises with our innovative JAG model.
                </p>
                <Link to="/business-loans">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="elegant-card p-8 h-full hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold elegant-title mb-4">Salary Loans</h4>
                <p className="elegant-subtitle mb-6 leading-relaxed">
                  Convenient financing solutions for employed Filipinos with competitive rates and flexible terms.
                </p>
                <Link to="/salary-loans">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-xl py-3">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Products */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 elegant-title">Technology Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="elegant-card p-6 h-full hover-lift text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <ChartBar className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold elegant-title mb-4">Credit Scoring</h4>
                <p className="elegant-subtitle leading-relaxed">
                  AI-powered credit assessment system tailored for the Filipino market and local business patterns.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="elegant-card p-6 h-full hover-lift text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="text-lg font-bold elegant-title mb-4">Risk Management</h4>
                <p className="elegant-subtitle leading-relaxed">
                  Advanced risk analysis and fraud detection tailored for Filipino businesses and market conditions.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="elegant-card p-6 h-full hover-lift text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Database className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-lg font-bold elegant-title mb-4">Loan Management</h4>
                <p className="elegant-subtitle leading-relaxed">
                  End-to-end loan processing platform designed specifically for Filipino lenders and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};