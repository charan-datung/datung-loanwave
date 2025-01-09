import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const openings = [
  {
    title: "Senior Software Engineer",
    department: "Technology",
    location: "Manila",
    type: "Full-time",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Cebu",
    type: "Full-time",
  },
  {
    title: "Customer Success Specialist",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
  },
];

export const JobOpenings = () => {
  return (
    <section id="openings" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our team and make a difference in the lives of millions
          </p>
        </div>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {openings.map((job, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                    </div>
                    <div className="text-gray-600">
                      {job.department} · {job.location} · {job.type}
                    </div>
                  </div>
                  <Button className="md:self-center">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};