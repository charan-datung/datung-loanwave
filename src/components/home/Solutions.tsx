import { Building2, Users, Computer } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard";

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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Our Solutions</h2>
        <p className="text-sm md:text-base text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Empowering Filipino entrepreneurs and professionals with innovative financial solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-none mx-auto">
          <Link to="/business-loans" className="group">
            <ServiceCard
              title="Business Loans"
              description="Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment for Filipino entrepreneurs."
              icon={Building2}
            />
          </Link>
          <Link to="/salary-loans" className="group">
            <ServiceCard
              title="Salary Loans"
              description="Employee loan management and HR technology solutions for Filipino workplaces and professionals."
              icon={Users}
            />
          </Link>
          <Link to="/technology" className="group">
            <ServiceCard
              title="Technology Solutions"
              description="Advanced loan underwriting and credit assessment powered by AI, tailored for the Philippine market."
              icon={Computer}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};