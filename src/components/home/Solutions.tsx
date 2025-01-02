import { Building2, Users, Computer } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/ServiceCard";

export const Solutions = () => {
  return (
    <section className="py-20 bg-white relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">Our Solutions</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Empowering Filipino entrepreneurs and professionals with innovative financial solutions
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/business-loans">
            <ServiceCard
              title="Business Loans"
              description="Tech-enabled MSME financing with our innovative JAG model and AI-powered assessment for Filipino entrepreneurs."
              icon={Building2}
            />
          </Link>
          <Link to="/salary-loans">
            <ServiceCard
              title="Salary Loans"
              description="Employee loan management and HR technology solutions for Filipino workplaces and professionals."
              icon={Users}
            />
          </Link>
          <Link to="/technology">
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