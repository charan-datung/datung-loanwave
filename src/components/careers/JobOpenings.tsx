import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const openings = [
  {
    title: "Head of Risk & Compliance",
    department: "Leadership",
    location: "Hybrid",
    type: "Full-time",
    hasDialog: "risk",
  },
  {
    title: "Collection Officer",
    department: "Operations",
    location: "Parañaque (On-site)",
    type: "Full-time",
    hasDialog: "collection",
  },
  {
    title: "UI UX Developer",
    department: "Technology",
    location: "Manila",
    type: "Full-time",
    hasDialog: "uiux",
    jobstreetUrl: "https://ph.jobstreet.com/job/90920484?ref=hirer-success-posting",
  },
  {
    title: "Senior Loan Officer",
    department: "Operations",
    location: "Manila",
    type: "Full-time",
    hasDialog: "seniorloan",
    jobstreetUrl: "https://ph.jobstreet.com/job/90921130?ref=hirer-success-posting",
  },
  {
    title: "Collections Specialist (Outbound Calling)",
    department: "Operations",
    location: "Manila",
    type: "Full-time",
    hasDialog: "collectionsspecialist",
    jobstreetUrl: "https://ph.jobstreet.com/job/90921588?ref=hirer-success-posting",
  },
  {
    title: "Psychology / Sociology Intern",
    department: "Research",
    location: "Manila",
    type: "Internship",
    hasDialog: "intern",
    jobstreetUrl: "https://ph.jobstreet.com/job/90923027?ref=hirer-success-posting",
  },
];

type DialogKey = "risk" | "collection" | "uiux" | "seniorloan" | "collectionsspecialist" | "intern" | null;

const JobDialog = ({ dialogKey, open, onOpenChange }: { dialogKey: DialogKey; open: boolean; onOpenChange: (v: boolean) => void }) => {
  const job = openings.find(j => j.hasDialog === dialogKey);
  if (!dialogKey || !job) return null;

  const content: Record<string, { description: string; qualifications: string[]; jobstreetUrl?: string }> = {
    risk: {
      description: "",
      qualifications: [],
    },
    collection: {
      description: "This is a full-time on-site role for a Collections Officer based in Parañaque. The Collections Officer is responsible for managing and executing debt collection activities, analyzing financial data, and providing excellent customer service. The role includes communicating with clients regarding overdue payments, negotiating payment plans, and maintaining accurate records of collection activities.",
      qualifications: [
        "Debt Collection skills and experience",
        "Analytical Skills and proficiency in financial analysis",
        "Customer Service skills and a strong communication ability",
        "Knowledge of Finance principles",
        "Excellent interpersonal skills",
        "Ability to work independently and as part of a team",
        "Experience in the microfinance or banking sector is a plus",
        "Bachelor's degree in Finance, Accounting, Business, or related field",
      ],
      jobstreetUrl: "https://ph.jobstreet.com/job/87605531",
    },
    uiux: {
      description: "This is a full-time role for a UI/UX Developer based in Manila. The UI/UX Developer will be responsible for designing and implementing intuitive, user-friendly interfaces for Datung's digital lending platform. The role involves collaborating with product and engineering teams to create seamless user experiences that serve underserved small businesses across Southeast Asia.",
      qualifications: [
        "Strong proficiency in UI/UX design principles and best practices",
        "Experience with design tools such as Figma, Sketch, or Adobe XD",
        "Proficiency in front-end development (HTML, CSS, JavaScript, React)",
        "Understanding of responsive design and mobile-first approaches",
        "Strong portfolio demonstrating user-centered design solutions",
        "Excellent communication and collaboration skills",
        "Ability to translate complex requirements into intuitive interfaces",
        "Experience in fintech or financial services is a plus",
      ],
      jobstreetUrl: "https://ph.jobstreet.com/job/90920484?ref=hirer-success-posting",
    },
    seniorloan: {
      description: "This is a full-time role for a Senior Loan Officer based in Manila. The Senior Loan Officer will lead loan origination, assessment, and disbursement activities. The role involves evaluating borrower creditworthiness, managing client relationships, mentoring junior loan officers, and ensuring compliance with lending policies and procedures.",
      qualifications: [
        "3+ years of experience in loan processing or microfinance lending",
        "Strong credit assessment and risk evaluation skills",
        "Excellent client relationship management abilities",
        "Leadership and mentoring experience",
        "Knowledge of lending regulations and compliance requirements",
        "Strong analytical and decision-making skills",
        "Experience in microfinance or community lending is a plus",
        "Bachelor's degree in Finance, Business, or related field",
      ],
      jobstreetUrl: "https://ph.jobstreet.com/job/90921130?ref=hirer-success-posting",
    },
    collectionsspecialist: {
      description: "This is a full-time role for a Collections Specialist (Outbound Calling) based in Manila. The Collections Specialist will handle outbound calls to borrowers with overdue payments, negotiate repayment arrangements, and maintain detailed records of all collection activities. The role requires a professional and empathetic approach to debt recovery.",
      qualifications: [
        "Experience in outbound calling or collections",
        "Strong negotiation and persuasion skills",
        "Excellent verbal communication skills",
        "Ability to handle difficult conversations professionally",
        "Proficiency in CRM or collections software",
        "Strong attention to detail and record-keeping",
        "Experience in financial services or lending is a plus",
        "Bachelor's degree in any related field",
      ],
      jobstreetUrl: "https://ph.jobstreet.com/job/90921588?ref=hirer-success-posting",
    },
    intern: {
      description: "This is an internship role for a Psychology / Sociology Intern based in Manila. The intern will support Datung's research initiatives in understanding borrower behavior, community dynamics, and psychometric profiling. The role involves assisting with data collection, analysis, and contributing to the development of innovative credit assessment models.",
      qualifications: [
        "Currently pursuing or recently completed a degree in Psychology, Sociology, or related field",
        "Strong interest in behavioral science and its applications in finance",
        "Basic research and data analysis skills",
        "Excellent written and verbal communication skills",
        "Eagerness to learn and contribute in a fast-paced startup environment",
        "Familiarity with survey design or qualitative research methods is a plus",
        "Interest in financial inclusion and social impact",
      ],
      jobstreetUrl: "https://ph.jobstreet.com/job/90923027?ref=hirer-success-posting",
    },
  };

  // Special render for Risk dialog
  if (dialogKey === "risk") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
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
                <p className="mb-4">At Datung, we're building Southeast Asia's most innovative microfinance platform - AI-powered, community-driven, and trusted by thousands of underserved small businesses. Backed by Google, Nvidia, and top regional VCs, we're scaling fast, and risk has never been more critical.</p>
                <p className="mb-4">We're looking for a Head of Risk & Compliance to lead credit risk, regulatory compliance, and portfolio integrity as we grow from startup to category-definer.</p>
                <p className="mb-4">This role is more than oversight; it's ownership. You'll shape the guardrails that allow us to move fast without breaking things that matter.</p>
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
                <Button onClick={() => window.open('mailto:ceo.office@datung.io', '_blank')} className="mt-4 bg-primary hover:bg-primary/90">Send Application</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const c = content[dialogKey];
  const companyDesc = "Datung is at the forefront of microfinance innovation, utilizing AI, psychometrics, and community dynamics to unlock credit for 42 million underserved small businesses in Southeast Asia. Our work transforms unbanked entrepreneurs into creditworthy borrowers. With backing from Antler, Kaya Founders, Google, and NVIDIA, we operate out of our offices in Singapore and Manila, empowering excluded entrepreneurs to become economic drivers.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{job.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="bg-muted/80 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-foreground">Job Description</h3>
            <div className="space-y-1 text-sm text-foreground">
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
            </div>
          </div>
          <div className="space-y-4 text-foreground">
            <div>
              <h4 className="text-lg font-semibold mb-2">Company Description</h4>
              <p className="mb-4">{companyDesc}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Role Description</h4>
              <p className="mb-4">{c.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Qualifications</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                {c.qualifications.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </div>
            <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg text-center">
              <h4 className="text-lg font-semibold mb-2 text-foreground">Apply now</h4>
              <p className="mb-4 text-foreground">Apply directly on JobStreet or send your application to ceo.office@datung.io</p>
              <div className="flex gap-4 justify-center">
                {c.jobstreetUrl && (
                  <Button onClick={() => window.open(c.jobstreetUrl, '_blank')} className="bg-primary hover:bg-primary/90">Apply on JobStreet</Button>
                )}
                <Button onClick={() => window.open('mailto:ceo.office@datung.io', '_blank')} variant="outline" className="border-primary text-primary hover:bg-primary/10">Send Application</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const JobOpenings = () => {
  const { toast } = useToast();
  const [activeDialog, setActiveDialog] = useState<DialogKey>(null);

  const handleApply = (job: typeof openings[0]) => {
    setActiveDialog(job.hasDialog as DialogKey);
  };

  return (
    <section id="job-openings" className="py-20 bg-gradient-to-br from-gray-50/80 via-white to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">Open Positions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're looking for exceptional talent to join our mission. 
            Every role at Datung is an opportunity to create meaningful impact.
          </p>
          <div className="glass-card p-6 max-w-2xl mx-auto card-3d glow-secondary">
            <p className="text-lg font-medium mb-4">Ready to join our team?</p>
            <p className="text-muted-foreground mb-4">
              Send your application and CV to:{" "}
              <a href="mailto:ceo.office@datung.io" className="text-primary font-medium hover:underline">ceo.office@datung.io</a>
              {" "}or apply on LinkedIn
            </p>
            <Button onClick={() => window.open('mailto:ceo.office@datung.io', '_blank')} className="bg-primary hover:bg-primary/90">Send Application</Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {openings.map((job, index) => (
            <Card key={index} className="glass-card group card-3d">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{job.department}</span>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full">{job.location}</span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full">{job.type}</span>
                  </div>
                </div>
                <Button onClick={() => handleApply(job)} className="w-full group-hover:bg-primary/90" size="lg">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <JobDialog dialogKey={activeDialog} open={activeDialog !== null} onOpenChange={(v) => { if (!v) setActiveDialog(null); }} />
      </div>
    </section>
  );
};

  return (
    <section id="job-openings" className="py-20 bg-gradient-to-br from-gray-50/80 via-white to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">Open Positions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're looking for exceptional talent to join our mission. 
            Every role at Datung is an opportunity to create meaningful impact.
          </p>
          
          {/* Call to Action */}
          <div className="glass-card p-6 max-w-2xl mx-auto card-3d glow-secondary">
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
            <Card key={index} className="glass-card group card-3d">
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
                  {["Head of Risk & Compliance", "Collection Officer", "Accountant"].includes(job.title) ? "View Details" : "Apply Now"}
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

        {/* Collection Officer Dialog */}
        <Dialog open={showCollectionDialog} onOpenChange={setShowCollectionDialog}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">Collection Officer</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="bg-muted/80 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-foreground">Job Description</h3>
                <div className="space-y-1 text-sm text-foreground">
                  <p><strong>Location:</strong> Parañaque (On-site)</p>
                  <p><strong>Type:</strong> Full-Time</p>
                </div>
              </div>

              <div className="space-y-4 text-foreground">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Company Description</h4>
                  <p className="mb-4">
                    Datung is at the forefront of microfinance innovation, utilizing AI, psychometrics, and community dynamics to unlock credit for 42 million underserved small businesses in Southeast Asia. Our work transforms unbanked entrepreneurs into creditworthy borrowers. With backing from Antler, Kaya Founders, Google, and NVIDIA, we operate out of our offices in Singapore and Manila, empowering excluded entrepreneurs to become economic drivers.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Role Description</h4>
                  <p className="mb-4">
                    This is a full-time on-site role for a Collections Officer based in Parañaque. The Collections Officer is responsible for managing and executing debt collection activities, analyzing financial data, and providing excellent customer service. The role includes communicating with clients regarding overdue payments, negotiating payment plans, and maintaining accurate records of collection activities.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Qualifications</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Debt Collection skills and experience</li>
                    <li>Analytical Skills and proficiency in financial analysis</li>
                    <li>Customer Service skills and a strong communication ability</li>
                    <li>Knowledge of Finance principles</li>
                    <li>Excellent interpersonal skills</li>
                    <li>Ability to work independently and as part of a team</li>
                    <li>Experience in the microfinance or banking sector is a plus</li>
                    <li>Bachelor's degree in Finance, Accounting, Business, or related field</li>
                  </ul>
                </div>

                <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg text-center">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Apply now</h4>
                  <p className="mb-4 text-foreground">Apply directly on JobStreet or send your application to ceo.office@datung.io</p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => window.open('https://ph.jobstreet.com/job/87605531', '_blank')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Apply on JobStreet
                    </Button>
                    <Button 
                      onClick={() => window.open('mailto:ceo.office@datung.io', '_blank')}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Send Application
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Accountant Dialog */}
        <Dialog open={showAccountantDialog} onOpenChange={setShowAccountantDialog}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">Accountant</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="bg-muted/80 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-foreground">Job Description</h3>
                <div className="space-y-1 text-sm text-foreground">
                  <p><strong>Location:</strong> Manila</p>
                  <p><strong>Type:</strong> Full-Time</p>
                </div>
                <h4 className="font-semibold mt-3 mb-2 text-foreground">About the job</h4>
              </div>

              <div className="space-y-4 text-foreground">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Company Description</h4>
                  <p className="mb-4">
                    Datung is reshaping the future of microfinance through AI and community-driven initiatives. By leveraging deep tech, psychometrics, and group dynamics, we provide credit to 42 million underserved small businesses across Southeast Asia. Supported by Antler, Kaya Founders, Google, and NVIDIA, Datung operates from offices in Singapore and Manila. We are dedicated to turning excluded entrepreneurs into empowered economic drivers.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Role Description</h4>
                  <p className="mb-4">
                    This is a full-time, on-site Accountant role based in Parañaque. The Accountant will be responsible for managing financial records, preparing financial statements, ensuring compliance with relevant regulations, and conducting financial analysis. Day-to-day tasks include bookkeeping, budgeting, and conducting audits to maintain financial accuracy and integrity.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Qualifications</h4>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Proficiency in bookkeeping and managing financial records</li>
                    <li>Experience in preparing financial statements and reports</li>
                    <li>Strong understanding of regulatory compliance and financial regulations</li>
                    <li>Ability to conduct thorough financial analysis and budgeting</li>
                    <li>Attention to detail and strong organizational skills</li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>Bachelor's degree in Accounting, Finance, or a related field</li>
                    <li>CPA certification is a plus</li>
                  </ul>
                </div>

                <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg text-center">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Apply now</h4>
                  <p className="mb-4 text-foreground">Apply directly on LinkedIn or send your application to ceo.office@datung.io</p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => window.open('https://www.linkedin.com/jobs/view/4303863369', '_blank')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Apply on LinkedIn
                    </Button>
                    <Button 
                      onClick={() => window.open('mailto:ceo.office@datung.io', '_blank')}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Send Application
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};