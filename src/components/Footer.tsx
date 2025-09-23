import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 md:py-16 mt-16 md:mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex flex-col items-center text-center mb-4 md:mb-6">
              <img 
                src="/datung-logo-footer.png" 
                alt="Datung Logo" 
                className="h-14 md:h-16 w-auto mb-3"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold">Datung</h3>
                <p className="text-gray-200 text-xs md:text-sm font-medium mt-1">Borrow. Belong. Beyond.</p>
              </div>
            </div>
            
            {/* Office Addresses */}
            <div>
              <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm">Our Offices</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0">
                <div className="space-y-3 md:space-y-2">
                  <div>
                    <h5 className="text-accent font-medium mb-2 text-xs">Manila Office</h5>
                    <address className="not-italic text-gray-200 space-y-1 text-xs leading-relaxed">
                      <p>One Global Place</p>
                      <p>Bonifacio Global City</p>
                      <p>Taguig City, Manila</p>
                      <p>Philippines</p>
                    </address>
                  </div>
                  
                  <div>
                    <h5 className="text-accent font-medium mb-2 text-xs">Las Piñas Office</h5>
                    <address className="not-italic text-gray-200 space-y-1 text-xs leading-relaxed">
                      <p>South Park Highs Commercial Complex</p>
                      <p>Alabang–Zapote Rd, Las Piñas</p>
                      <p>1747 Metro Manila</p>
                      <p>Philippines</p>
                    </address>
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-2 mt-4 sm:mt-0 lg:-ml-4">
                  <div>
                    <h5 className="text-accent font-medium mb-2 text-xs">Parañaque Office</h5>
                    <address className="not-italic text-gray-200 space-y-1 text-xs leading-relaxed">
                      <p>Datung Building</p>
                      <p>Wimpex, Parañaque</p>
                      <p>1700 Metro Manila</p>
                      <p>Philippines</p>
                    </address>
                  </div>
                  
                  <div>
                    <h5 className="text-accent font-medium mb-2 text-xs">Singapore Office</h5>
                    <address className="not-italic text-gray-200 space-y-1 text-xs leading-relaxed">
                      <p>32 Pekin Street</p>
                      <p>048762</p>
                      <p>Central Business District</p>
                      <p>Singapore</p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/business-loans" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/salary-loans" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  Salary Loans
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold text-white mt-6 md:mt-8">Solutions</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/technology" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/company" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/employee" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  For Employees
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/mission" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  Careers
                </Link>
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg font-semibold text-white mb-3 md:mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/p/Datung-Financial-Services-61558527307292/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent transition-colors transform hover:scale-110 duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/datung.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent transition-colors transform hover:scale-110 duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/datung" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent transition-colors transform hover:scale-110 duration-200"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
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