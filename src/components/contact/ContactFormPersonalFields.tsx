import { Input } from "@/components/ui/input";

interface ContactFormPersonalFieldsProps {
  formData: {
    name: string;
    email: string;
  };
  setFormData: (data: any) => void;
  disabled?: boolean;
}

export const ContactFormPersonalFields = ({ 
  formData, 
  setFormData, 
  disabled 
}: ContactFormPersonalFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Name *</label>
        <Input
          required
          disabled={disabled}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50 disabled:opacity-50"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Email *</label>
        <Input
          required
          disabled={disabled}
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/50 disabled:opacity-50"
        />
      </div>
    </div>
  );
};