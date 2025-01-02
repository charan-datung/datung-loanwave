import { EmployerHero } from "@/components/salary-loans/EmployerHero";
import { EmployerBenefits } from "@/components/salary-loans/EmployerBenefits";
import { EmployerDashboard } from "@/components/salary-loans/EmployerDashboard";
import { FinancialWellness } from "@/components/salary-loans/FinancialWellness";
import { ROICalculator } from "@/components/salary-loans/ROICalculator";

const CompanySalaryLoans = () => {
  return (
    <div className="min-h-screen">
      <EmployerHero />
      <EmployerBenefits />
      <EmployerDashboard />
      <FinancialWellness />
      <ROICalculator />
    </div>
  );
};

export default CompanySalaryLoans;