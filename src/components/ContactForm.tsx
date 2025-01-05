import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { sendAdminEmail, sendUserEmail } from "@/utils/emailService";
import { ContactFormHeader } from "./contact/ContactFormHeader";
import { ContactFormPersonalFields } from "./contact/ContactFormPersonalFields";
import { ContactFormCompanyFields } from "./contact/ContactFormCompanyFields";
import { ContactFormInquiryFields } from "./contact/ContactFormInquiryFields";
import { ContactFormSubmit } from "./contact/ContactFormSubmit";

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
      await Promise.all([
        sendAdminEmail(formData),
        sendUserEmail(formData)
      ]);
      
      toast({
        title: "Success!",
        description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
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
      console.error('Email Service Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly at support@datung.com",
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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-primary">
        <ContactFormHeader />
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <ContactFormPersonalFields 
            formData={formData}
            setFormData={setFormData}
            disabled={isLoading}
          />
          <ContactFormCompanyFields 
            formData={formData}
            setFormData={setFormData}
            disabled={isLoading}
          />
          <ContactFormInquiryFields 
            formData={formData}
            setFormData={setFormData}
            disabled={isLoading}
          />
          <ContactFormSubmit isLoading={isLoading} />
        </form>
      </DialogContent>
    </Dialog>
  );
};