import { Building2, Brain, Gauge, Shield, ChartBarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const BusinessLoans = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Manila Skyline */}
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Tech-Enabled Business Loans
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Powering Filipino MSMEs with AI-driven lending solutions and our innovative JAG model
          </p>
          <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
            Apply Now
          </Button>
        </div>
      </section>

      {/* JAG Model Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our JAG Model Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  AI Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced machine learning algorithms analyze your business performance and potential
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartBarIcon className="w-6 h-6 text-primary" />
                  Growth Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Computer vision technology evaluates your business location and operations
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Real-time risk assessment and monitoring for better loan terms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Business Loans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Faster Approvals</h3>
                <p className="text-gray-600">
                  Our AI-powered system processes applications up to 5x faster than traditional methods
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Building2 className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">MSME Focused</h3>
                <p className="text-gray-600">
                  Tailored solutions for Filipino small and medium enterprises
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Gauge className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
                <p className="text-gray-600">
                  Competitive rates and customized repayment schedules
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
                <p className="text-gray-600">
                  Bank-grade security and data protection for your peace of mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.9), rgba(249, 115, 22, 0.8)), url('https://images.unsplash.com/photo-1527576539890-dfa815648363')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of Filipino businesses that trust our technology-driven lending solutions
          </p>
          <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
            Start Your Application
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoans;