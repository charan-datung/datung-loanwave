import { CreditCard, Clock, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LoanFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Loan Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                Flexible Amount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Borrow ₱5,000 to ₱50,000 based on your business needs
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-secondary" />
                Quick Release
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get your loan within 3 days after approval
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-accent" />
                No Collateral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                No need for property or vehicle collateral
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};