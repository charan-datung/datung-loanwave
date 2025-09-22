import { ChartBar, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users } from "lucide-react";

export const Products = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">Our Products</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive financial solutions designed for the Philippine market
        </p>
        
        {/* Lending Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Lending Products</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">MSME Loans</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Fast and flexible financing for Filipino small and medium enterprises with our innovative JAG model.</p>
                  <Link to="/business-loans">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Salary Loans</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Convenient financing solutions for employed Filipinos with competitive rates and flexible terms.</p>
                  <Link to="/salary-loans">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Products */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Technology Products</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <ChartBar className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Credit Scoring</h4>
                  <p className="text-gray-600 leading-relaxed">AI-powered credit assessment system tailored for the Philippine market and local business patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Risk Management</h4>
                  <p className="text-gray-600 leading-relaxed">Advanced risk analysis and fraud detection tailored for Filipino businesses and market conditions.</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Loan Management</h4>
                  <p className="text-gray-600 leading-relaxed">End-to-end loan processing platform designed specifically for Philippine lenders and regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};