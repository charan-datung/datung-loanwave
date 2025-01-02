import { Building2, Users, Computer, ChartBar, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      {/* Hero Section with Philippine Skyline Background */}
      <section 
        className="pt-32 pb-20 px-4 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.9)), url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Empowering Filipino Businesses Through Finance and Technology
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Innovative financial solutions powered by AI technology for MSMEs and professionals across the Philippines
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ContactForm 
                defaultType="loan"
                triggerComponent={
                  <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                    Get Started
                  </Button>
                }
              />
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4">Our Solutions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Empowering Filipino entrepreneurs and professionals with innovative financial solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/business-loans">
              <ServiceCard
                title="Business Loans"
                description="Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment for Filipino entrepreneurs."
                icon={Building2}
              />
            </Link>
            <Link to="/salary-loans">
              <ServiceCard
                title="Salary Loans"
                description="Employee loan management and HR technology solutions for Filipino workplaces and professionals."
                icon={Users}
              />
            </Link>
            <Link to="/technology">
              <ServiceCard
                title="Technology Solutions"
                description="Advanced loan underwriting and credit assessment powered by AI, tailored for the Philippine market."
                icon={Computer}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      {/* Products Section with Modern Gradient */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(254, 198, 161, 0.1), rgba(249, 115, 22, 0.1))",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
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

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-2">Powered By</h2>
          <p className="text-gray-600 text-center mb-12">Backed by world-class partners</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-4xl mx-auto">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/3e2787a3-b40b-4df2-8d60-8ebaeb631904.png" 
                alt="NVIDIA" 
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/211b85f9-fb99-43a4-a7cc-06a3e20a9a76.png" 
                alt="Google Cloud" 
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/3cd6b113-dd20-469d-ad46-195e9723307d.png" 
                alt="Antler" 
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section with Manila Skyline Background */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.9), rgba(249, 115, 22, 0.8)), url('https://images.unsplash.com/photo-1527576539890-dfa815648363')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Filipino businesses leveraging our financial technology solutions.
          </p>
          <ContactForm 
            defaultType="loan"
            triggerComponent={
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
