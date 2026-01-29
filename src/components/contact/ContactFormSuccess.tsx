import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactFormSuccessProps {
  onClose: () => void;
}

export const ContactFormSuccess = ({ onClose }: ContactFormSuccessProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-10 h-10 text-accent" />
      </div>
      
      <h3 className="text-2xl font-semibold text-white mb-3">
        Thank You!
      </h3>
      
      <p className="text-white/80 mb-2 text-lg">
        Your inquiry has been submitted successfully.
      </p>
      
      <p className="text-white/60 mb-8 text-sm max-w-sm">
        Our team will review your message and get back to you within 24-48 hours.
      </p>
      
      <Button 
        onClick={onClose}
        className="bg-white hover:bg-white/90 text-primary font-medium px-8"
      >
        Close
      </Button>
    </div>
  );
};
