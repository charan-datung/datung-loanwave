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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Name *</label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Email *</label>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Phone</label>
          <Input
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Your contact number"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Company</label>
          <Input
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Your company name"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Inquiry Type *</label>
        <Select
          value={formData.type}
          onValueChange={(value: "loan" | "partnership" | "demo") => 
            setFormData({ ...formData, type: value })
          }
        >
          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-white/50 focus:ring-white/50">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="loan">Apply for a Loan</SelectItem>
            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
            <SelectItem value="demo">Book a Demo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Message *</label>
        <Textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us more about your inquiry..."
          className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50"
        />
      </div>
    </div>
  );
};