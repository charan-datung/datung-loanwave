import { EmployerHero } from "@/components/salary-loans/EmployerHero";
import { EmployerBenefits } from "@/components/salary-loans/EmployerBenefits";
import { EmployerDashboard } from "@/components/salary-loans/EmployerDashboard";
import { FinancialWellness } from "@/components/salary-loans/FinancialWellness";
import { EmployeeHero } from "@/components/salary-loans/EmployeeHero";
import { LoanFeatures } from "@/components/salary-loans/LoanFeatures";
import { Requirements } from "@/components/salary-loans/Requirements";
import { ROICalculator } from "@/components/salary-loans/ROICalculator";

const SalaryLoans = () => {
  return (
    <div className="min-h-screen">
      {/* Employer Section */}
      <EmployerHero />
      <EmployerBenefits />
      <EmployerDashboard />
      <FinancialWellness />
      
      {/* Employee Section */}
      <EmployeeHero />
      <LoanFeatures />
      <Requirements />
      <ROICalculator />
    </div>
  );
};

export default SalaryLoans;