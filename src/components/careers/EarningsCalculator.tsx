import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const EarningsCalculator = () => {
  const [referrals, setReferrals] = useState(5);
  const [avgLoanSize, setAvgLoanSize] = useState(100000);
  
  const calculateEarnings = () => {
    const commissionRate = 0.02; // 2% commission
    const monthlyEarnings = (referrals * avgLoanSize * commissionRate).toFixed(2);
    const annualEarnings = (referrals * 12 * avgLoanSize * commissionRate).toFixed(2);
    
    return {
      monthlyEarnings,
      annualEarnings,
    };
  };

  const earnings = calculateEarnings();

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Ambassador Earnings Calculator
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Calculate your potential earnings as a Datung Ambassador
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="referrals">Monthly Referrals</Label>
              <Input
                id="referrals"
                type="number"
                value={referrals}
                onChange={(e) => setReferrals(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loanSize">Average Loan Size (₱)</Label>
              <Input
                id="loanSize"
                type="number"
                value={avgLoanSize}
                onChange={(e) => setAvgLoanSize(Number(e.target.value))}
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Potential Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Monthly Earnings</p>
                  <p className="text-2xl font-bold text-primary">₱{earnings.monthlyEarnings}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Annual Earnings</p>
                  <p className="text-2xl font-bold text-secondary">₱{earnings.annualEarnings}</p>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                  *Based on 2% commission rate. Actual earnings may vary.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};