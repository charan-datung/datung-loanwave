import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-[100] border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/datung-logo.svg" alt="Datung" className="h-8 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/business-loans" className="text-gray-700 hover:text-primary font-medium">Business Loans</Link>
            <Link to="/salary-loans" className="text-gray-700 hover:text-primary font-medium">Salary Loans</Link>
            <Link to="/technology" className="text-gray-700 hover:text-primary font-medium">Technology</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
            <Link to="/developers" className="text-gray-700 hover:text-primary font-medium">Developers</Link>
            <Button variant="default">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/business-loans" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Business Loans</Link>
              <Link to="/salary-loans" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Salary Loans</Link>
              <Link to="/technology" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Technology</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">About</Link>
              <Link to="/developers" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Developers</Link>
              <Button className="w-full mt-4" variant="default">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};