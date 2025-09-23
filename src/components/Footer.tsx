import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Brand - Takes up more space */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center lg:text-left">
              <img 
                src="/datung-logo-footer.png" 
                alt="Datung Logo" 
                className="h-20 w-auto mx-auto lg:mx-0"
              />
              <p className="text-gray-200 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 mt-1">
                Borrow. Belong. Beyond.
              </p>
            </div>
            
            {/* Office Info */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold text-base mb-3">Our Offices</h4>
              <div className="text-gray-200 text-sm space-y-1">
                <p>Manila • Las Piñas • Parañaque</p>
                <p>Singapore</p>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-base mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/business-loans" className="text-gray-200 hover:text-accent transition-colors text-sm block">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/salary-loans" className="text-gray-200 hover:text-accent transition-colors text-sm block">
                  Salary Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-base mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/technology" className="text-gray-200 hover:text-accent transition-colors text-sm block">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/company" className="text-gray-200 hover:text-accent transition-colors text-sm block">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/employee" className="text-gray-200 hover:text-accent transition-colors text-sm block">
                  For Employees
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Social */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/mission" className="text-gray-200 hover:text-accent transition-colors text-sm block">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-200 hover:text-accent transition-colors text-sm block">
                  Careers
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold text-base mb-4">Follow Us</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a 
                  href="https://www.facebook.com/p/Datung-Financial-Services-61558527307292/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent transition-colors transform hover:scale-110 duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={22} />
                </a>
                <a 
                  href="https://www.instagram.com/datung.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent transition-colors transform hover:scale-110 duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/datung" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent transition-colors transform hover:scale-110 duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8"></div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Datung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};