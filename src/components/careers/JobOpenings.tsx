import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const openings = [
  {
    title: "Loan Officer",
    department: "Operations",
    location: "Manila",
    type: "Full-time",
    applicationUrl: "https://www.linkedin.com/jobs/view/4303619422",
  },
  {
    title: "Collection Officer",
    department: "Operations",
    location: "Manila",
    type: "Full-time",
    applicationUrl: "https://www.linkedin.com/jobs/view/4303399768",
  },
  {
    title: "Accountant",
    department: "Finance",
    location: "Manila",
    type: "Full-time",
    applicationUrl: "https://www.linkedin.com/jobs/view/4303633252",
  },
  {
    title: "Chief of Staff",
    department: "Leadership",
    location: "Manila",
    type: "Full-time",
    applicationUrl: "https://careers.datung.com/chief-of-staff",
  },
  {
    title: "Head of Risk & Compliance",
    department: "Risk & Compliance",
    location: "Hybrid",
    type: "Full-time",
    applicationUrl: "https://careers.datung.com/head-of-risk-compliance",
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're looking for exceptional talent to join our mission. 
            Every role at Datung is an opportunity to create meaningful impact.
          </p>
          
          {/* Call to Action */}
          <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-4">Ready to join our team?</p>
            <p className="text-muted-foreground mb-4">
              Send your application and CV to:{" "}
              <a 
                href="mailto:ceo.office@datung.io" 
                className="text-primary font-medium hover:underline"
              >
                ceo.office@datung.io
              </a>
              {" "}or apply on LinkedIn
            </p>
            <Button 
              onClick={() => window.open('mailto:ceo.office@datung.io', '_blank')}
              className="bg-primary hover:bg-primary/90"
            >
              Send Application
            </Button>
          </div>
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