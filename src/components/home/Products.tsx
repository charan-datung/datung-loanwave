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
          Comprehensive financial solutions designed for the Filipino market
        </p>
        
        {/* Lending Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Lending Products</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1200 ease-out"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700 ease-out shadow-lg hover:shadow-xl">
                    <Building2 className="w-8 h-8 text-white transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">MSME Loans</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow transition-all duration-700 ease-out group-hover:text-gray-700">Fast and flexible financing for Filipino small and medium enterprises with our innovative JAG model.</p>
                  <Link to="/business-loans">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-md">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-3 border border-gray-100 hover:border-secondary/20 relative overflow-hidden h-full">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/8 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1200 ease-out"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700 ease-out shadow-lg hover:shadow-xl">
                    <Users className="w-8 h-8 text-white transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-secondary">Salary Loans</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow transition-all duration-700 ease-out group-hover:text-gray-700">Convenient financing solutions for employed Filipinos with competitive rates and flexible terms.</p>
                  <Link to="/salary-loans">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-md">Learn More</Button>
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
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/6 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-700 ease-out shadow-sm hover:shadow-md">
                    <ChartBar className="w-6 h-6 text-primary transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">Credit Scoring</h4>
                  <p className="text-gray-600 leading-relaxed transition-all duration-700 ease-out group-hover:text-gray-700">AI-powered credit assessment system tailored for the Filipino market and local business patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/6 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-700 ease-out shadow-sm hover:shadow-md">
                    <Shield className="w-6 h-6 text-primary transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">Risk Management</h4>
                  <p className="text-gray-600 leading-relaxed transition-all duration-700 ease-out group-hover:text-gray-700">Advanced risk analysis and fraud detection tailored for Filipino businesses and market conditions.</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 border border-gray-100 hover:border-primary/20 relative overflow-hidden h-full">
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/6 via-transparent to-secondary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/6 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all duration-700 ease-out shadow-sm hover:shadow-md">
                    <Database className="w-6 h-6 text-primary transition-all duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:text-primary">Loan Management</h4>
                  <p className="text-gray-600 leading-relaxed transition-all duration-700 ease-out group-hover:text-gray-700">End-to-end loan processing platform designed specifically for Filipino lenders and regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};