import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const ContactFormHeader = () => {
  return (
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
  );
};