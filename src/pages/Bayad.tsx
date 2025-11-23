import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, Banknote, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Bayad() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thanks! We'll notify you when Datung Bayad launches in your area.");
    setPhoneNumber("");
    setLocation("");
    setIsSubmitting(false);
  };

  const scrollToForm = () => {
    document.getElementById('availability-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Walang Cash? Offline ang ATM?<br />
            <span className="text-[#00C853]">Skip the Line.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-normal">
            Withdraw cash from trusted Gas Stations & Stores near you.<br />
            No lines. 100% sure cash.
          </p>
          
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="w-full md:w-auto bg-[#00C853] hover:bg-[#00A843] text-white font-bold text-lg px-12 py-7 rounded-lg shadow-2xl"
          >
            CHECK AVAILABILITY IN MY AREA
          </Button>
          
          <p className="text-white/60 text-sm mt-4">
            Powered by Datung Lending
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-sans font-bold text-3xl md:text-5xl text-center mb-16 text-gray-900">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-[#0056D2] rounded-full flex items-center justify-center shadow-lg">
                <Phone className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="font-sans font-bold text-xl md:text-2xl mb-3 text-gray-900">
                1. Book
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Reserve cash on your phone
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-[#0056D2] rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="font-sans font-bold text-xl md:text-2xl mb-3 text-gray-900">
                2. Go
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Walk to a nearby Partner Store (Gas Station, Bakery)
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-[#00C853] rounded-full flex items-center justify-center shadow-lg">
                <Banknote className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="font-sans font-bold text-xl md:text-2xl mb-3 text-gray-900">
                3. Get Cash
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Scan QR, get cash
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Form Section */}
      <section id="availability-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-[#0056D2] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4 text-center">
              Be the First to Know
            </h2>
            <p className="text-white/90 text-center mb-8 text-lg">
              Enter your details and we'll notify you when Datung Bayad launches in your area.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm">
                  Mobile Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="09XX XXX XXXX"
                  className="w-full h-14 text-lg bg-white border-2 border-white/20 focus:border-[#00C853]"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-white font-medium mb-2 text-sm">
                  Your Area (City/Barangay) *
                </label>
                <Input
                  id="location"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Quezon City, Tondo"
                  className="w-full h-14 text-lg bg-white border-2 border-white/20 focus:border-[#00C853]"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00C853] hover:bg-[#00A843] text-white font-bold text-lg h-14 rounded-lg"
              >
                {isSubmitting ? "Checking..." : "NOTIFY ME"}
              </Button>
            </form>
            
            <p className="text-white/70 text-xs text-center mt-6">
              By submitting, you agree to receive updates about Datung Bayad.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <CheckCircle className="w-12 h-12 text-[#00C853] mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">Bank-grade security for all transactions</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 text-[#00C853] mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Verified Partners</h3>
              <p className="text-gray-600 text-sm">Only trusted stores and gas stations</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 text-[#00C853] mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">24/7 Available</h3>
              <p className="text-gray-600 text-sm">Get cash whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Sticky CTA Button (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-2xl md:hidden z-50 border-t-2 border-[#00C853]">
        <Button 
          onClick={scrollToForm}
          className="w-full bg-[#00C853] hover:bg-[#00A843] text-white font-bold text-base h-14 rounded-lg shadow-lg"
        >
          CHECK AVAILABILITY NOW
        </Button>
      </div>
    </div>
  );
}
