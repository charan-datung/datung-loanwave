import { Link } from "react-router-dom";
import { Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const SalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 opacity-10 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')", // Professional office workers in meeting
        }}
      />
      <Navbar />
      <div className="bg-gradient-to-b from-secondary/95 to-secondary text-white relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            Salary Loan Solutions
          </h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/salary-loans/company" className="block">
              <div className="p-8 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all text-center bg-white/5 backdrop-blur-sm">
                <Building2 className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">For Companies</h2>
                <p className="mb-6 text-white/80">
                  Partner with us to provide financial wellness benefits that drive productivity
                </p>
                <Button 
                  size="lg" 
                  variant="default"
                  className="bg-accent text-black hover:bg-accent/90"
                >
                  Learn More
                </Button>
              </div>
            </Link>
            
            <Link to="/salary-loans/employee" className="block">
              <div className="p-8 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all text-center bg-white/5 backdrop-blur-sm">
                <User className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">For Employees</h2>
                <p className="mb-6 text-white/80">
                  Access quick and flexible loan options with competitive rates
                </p>
                <Button 
                  size="lg" 
                  variant="default"
                  className="bg-accent text-black hover:bg-accent/90"
                >
                  Learn More
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalaryLoans;