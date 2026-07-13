import { Navbar } from "@/components/Navbar";
import { EmployeeHero } from "@/components/salary-loans/EmployeeHero";
import { LoanFeatures } from "@/components/salary-loans/LoanFeatures";
import { Requirements } from "@/components/salary-loans/Requirements";
import { Footer } from "@/components/Footer";

const EmployeeSalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="Employee Salary Loan Philippines — Fast Cash for Workers | Datung"
        description="Quick and affordable salary loans for Filipino employees. 48-hour approval, competitive interest, flexible terms via your employer partnership with Datung."
        path="/salary-loans/employee"
        keywords="employee salary loan Philippines, payroll loan, quick cash loan, salary advance Philippines"
      />
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6')", // Professional employee at desk
        }}
      />
      <Navbar />
      <EmployeeHero />
      <LoanFeatures />
      <Requirements />
      <Footer />
    </div>
  );
};

export default EmployeeSalaryLoans;