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
      // Send email to admin
      const adminResponse = await sendAdminEmail(formData);
      console.log('Admin email sent successfully:', adminResponse);

      // Send confirmation email to user
      const userResponse = await sendUserEmail(formData);
      console.log('User confirmation email sent successfully:', userResponse);
      
      toast({
        title: "Thank you for reaching out!",
        description: "We appreciate your interest. Our team will review your message and get back to you within 24-48 hours. In the meantime, feel free to explore our services.",
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <ContactFormFields 
            formData={formData}
            setFormData={setFormData}
            defaultType={defaultType}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};