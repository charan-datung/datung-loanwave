
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/datung-logo-footer.png" 
                alt="Datung Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">Datung Pte Ltd</h3>
                <p className="text-gray-200 text-sm font-medium">Borrow. Belong. Beyond.</p>
              </div>
            </div>
            
            {/* Addresses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Philippines Office</h4>
                <address className="not-italic text-gray-200 space-y-1 text-sm leading-relaxed">
                  <p>One Global Place</p>
                  <p>Bonifacio Global City</p>
                  <p>Taguig City, Manila</p>
                  <p>Philippines</p>
                </address>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm">Singapore Office</h4>
                <address className="not-italic text-gray-200 space-y-1 text-sm leading-relaxed">
                  <p>32 Pekin Street</p>
                  <p>048762</p>
                  <p>Central Business District</p>
                  <p>Singapore</p>
                </address>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-3">
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
            
            <h3 className="text-lg font-semibold text-white mt-8">Solutions</h3>
            <ul className="space-y-3">
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

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mission" className="text-gray-200 hover:text-accent transition-colors text-sm hover:translate-x-1 transform duration-200 inline-block">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8"></div>
        
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
