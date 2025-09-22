import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

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
    department: "Leadership",
    location: "Hybrid",
    type: "Full-time",
    applicationUrl: "https://careers.datung.com/head-of-risk-compliance",
  },
];

export const JobOpenings = () => {
  const { toast } = useToast();
  const [showRiskDialog, setShowRiskDialog] = useState(false);

  const handleApply = (job: typeof openings[0]) => {
    if (job.title === "Head of Risk & Compliance") {
      setShowRiskDialog(true);
      return;
    }
    
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
                  {job.title === "Head of Risk & Compliance" ? "View Details" : "Apply Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Head of Risk & Compliance Dialog */}
        <Dialog open={showRiskDialog} onOpenChange={setShowRiskDialog}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">Head of Risk & Compliance</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="bg-muted/80 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-foreground">Job Description</h3>
                <div className="space-y-1 text-sm text-foreground">
                  <p><strong>Location:</strong> Metro Manila (Hybrid)</p>
                  <p><strong>Seniority Level:</strong> Director / Senior Management</p>
                  <p><strong>Type:</strong> Full-Time</p>
                  <p><strong>Start Date:</strong> ASAP</p>
                </div>
              </div>

              <div className="space-y-4 text-foreground">
                <div>
                  <p className="text-lg font-medium mb-2">🚀 Are you ready to lead risk and compliance for the future of microfinance?</p>
                  <p className="mb-4">
                    At Datung, we're building Southeast Asia's most innovative microfinance platform - AI-powered, community-driven, and trusted by thousands of underserved small businesses. Backed by Google, Nvidia, and top regional VCs, we're scaling fast, and risk has never been more critical.
                  </p>
                  <p className="mb-4">
                    We're looking for a Head of Risk & Compliance to lead credit risk, regulatory compliance, and portfolio integrity as we grow from startup to category-definer.
                  </p>
                  <p className="mb-4">
                    This role is more than oversight; it's ownership. You'll shape the guardrails that allow us to move fast without breaking things that matter.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">🙃 Why you should NOT join Datung</h4>
                  <p className="mb-4">We'll be honest — Datung is not for everyone.</p>
                  <p className="mb-4">
                    We're an early-stage, AI-first fintech startup rewriting the rules of microfinance. That means things move fast, break occasionally, and rarely follow a playbook.
                  </p>
                  <p className="mb-2">But if you're still reading, maybe you're our kind of crazy:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Hate slow decisions and legacy systems? Same here.</li>
                    <li>Live for precision, structure, and smooth loan operations? We've got work to do.</li>
                    <li>Thrive in environments where initiative is rewarded? You'll fit right in.</li>
                    <li>Want your work to actually matter? Every loan processed is a lifeline to a real small business.</li>
                    <li>Need polished processes and perfect tools? Not yet. Come help us build them.</li>
                  </ul>
                  <p className="mb-4">
                    We're obsessed with impact and allergic to BS.<br/>
                    We celebrate wins, own our losses, and back each other up.
                  </p>
                  <p className="mb-4">
                    If you need full structure, mature systems, or a big team under you from day one, this isn't it.<br/>
                    But if you're excited by building from zero, making tough calls, and ensuring impact at scale, read on.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">🎯 What you'll own</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Lead the development and execution of Datung's risk and compliance strategy</li>
                    <li>Own our regulatory relationship with the SEC and other local agencies</li>
                    <li>Oversee credit risk frameworks across our AI-powered Joint Accountability Group (JAG) lending model</li>
                    <li>Design and implement internal compliance protocols, documentation, and audits</li>
                    <li>Track and manage portfolio performance, flag early warning signs, and guide recovery actions</li>
                    <li>Collaborate with Product, Ops, and Data teams to integrate risk into every layer of the business</li>
                    <li>Prepare reports and briefings for investors, regulators, and the board</li>
                    <li>Stay on top of regulatory trends and propose proactive adjustments to keep us ahead</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">👀 You might be a fit if you…</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Have 6–10+ years of experience in risk, credit, or compliance in banking, fintech, lending, or microfinance</li>
                    <li>Have worked closely with financial regulators in the Philippines (SEC, BSP, etc.)</li>
                    <li>Can build systems from scratch and scale them as the company grows</li>
                    <li>Have strong judgment - you know how to balance compliance with commercial velocity</li>
                    <li>Are detail-obsessed but not afraid of ambiguity</li>
                    <li>Want your work to directly shape the financial future of millions</li>
                  </ul>
                </div>

                <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg text-center">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">📩 Apply now</h4>
                  <p className="mb-4 text-foreground">Send your resume and application to ceo.office@datung.io</p>
                  <p className="font-medium text-foreground">Help us build a future where credit works for everyone.</p>
                  <Button 
                    onClick={() => window.open('mailto:ceo.office@datung.io', '_blank')}
                    className="mt-4 bg-primary hover:bg-primary/90"
                  >
                    Send Application
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};