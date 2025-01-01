import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ROICalculator = () => {
  const [employees, setEmployees] = useState(100);
  const [avgSalary, setAvgSalary] = useState(30000);

  const calculateMetrics = () => {
    // Simple calculations for demonstration
    const productivityGain = (employees * avgSalary * 0.05).toFixed(2);
    const turnoverSavings = (employees * avgSalary * 0.02).toFixed(2);
    const satisfactionScore = Math.min(((employees * 0.8) / 100 * 100), 100).toFixed(1);
    
    return {
      productivityGain,
      turnoverSavings,
      satisfactionScore
    };
  };

  const metrics = calculateMetrics();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          ROI Calculator
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Calculate the potential impact of our financial wellness program
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <Input
                id="employees"
                type="number"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary">Average Monthly Salary (₱)</Label>
              <Input
                id="salary"
                type="number"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Projected Annual Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Productivity Gains</p>
                    <p className="text-2xl font-bold text-primary">₱{metrics.productivityGain}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Turnover Cost Savings</p>
                    <p className="text-2xl font-bold text-secondary">₱{metrics.turnoverSavings}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Employee Satisfaction</p>
                    <p className="text-2xl font-bold text-accent">{metrics.satisfactionScore}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};