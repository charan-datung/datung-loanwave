import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-lg z-[100]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/95638834-302e-47fc-b697-9e1da393e9d9.png" 
                alt="Datung" 
                className="h-28 w-auto object-contain" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary font-semibold">
              Home
            </Link>
            <Link to="/business-loans" className="text-gray-900 hover:text-primary font-semibold">Business Loans</Link>
            <Link to="/salary-loans" className="text-gray-900 hover:text-primary font-semibold">Salary Loans</Link>
            <Link to="/technology" className="text-gray-900 hover:text-primary font-semibold">Technology</Link>
            <Link to="/about" className="text-gray-900 hover:text-primary font-semibold">About</Link>
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button variant="default">Get Started</Button>
              }
            />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link to="/" className="block px-3 py-2 text-gray-900 hover:text-primary font-semibold">
                Home
              </Link>
              <Link to="/business-loans" className="block px-3 py-2 text-gray-900 hover:text-primary font-semibold">Business Loans</Link>
              <Link to="/salary-loans" className="block px-3 py-2 text-gray-900 hover:text-primary font-semibold">Salary Loans</Link>
              <Link to="/technology" className="block px-3 py-2 text-gray-900 hover:text-primary font-semibold">Technology</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-900 hover:text-primary font-semibold">About</Link>
              <ContactForm 
                defaultType="loan"
                triggerComponent={
                  <Button className="w-full mt-4" variant="default">Get Started</Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};