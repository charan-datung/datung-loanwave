import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20 mt-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Logo and Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start">
              <img 
                src="/datung-logo-footer.png" 
                alt="Datung Logo" 
                className="h-24 w-auto"
              />
              <p className="text-gray-300 text-sm font-medium mt-2 text-center lg:text-left">
                Borrow. Belong. Beyond.
              </p>
            </div>
          </div>
          
          {/* Products */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/business-loans" className="text-gray-300 hover:text-accent transition-all duration-300 text-sm font-medium hover:translate-x-1">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/salary-loans" className="text-gray-300 hover:text-accent transition-all duration-300 text-sm font-medium hover:translate-x-1">
                  Salary Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/technology" className="text-gray-300 hover:text-accent transition-all duration-300 text-sm font-medium hover:translate-x-1">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/company" className="text-gray-300 hover:text-accent transition-all duration-300 text-sm font-medium hover:translate-x-1">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/employee" className="text-gray-300 hover:text-accent transition-all duration-300 text-sm font-medium hover:translate-x-1">
                  For Employees
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/mission" className="text-gray-300 hover:text-accent transition-all duration-300 text-sm font-medium hover:translate-x-1">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-accent transition-all duration-300 text-sm font-medium hover:translate-x-1">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Offices */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Our Offices</h3>
            <div className="space-y-5">
              <div>
                <div className="text-accent font-bold text-sm mb-2">Philippines</div>
                <p className="text-gray-300 text-sm leading-relaxed">Manila • Las Piñas • Parañaque</p>
              </div>
              <div>
                <div className="text-accent font-bold text-sm mb-2">International</div>
                <p className="text-gray-300 text-sm leading-relaxed">Singapore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 pt-8 border-t border-gray-600/30">
          <div className="text-center">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Follow Us</h4>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.facebook.com/p/Datung-Financial-Services-61558527307292/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} className="text-gray-300 hover:text-accent transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/datung.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} className="text-gray-300 hover:text-accent transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/company/datung" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={24} className="text-gray-300 hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-600/30 text-center">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} Datung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};