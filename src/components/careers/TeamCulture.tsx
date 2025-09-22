import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export const TeamCulture = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Culture Content */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our culture is built on innovation, collaboration, and the shared mission 
              to make financial services accessible to everyone. We move fast, think big, 
              and celebrate wins together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactForm 
                defaultType="partnership"
                triggerComponent={
                  <Button size="lg" className="text-lg px-8 py-3">
                    Join Our Team
                  </Button>
                }
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3"
                onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};