import { Link } from "react-router-dom";
import { Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const SalaryLoans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/95 to-secondary text-white">
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Salary Loan Solutions
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-16">
          <Link to="/salary-loans/company" className="block">
            <div className="p-8 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all text-center">
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
            <div className="p-8 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all text-center">
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
  );
};

export default SalaryLoans;