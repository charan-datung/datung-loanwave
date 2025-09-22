import { ChartBar, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users } from "lucide-react";

export const Products = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden glass-section">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 gradient-text-glow animate-slide-in-up">Our Products</h2>
        <p className="text-sm md:text-base text-center text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto px-4 animate-slide-in-up">
          Comprehensive financial solutions designed for the Filipino market
        </p>
        
        {/* Lending Products */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 gradient-text-animated">Lending Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="group animate-float-smooth">
              <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3 border border-white/20 hover:border-primary/40 relative overflow-hidden h-full animate-pulse-glow">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1200 ease-out"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-700 ease-out shadow-lg hover:shadow-xl">
                    <Building2 className="w-6 md:w-8 h-6 md:h-8 text-white transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">MSME Loans</h4>
                  <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 leading-relaxed flex-grow transition-all duration-700 ease-out group-hover:text-white">Fast and flexible financing for Filipino small and medium enterprises with our innovative JAG model.</p>
                  <Link to="/business-loans">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-md text-sm md:text-base py-2 md:py-3">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group animate-float-smooth" style={{animationDelay: '1s'}}>
              <div className="glass-card p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3 border border-white/20 hover:border-secondary/40 relative overflow-hidden h-full animate-pulse-glow">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/8 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1200 ease-out"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-secondary to-accent rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-700 ease-out shadow-lg hover:shadow-xl">
                    <Users className="w-6 md:w-8 h-6 md:h-8 text-white transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-secondary">Salary Loans</h4>
                  <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 leading-relaxed flex-grow transition-all duration-700 ease-out group-hover:text-white">Convenient financing solutions for employed Filipinos with competitive rates and flexible terms.</p>
                  <Link to="/salary-loans">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-md text-sm md:text-base py-2 md:py-3">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Products */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 gradient-text-animated">Technology Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
            <div className="group animate-float">
              <div className="glass-card p-4 md:p-6 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-white/20 hover:border-primary/30 relative overflow-hidden h-full glow-primary">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/6 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-all duration-700 ease-out shadow-sm hover:shadow-md">
                    <ChartBar className="w-5 md:w-6 h-5 md:h-6 text-primary transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">Credit Scoring</h4>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed transition-all duration-700 ease-out group-hover:text-white">AI-powered credit assessment system tailored for the Filipino market and local business patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="group animate-float" style={{animationDelay: '2s'}}>
              <div className="glass-card p-4 md:p-6 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-white/20 hover:border-primary/30 relative overflow-hidden h-full glow-secondary">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/6 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-all duration-700 ease-out shadow-sm hover:shadow-md">
                    <Shield className="w-5 md:w-6 h-5 md:h-6 text-primary transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">Risk Management</h4>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed transition-all duration-700 ease-out group-hover:text-white">Advanced risk analysis and fraud detection tailored for Filipino businesses and market conditions.</p>
                </div>
              </div>
            </div>
            
            <div className="group animate-float" style={{animationDelay: '4s'}}>
              <div className="glass-card p-4 md:p-6 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-white/20 hover:border-primary/30 relative overflow-hidden h-full glow-accent">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/6 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-all duration-700 ease-out shadow-sm hover:shadow-md">
                    <Database className="w-5 md:w-6 h-5 md:h-6 text-primary transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">Loan Management</h4>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed transition-all duration-700 ease-out group-hover:text-white">End-to-end loan processing platform designed specifically for Filipino lenders and regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};