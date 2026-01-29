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
import { ContactFormSuccess } from "./contact/ContactFormSuccess";

interface ContactFormProps {
  defaultType?: "loan" | "partnership" | "demo" | "ambassador" | "job";
  triggerComponent?: React.ReactNode;
}

export const ContactForm = ({ defaultType, triggerComponent }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companyContactDetails: "",
    type: defaultType || "loan",
    message: "",
  });
  const { toast } = useToast();

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      companyContactDetails: "",
      type: defaultType || "loan",
      message: "",
    });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      resetForm();
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.company || 
        !formData.companyContactDetails || !formData.message) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields including name, email, phone, company name, company contact details, and message.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await Promise.all([
        sendAdminEmail(formData),
        sendUserEmail(formData)
      ]);
      
      setIsSubmitted(true);
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
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        setTimeout(() => {
          resetForm();
        }, 300);
      }
    }}>
      <DialogTrigger asChild>
        {triggerComponent || <Button variant="default">Contact Us</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-primary">
        {isSubmitted ? (
          <ContactFormSuccess onClose={handleClose} />
        ) : (
          <>
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
