import { Navbar } from "@/components/Navbar";
import { EmployerHero } from "@/components/salary-loans/EmployerHero";
import { EmployerBenefits } from "@/components/salary-loans/EmployerBenefits";
import { EmployerDashboard } from "@/components/salary-loans/EmployerDashboard";
import { FinancialWellness } from "@/components/salary-loans/FinancialWellness";
import { ROICalculator } from "@/components/salary-loans/ROICalculator";
import { Footer } from "@/components/Footer";

const CompanySalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="Employee Salary Loan Benefits for Companies Philippines | Datung"
        description="Offer employees zero-cost salary loans as a financial wellness benefit. Boost retention and productivity in the Philippines. Fully managed by Datung."
        path="/salary-loans/company"
        keywords="employee benefit Philippines, salary loan for companies, financial wellness Philippines, HR benefits"
      />
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c')", // Modern corporate office
        }}
      />
      <Navbar />
      <EmployerHero />
      <EmployerBenefits />
      <EmployerDashboard />
      <FinancialWellness />
      <ROICalculator />
      <Footer />
    </div>
  );
};

export default CompanySalaryLoans;