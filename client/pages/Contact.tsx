import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="Get In Touch"
        description="Contact us for inquiries, project consultations, support, or partnership opportunities. Reach out via email, phone, contact form, or visit our office. We're here to help transform your vision into reality."
        icon={<Mail size={64} className="text-secondary" />}
      />
    </Layout>
  );
};

export default Contact;
