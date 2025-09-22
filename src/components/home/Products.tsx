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
            <div className="group perspective-1000">
              <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-2 border border-gray-100 hover:border-primary/30 relative overflow-hidden h-full transform-gpu">
                {/* Enhanced 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-1000 ease-out"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 40px rgba(0, 77, 77, 0.3)' }}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Building2 className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:text-primary">MSME Loans</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow transition-all duration-500 group-hover:text-gray-800">Fast and flexible financing for Filipino small and medium enterprises with our innovative JAG model.</p>
                  <Link to="/business-loans">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group perspective-1000">
              <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-6 hover:rotate-[-2deg] border border-gray-100 hover:border-secondary/30 relative overflow-hidden h-full transform-gpu">
                {/* Enhanced 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-1000 ease-out"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 40px rgba(0, 179, 122, 0.3)' }}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-[-6deg] transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Users className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:text-secondary">Salary Loans</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow transition-all duration-500 group-hover:text-gray-800">Convenient financing solutions for employed Filipinos with competitive rates and flexible terms.</p>
                  <Link to="/salary-loans">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg">Learn More</Button>
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
            <div className="group perspective-1000">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-1 border border-gray-100 hover:border-primary/30 relative overflow-hidden h-full transform-gpu">
                {/* Enhanced 3D Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-800 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-lg">
                    <ChartBar className="w-6 h-6 text-primary transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:text-primary">Credit Scoring</h4>
                  <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">AI-powered credit assessment system tailored for the Filipino market and local business patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="group perspective-1000">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-[-1deg] border border-gray-100 hover:border-primary/30 relative overflow-hidden h-full transform-gpu">
                {/* Enhanced 3D Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-800 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-125 group-hover:rotate-[-12deg] transition-all duration-500 shadow-md group-hover:shadow-lg">
                    <Shield className="w-6 h-6 text-primary transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:text-primary">Risk Management</h4>
                  <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">Advanced risk analysis and fraud detection tailored for Filipino businesses and market conditions.</p>
                </div>
              </div>
            </div>
            
            <div className="group perspective-1000">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-2 border border-gray-100 hover:border-primary/30 relative overflow-hidden h-full transform-gpu">
                {/* Enhanced 3D Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-800 ease-out"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-lg">
                    <Database className="w-6 h-6 text-primary transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-all duration-500 group-hover:scale-105 group-hover:text-primary">Loan Management</h4>
                  <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">End-to-end loan processing platform designed specifically for Filipino lenders and regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};