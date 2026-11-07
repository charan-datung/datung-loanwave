import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import discovery from "@/data/business-loan-discovery.json";

export const BusinessLoanDiscovery = () => (
  <section aria-labelledby="business-financing-questions" className="bg-background py-16 md:py-24">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 id="business-financing-questions" className="text-3xl font-medium text-foreground mb-10">Business financing questions</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Can a business owner apply without collateral?</h3>
            <p className="text-muted-foreground leading-relaxed">Yes. {discovery.eligibility}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-foreground mb-3">Where do I apply?</h3>
            <p className="text-muted-foreground leading-relaxed">Complete your loan application on Datungapply. Applications are reviewed before a lending decision is made.</p>
            <Button asChild className="mt-5">
              <a href={discovery.applicationUrl}>Apply online <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
          <p className="text-muted-foreground leading-relaxed">Datung is the operating brand of Dark Knight Lending, Inc. <a className="text-primary underline underline-offset-4" href="/company-facts.html">Read our company facts and SEC details</a>.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-foreground mb-3">What does your business need to finance?</h3>
          <ul className="divide-y divide-border">
            {discovery.guides.map((guide) => (
              <li key={guide.path} className="py-4">
                <a href={guide.path} className="flex items-center justify-between gap-4 text-primary underline underline-offset-4">
                  {guide.title}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
          <a href="/financing-guides.html" className="inline-block mt-5 text-primary underline underline-offset-4">All business financing guides</a>
        </div>
      </div>
    </div>
  </section>
);