import { Navbar } from "@/components/Navbar";
import { EmployeeHero } from "@/components/salary-loans/EmployeeHero";
import { LoanFeatures } from "@/components/salary-loans/LoanFeatures";
import { Requirements } from "@/components/salary-loans/Requirements";

const EmployeeSalaryLoans = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EmployeeHero />
      <LoanFeatures />
      <Requirements />
    </div>
  );
};

export default EmployeeSalaryLoans;