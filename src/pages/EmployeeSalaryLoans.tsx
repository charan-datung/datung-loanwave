import { Navbar } from "@/components/Navbar";
import { Seo } from "@/components/Seo";
import { EmployeeHero } from "@/components/salary-loans/EmployeeHero";
import { LoanFeatures } from "@/components/salary-loans/LoanFeatures";
import { Requirements } from "@/components/salary-loans/Requirements";
import { Footer } from "@/components/Footer";

const EmployeeSalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="Quick, Accessible Loans for Employees | Datung"
        description="Salary loans for employees, from ₱11,000 to ₱100,000. Subject to credit approval."
        path="/salary-loans/employee"
      />
      <div 
        className="fixed inset-0 opacity-5 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6')", // Professional employee at desk
        }}
      />
      <Navbar />
      <main>
        <EmployeeHero />
        <LoanFeatures />
        <Requirements />
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeSalaryLoans;