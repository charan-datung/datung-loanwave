import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessLoans from "./pages/BusinessLoans";
import Technology from "./pages/Technology";
import SalaryLoans from "./pages/SalaryLoans";
import CompanySalaryLoans from "./pages/CompanySalaryLoans";
import EmployeeSalaryLoans from "./pages/EmployeeSalaryLoans";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/business-loans" element={<BusinessLoans />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/salary-loans" element={<SalaryLoans />} />
        <Route path="/salary-loans/company" element={<CompanySalaryLoans />} />
        <Route path="/salary-loans/employee" element={<EmployeeSalaryLoans />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;