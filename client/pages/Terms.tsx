import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="Terms &amp; Conditions"
        description="Please review our terms of service, limitations of liability, user obligations, and legal agreements governing the use of our website and services."
        icon={<FileText size={64} className="text-secondary" />}
      />
    </Layout>
  );
};

export default Terms;
