import { ChartBar, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Building2, Users } from "lucide-react";

export const Products = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(254, 198, 161, 0.1), rgba(249, 115, 22, 0.1))",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Products</h2>
        <Tabs defaultValue="lending" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="lending">Lending Products</TabsTrigger>
            <TabsTrigger value="technology">Technology Solutions</TabsTrigger>
          </TabsList>
          <TabsContent value="lending" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">MSME Loans</h3>
                <p className="text-gray-600 mb-4">Fast and flexible financing for Filipino small and medium enterprises.</p>
                <Link to="/business-loans">
                  <Button>Learn More</Button>
                </Link>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Salary Loans</h3>
                <p className="text-gray-600 mb-4">Convenient financing solutions for employed Filipinos.</p>
                <Link to="/salary-loans">
                  <Button>Learn More</Button>
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="technology" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <ChartBar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Credit Scoring</h3>
                <p className="text-gray-600">AI-powered credit assessment system for the Philippine market.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
                <p className="text-gray-600">Advanced risk analysis tailored for Filipino businesses.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Loan Management</h3>
                <p className="text-gray-600">End-to-end loan processing platform for Philippine lenders.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};