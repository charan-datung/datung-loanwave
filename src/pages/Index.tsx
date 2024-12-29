import { Building2, Users, Computer, ChartBar, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Empowering Businesses Through Finance and Technology
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Innovative financial solutions powered by AI technology for businesses and individuals across the Philippines
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/business-loans">
              <ServiceCard
                title="Business Loans"
                description="Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment."
                icon={Building2}
              />
            </Link>
            <Link to="/salary-loans">
              <ServiceCard
                title="Salary Loans"
                description="Employee loan management and HR technology solutions for modern workplaces."
                icon={Users}
              />
            </Link>
            <Link to="/technology">
              <ServiceCard
                title="Technology Solutions"
                description="Advanced loan underwriting and credit assessment powered by AI."
                icon={Computer}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
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
                  <p className="text-gray-600 mb-4">Fast and flexible financing for small and medium enterprises.</p>
                  <Link to="/business-loans">
                    <Button>Learn More</Button>
                  </Link>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Salary Loans</h3>
                  <p className="text-gray-600 mb-4">Convenient financing solutions for employed individuals.</p>
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
                  <p className="text-gray-600">AI-powered credit assessment system.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
                  <p className="text-gray-600">Advanced risk analysis and monitoring.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <Database className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Loan Management</h3>
                  <p className="text-gray-600">End-to-end loan processing platform.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses leveraging our financial technology solutions.
          </p>
          <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;