import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 77, 77, 0.95), rgba(0, 179, 122, 0.9)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')`,
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Grow Your 
              <span className="block text-transparent bg-gradient-to-r from-accent via-white to-accent bg-clip-text">
                Business Dreams?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Join over 10,000 Filipino entrepreneurs who have transformed their businesses with our support
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="p-2 bg-accent/20 rounded-full">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <span className="text-white font-semibold">10,000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="p-2 bg-accent/20 rounded-full">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <span className="text-white font-semibold">₱2B+ Loans Disbursed</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="p-2 bg-accent/20 rounded-full">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <span className="text-white font-semibold">99.2% Success Rate</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <ContactForm 
              defaultType="loan"
              triggerComponent={
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-12 py-4 text-xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 group">
                  Start Your Application Today
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              }
            />
            <p className="text-white/80 text-sm">
              Free consultation • No hidden fees • Quick approval
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};