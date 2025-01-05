import { Input } from "@/components/ui/input";

interface ContactFormCompanyFieldsProps {
  formData: {
    phone: string;
    company: string;
  };
  setFormData: (data: any) => void;
  disabled?: boolean;
}

export const ContactFormCompanyFields = ({ 
  formData, 
  setFormData, 
  disabled 
}: ContactFormCompanyFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Phone</label>
        <Input
          disabled={disabled}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Your contact number"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50 disabled:opacity-50"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Company</label>
        <Input
          disabled={disabled}
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Your company name"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50 disabled:opacity-50"
        />
      </div>
    </div>
  );
};