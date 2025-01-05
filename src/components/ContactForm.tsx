import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactFormFields } from "./contact/ContactFormFields";
import { sendAdminEmail, sendUserEmail } from "@/utils/emailService";

interface ContactFormProps {
  defaultType?: "loan" | "partnership" | "demo";
  triggerComponent?: React.ReactNode;
}

export const ContactForm = ({ defaultType, triggerComponent }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: defaultType || "loan",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await sendAdminEmail(formData);
      await sendUserEmail(formData);
      
      toast({
        title: "Thank you for reaching out!",
        description: "We'll get back to you within 24-48 hours.",
        duration: 6000,
      });
      
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        type: defaultType || "loan",
        message: "",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerComponent || <Button variant="default">Contact Us</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-6 bg-primary">
        <DialogHeader className="space-y-6">
          <img 
            src="/lovable-uploads/3a518b84-ac0a-41f0-8ff8-5b27c2fa8160.png" 
            alt="Datung Logo" 
            className="h-16 mx-auto"
          />
          <div className="space-y-4 mt-4">
            <DialogTitle className="text-2xl font-semibold text-white">Get in Touch</DialogTitle>
            <DialogDescription className="text-white/90">
              We're here to help! Fill out the form below and we'll get back to you promptly.
            </DialogDescription>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <ContactFormFields 
            formData={formData}
            setFormData={setFormData}
            defaultType={defaultType}
          />
          <Button 
            type="submit" 
            className="w-full bg-white hover:bg-white/90 text-primary font-medium py-2.5"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};