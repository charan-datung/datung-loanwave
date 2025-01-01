import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export const EnterpriseForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-primary relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Enterprise Inquiry</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input {...register("companyName")} placeholder="Enter company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person
                </label>
                <Input {...register("contactPerson")} placeholder="Enter contact person" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input {...register("email")} type="email" placeholder="Enter email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <Input {...register("phone")} placeholder="Enter phone number" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                {...register("message")}
                placeholder="Tell us about your requirements"
                className="min-h-[100px]"
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};