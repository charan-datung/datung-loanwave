import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactFormProps {
  defaultType?: "loan" | "partnership" | "demo";
  triggerComponent?: React.ReactNode;
}

export const ContactForm = ({ defaultType, triggerComponent }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
    
    try {
      // Here we'll send the form data to your email
      // For now, we'll just log it and show a success message
      console.log("Form submitted:", formData);
      
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
        duration: 5000,
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
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
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
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Your phone number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Company (Optional)</label>
            <Input
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Inquiry Type</label>
            <Select
              value={formData.type}
              onValueChange={(value: "loan" | "partnership" | "demo") => 
                setFormData({ ...formData, type: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="loan">Apply for a Loan</SelectItem>
                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                <SelectItem value="demo">Book a Demo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <Textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us more about your inquiry"
              className="min-h-[100px]"
            />
          </div>
          
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};