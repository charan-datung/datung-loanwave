
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/datung-logo-footer.png" 
                alt="Datung Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-lg font-semibold">Datung Pte Ltd</h3>
            </div>
            <address className="not-italic text-gray-300 space-y-1 text-sm">
              <p>One Global Place</p>
              <p>Bonifacio Global City</p>
              <p>Taguig City</p>
              <p>Manila</p>
              <p>Philippines</p>
            </address>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/business-loans" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link to="/salary-loans" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Salary Loans
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/technology" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/company" className="text-gray-300 hover:text-white transition-colors text-sm">
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/salary-loans/employee" className="text-gray-300 hover:text-white transition-colors text-sm">
                  For Employees
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mission" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-300">
          <p className="text-sm">© {new Date().getFullYear()} Datung Pte Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
