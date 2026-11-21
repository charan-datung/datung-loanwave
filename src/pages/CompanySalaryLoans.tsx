import { Navbar } from "@/components/Navbar";
import { Seo } from "@/components/Seo";
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
        title="Empower Your Workforce | Datung"
        description="Salary loans for employees, from ₱11,000 to ₱100,000. Subject to credit approval."
        path="/salary-loans/company"
      />
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c')", // Modern corporate office
        }}
      />
      <Navbar />
      <main>
        <EmployerHero />
        <EmployerBenefits />
        <EmployerDashboard />
        <FinancialWellness />
        <ROICalculator />
      </main>
      <Footer />
    </div>
  );
};

export default CompanySalaryLoans;