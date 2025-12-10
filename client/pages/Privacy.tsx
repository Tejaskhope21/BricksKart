import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="Privacy Policy"
        description="Our commitment to protecting your privacy and data security. Learn about how we collect, use, and safeguard your personal information in accordance with applicable laws and regulations."
        icon={<Shield size={64} className="text-primary" />}
      />
    </Layout>
  );
};

export default Privacy;
