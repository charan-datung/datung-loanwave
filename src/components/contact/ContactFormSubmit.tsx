import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ContactFormSubmitProps {
  isLoading: boolean;
}

export const ContactFormSubmit = ({ isLoading }: ContactFormSubmitProps) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-white hover:bg-white/90 text-primary font-medium py-2.5"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
};