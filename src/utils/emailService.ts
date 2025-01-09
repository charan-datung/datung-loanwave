import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_r2c7x0q';
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_gta9a9w';
const EMAILJS_USER_TEMPLATE_ID = 'template_9pco2f6';
const EMAILJS_PUBLIC_KEY = '6-O6iLE9u3xidqqaa';
const ADMIN_EMAIL = 'charan@datung.io';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: "loan" | "partnership" | "demo" | "ambassador";
  message: string;
}

export const sendAdminEmail = async (formData: EmailData) => {
  console.log('Sending admin email with params:', {
    to_name: 'Admin',
    to_email: ADMIN_EMAIL,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    company: formData.company,
    type: formData.type,
    message: formData.message,
  });

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_ADMIN_TEMPLATE_ID,
    {
      to_name: 'Admin',
      to_email: ADMIN_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      type: formData.type,
      message: formData.message,
    },
    EMAILJS_PUBLIC_KEY
  );
};

export const sendUserEmail = async (formData: EmailData) => {
  console.log('Sending user confirmation email with params:', {
    to_name: formData.name,
    to_email: formData.email,
    from_name: 'Datung Finance',
    from_email: ADMIN_EMAIL,
    inquiry_type: formData.type,
  });

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_USER_TEMPLATE_ID,
    {
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'Datung Finance',
      from_email: ADMIN_EMAIL,
      inquiry_type: formData.type,
    },
    EMAILJS_PUBLIC_KEY
  );
};