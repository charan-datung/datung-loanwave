import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: "loan" | "partnership" | "demo";
  message: string;
}

interface ContactFormFieldsProps {
  formData: ContactFormData;
  setFormData: (data: ContactFormData) => void;
  defaultType?: "loan" | "partnership" | "demo";
}

export const ContactFormFields = ({ formData, setFormData, defaultType }: ContactFormFieldsProps) => {
  return (
    <div className="space-y-4">
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
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent className="bg-white">
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
    </div>
  );
};