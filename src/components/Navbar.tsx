import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b z-[100]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/95638834-302e-47fc-b697-9e1da393e9d9.png" 
                alt="Datung" 
                className="h-16 w-auto object-contain -my-1" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium">
              Home
            </Link>
            <Link to="/business-loans" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium">
              Business Loans
            </Link>
            <Link to="/salary-loans" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium">
              Salary Loans
            </Link>
            <Link to="/technology" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium">
              Technology
            </Link>
            <Link to="/mission" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium">
              Mission
            </Link>
            <Link to="/careers" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium">
              Careers
            </Link>
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white shadow-sm"
                >
                  Get Started
                </Button>
              }
            />
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/business-loans" 
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Business Loans
              </Link>
              <Link 
                to="/salary-loans" 
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Salary Loans
              </Link>
              <Link 
                to="/technology" 
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/mission" 
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Mission
              </Link>
              <Link 
                to="/careers" 
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <div className="px-3 py-2">
                <ContactForm 
                  defaultType="loan"
                  triggerComponent={
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white shadow-sm"
                      size="sm"
                    >
                      Get Started
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};