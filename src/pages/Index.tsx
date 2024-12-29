import { Building2, Users, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Empowering Financial Growth in the Philippines
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Providing innovative financial solutions for businesses and individuals through microfinancing, salary loans, and advanced lending software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg">Apply for a Loan</Button>
            <Button size="lg" variant="outline" className="text-lg">Explore Solutions</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Microfinancing"
              description="Empower your small business with flexible microfinancing solutions tailored to your growth needs."
              icon={Building2}
            />
            <ServiceCard
              title="Salary Loans"
              description="Quick and accessible salary loans for employees, teachers, and workforce members."
              icon={Users}
            />
            <ServiceCard
              title="Lending Software"
              description="Advanced loan underwriting and credit assessment software for modern lending operations."
              icon={LineChart}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Contact us today to learn more about our financial solutions and how we can help you achieve your goals.
            </p>
            <Button size="lg" className="text-lg">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Datung</h3>
              <p className="text-gray-300">
                Innovative financial solutions for a better future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Microfinancing</li>
                <li>Salary Loans</li>
                <li>Lending Software</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@datung.com</li>
                <li>+63 XXX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-300">
            <p>&copy; 2024 Datung. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;