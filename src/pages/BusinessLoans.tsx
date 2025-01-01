import { 
  Store, Users, Clock, FileCheck, Building2, 
  ShieldCheck, CreditCard, Calendar, CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { SuccessStories } from "@/components/SuccessStories";

const BusinessLoans = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 relative bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.9)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              No Bank Account Required • No Business Permit Needed
            </h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Small Business Loans
            <br />
            <span className="text-accent">For Every Filipino Entrepreneur</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get ₱5,000 to ₱50,000 in just 3 days with minimal requirements
          </p>
          <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Loan Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Loan Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Flexible Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Borrow ₱5,000 to ₱50,000 based on your business needs
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-secondary" />
                  Quick Release
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get your loan within 3 days after approval
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                  No Collateral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No need for property or vehicle collateral
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(36, 123, 160, 0.95), rgba(36, 123, 160, 0.9)), url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2')",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Who Can Apply</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sari-sari Store Owners", icon: Store },
              { title: "Carinderia Operators", icon: Building2 },
              { title: "Market Vendors", icon: Store },
              { title: "Small Retail Businesses", icon: Building2 },
              { title: "Service Providers", icon: Users },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                <item.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Simple Requirements</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-primary">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Valid ID Only</h3>
                  <p className="text-gray-600">Any government-issued ID is accepted</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-secondary">
                <Store className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proof of Business</h3>
                  <p className="text-gray-600">Simple pictures of your business location</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-accent">
                <Users className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Group Formation</h3>
                  <p className="text-gray-600">Form a group of 3-5 business owners from your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 159, 28, 0.95), rgba(255, 159, 28, 0.9)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85')",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Simple Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "Group Formation", icon: Users },
                { title: "Documentation", icon: FileCheck },
                { title: "Site Visit", icon: Store },
                { title: "Approval", icon: CheckCircle2 },
                { title: "Cash Release", icon: CreditCard },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  {index < 4 && (
                    <div className="hidden md:block w-full h-0.5 bg-white/30 absolute mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />

      {/* CTA Section */}
      <section 
        className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 36, 99, 0.9), rgba(10, 36, 99, 0.85)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of Filipino entrepreneurs who have grown their businesses with our support
          </p>
          <Button size="lg" variant="default" className="bg-accent text-black hover:bg-accent/90">
            Start Your Application
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoans;