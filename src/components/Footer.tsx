import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 md:py-16 mt-16 md:mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Logo and Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <img 
                src="/datung-logo-footer.png" 
                alt="Datung Logo" 
                className="h-36 w-auto"
              />
              <p className="text-gray-200 text-sm leading-relaxed max-w-xs -mt-2">
                Borrow. Belong. Beyond.
              </p>
            </div>
          </div>
          
          {/* Products */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-base">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/business-loans" className="text-gray-200 hover:text-accent transition-colors text-sm">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/salary-loans" className="text-gray-200 hover:text-accent transition-colors text-sm">
                  Salary Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-base">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/technology" className="text-gray-200 hover:text-accent transition-colors text-sm">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/company" className="text-gray-200 hover:text-accent transition-colors text-sm">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/employee" className="text-gray-200 hover:text-accent transition-colors text-sm">
                  For Employees
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-base">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mission" className="text-gray-200 hover:text-accent transition-colors text-sm">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-200 hover:text-accent transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-base">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Datung-Financial-Services-61558527307292/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-accent transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/datung.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/datung" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-accent transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Office Info - Simplified */}
            <div className="space-y-2 pt-4">
              <h4 className="text-white font-medium text-sm">Offices</h4>
              <div className="text-gray-200 text-xs space-y-1">
                <p>Manila • Las Piñas • Parañaque</p>
                <p>Singapore</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6 md:mb-8"></div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Datung Pte Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};