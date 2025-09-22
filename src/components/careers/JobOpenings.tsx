import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const openings = [
  {
    title: "Senior Software Engineer",
    department: "Technology",
    location: "Manila",
    type: "Full-time",
    applicationUrl: "https://careers.datung.com/senior-software-engineer",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Cebu",
    type: "Full-time",
    applicationUrl: "https://careers.datung.com/business-development-manager",
  },
  {
    title: "Customer Success Specialist",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    applicationUrl: "https://careers.datung.com/customer-success-specialist",
  },
];

export const JobOpenings = () => {
  const { toast } = useToast();

  const handleApply = (job: typeof openings[0]) => {
    // Open the application URL in a new tab
    window.open(job.applicationUrl, '_blank');
    
    // Show toast notification
    toast({
      title: "Application Started",
      description: `You're being redirected to apply for the ${job.title} position.`,
    });
  };

  return (
    <section id="job-openings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're looking for exceptional talent to join our mission. 
            Every role at Datung is an opportunity to create meaningful impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {openings.map((job, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{job.department}</span>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full">{job.location}</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full">{job.type}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply(job)}
                  className="w-full group-hover:bg-primary/90"
                  size="lg"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};