import { Navbar } from "@/components/Navbar";
import { EmployeeHero } from "@/components/salary-loans/EmployeeHero";
import { LoanFeatures } from "@/components/salary-loans/LoanFeatures";
import { Requirements } from "@/components/salary-loans/Requirements";

const EmployeeSalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')", // Professional workers
        }}
      />
      <Navbar />
      <EmployeeHero />
      <LoanFeatures />
      <Requirements />
    </div>
  );
};

export default EmployeeSalaryLoans;