import { Navbar } from "@/components/Navbar";
import { EmployerHero } from "@/components/salary-loans/EmployerHero";
import { EmployerBenefits } from "@/components/salary-loans/EmployerBenefits";
import { EmployerDashboard } from "@/components/salary-loans/EmployerDashboard";
import { FinancialWellness } from "@/components/salary-loans/FinancialWellness";
import { ROICalculator } from "@/components/salary-loans/ROICalculator";

const CompanySalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c')", // Corporate office
        }}
      />
      <Navbar />
      <EmployerHero />
      <EmployerBenefits />
      <EmployerDashboard />
      <FinancialWellness />
      <ROICalculator />
    </div>
  );
};

export default CompanySalaryLoans;