import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Datung</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary">Benefits</a>
            <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
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
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-primary">Benefits</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</a>
              <Button className="w-full mt-4" variant="default">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};