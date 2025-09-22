import { Building2, Users, Computer } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard";
import businessLoansBg from "@/assets/business-loans-bg-new.jpg";
import salaryLoansBg from "@/assets/salary-loans-bg.jpg";
import technologyBg from "@/assets/technology-solutions-bg.jpg";

export const Solutions = () => {
  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 text-primary">Our Solutions</h2>
        <p className="text-sm md:text-base text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          We have empowered <span className="font-bold text-primary">thousands</span> of Filipino entrepreneurs and professionals with innovative financial solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-none mx-auto">
          <Link to="/business-loans" className="group">
            <ServiceCard
              title="Business Loans"
              description="Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment for Filipino entrepreneurs."
              backgroundImage={businessLoansBg}
            />
          </Link>
          <Link to="/salary-loans" className="group">
            <ServiceCard
              title="Salary Loans"
              description="Employee loan management and HR technology solutions for Filipino workplaces and professionals."
              backgroundImage={salaryLoansBg}
            />
          </Link>
          <Link to="/technology" className="group">
            <ServiceCard
              title="Technology Solutions"
              description="Advanced loan underwriting and credit assessment powered by AI, tailored for the Philippine market."
              backgroundImage={technologyBg}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};