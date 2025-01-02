import { Navbar } from "@/components/Navbar";
import { EmployeeHero } from "@/components/salary-loans/EmployeeHero";
import { LoanFeatures } from "@/components/salary-loans/LoanFeatures";
import { Requirements } from "@/components/salary-loans/Requirements";
import { Footer } from "@/components/Footer";

const EmployeeSalaryLoans = () => {
  return (
    <div className="min-h-screen relative">
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