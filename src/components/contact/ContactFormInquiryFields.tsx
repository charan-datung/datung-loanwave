import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormInquiryFieldsProps {
  formData: {
    type: "loan" | "partnership" | "demo" | "ambassador";
    message: string;
  };
  setFormData: (data: any) => void;
  disabled?: boolean;
}

export const ContactFormInquiryFields = ({ 
  formData, 
  setFormData, 
  disabled 
}: ContactFormInquiryFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Inquiry Type *</label>
        <Select
          disabled={disabled}
          value={formData.type}
          onValueChange={(value: "loan" | "partnership" | "demo" | "ambassador") => 
            setFormData({ ...formData, type: value })
          }
        >
          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-white/50 focus:ring-white/50 disabled:opacity-50">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent className="bg-primary border-white/20">
            <SelectItem value="loan" className="text-white focus:bg-white/20 focus:text-white">Apply for a Loan</SelectItem>
            <SelectItem value="partnership" className="text-white focus:bg-white/20 focus:text-white">Partnership Opportunity</SelectItem>
            <SelectItem value="demo" className="text-white focus:bg-white/20 focus:text-white">Book a Demo</SelectItem>
            <SelectItem value="ambassador" className="text-white focus:bg-white/20 focus:text-white">Datung Ambassador</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Message *</label>
        <Textarea
          required
          disabled={disabled}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us more about your inquiry..."
          className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50 disabled:opacity-50"
        />
      </div>
    </>
  );
};