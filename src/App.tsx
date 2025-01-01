import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BusinessLoans from "./pages/BusinessLoans";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/business-loans" element={<BusinessLoans />} />
      </Routes>
    </Router>
  );
}

export default App;