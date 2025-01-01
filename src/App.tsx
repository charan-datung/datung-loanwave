import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessLoans from "./pages/BusinessLoans";
import Technology from "./pages/Technology";
import SalaryLoans from "./pages/SalaryLoans";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/business-loans" element={<BusinessLoans />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/salary-loans" element={<SalaryLoans />} />
      </Routes>
    </Router>
  );
}

export default App;