import { Link } from "react-router-dom";
import { Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const SalaryLoans = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-primary">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-12 text-white leading-tight">
            Salary Loan Solutions
          </h1>
          <p className="text-xl text-white/80 mb-16 max-w-2xl mx-auto font-light">
            Choose the right loan solution for your needs
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Link to="/salary-loans/company" className="block group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Building2 className="w-20 h-20 mx-auto mb-6 text-accent" />
                <h2 className="text-3xl font-medium mb-4 text-white">For Companies</h2>
                <p className="mb-8 text-white/80 font-light leading-relaxed">
                  Partner with us to provide financial wellness benefits that drive productivity
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3 rounded-full transition-all"
                >
                  Learn More
                </Button>
              </div>
            </Link>
            
            <Link to="/salary-loans/employee" className="block group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <User className="w-20 h-20 mx-auto mb-6 text-accent" />
                <h2 className="text-3xl font-medium mb-4 text-white">For Employees</h2>
                <p className="mb-8 text-white/80 font-light leading-relaxed">
                  Access quick and flexible loan options with competitive rates
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3 rounded-full transition-all"
                >
                  Learn More
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SalaryLoans;