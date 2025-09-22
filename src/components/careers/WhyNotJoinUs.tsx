import { AlertTriangle, Coffee, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyNotJoinUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary animate-float">
              🙃 Why you should NOT join Datung
            </h2>
            <p className="text-xl text-muted-foreground">
              We'll be honest — Datung is not for everyone.
            </p>
          </div>

          {/* Main content card */}
          <Card className="glass-card mb-12 card-3d">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-8 text-center text-muted-foreground">
                We're an early-stage, AI-first fintech startup rewriting the rules of microfinance. 
                That means things move fast, break occasionally, and rarely follow a playbook.
              </p>

              <div className="text-center mb-8">
                <p className="text-xl font-semibold text-primary mb-6">
                  But if you're still reading, maybe you're our kind of crazy:
                </p>
              </div>

              {/* Checklist items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Hate slow decisions and legacy systems?</strong> Same here.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Live for precision, structure, and smooth loan operations?</strong> We've got work to do.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Thrive in environments where initiative is rewarded?</strong> You'll fit right in.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Want your work to actually matter?</strong> Every loan processed is a lifeline to a real small business.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Need polished processes and perfect tools?</strong> Not yet. Come help us build them.
                  </p>
                </div>
              </div>

              {/* Culture values */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <Zap className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-medium">
                    We're obsessed with impact and allergic to BS.
                  </p>
                </div>
                <div className="text-center p-6 bg-secondary/5 rounded-lg">
                  <Coffee className="w-8 h-8 mx-auto mb-4 text-secondary" />
                  <p className="text-lg font-medium">
                    We celebrate wins, own our losses, and back each other up.
                  </p>
                </div>
              </div>

              {/* Final message */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-lg font-medium">
                    If you need full structure, mature systems, or a big team under you from day one, this isn't it.
                  </p>
                </div>
                <p className="text-lg text-primary font-semibold pl-10">
                  But if you're excited by building from zero, making tough calls, and ensuring impact at scale, read on.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};