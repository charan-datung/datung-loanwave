
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"; // Import Sonner toaster
import Index from "./pages/Index";
import BusinessLoans from "./pages/BusinessLoans";
import Technology from "./pages/Technology";
import SalaryLoans from "./pages/SalaryLoans";
import CompanySalaryLoans from "./pages/CompanySalaryLoans";
import EmployeeSalaryLoans from "./pages/EmployeeSalaryLoans";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-loans" element={<BusinessLoans />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/salary-loans" element={<SalaryLoans />} />
          <Route path="/salary-loans/company" element={<CompanySalaryLoans />} />
          <Route path="/salary-loans/employee" element={<EmployeeSalaryLoans />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
