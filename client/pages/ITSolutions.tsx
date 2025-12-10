import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { Code2 } from "lucide-react";

const ITSolutions = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="IT Products & Solutions"
        description="Custom software development, mobile apps, web applications, cloud migration (AWS/Azure/GCP), DevOps & CI/CD, ERP & CRM systems, AI-based solutions, and comprehensive IT consulting & support services."
        icon={<Code2 size={64} className="text-secondary" />}
      />
    </Layout>
  );
};

export default ITSolutions;
