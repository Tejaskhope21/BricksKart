import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { Building2 } from "lucide-react";

const CivilServices = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="Civil Engineering Services"
        description="Comprehensive construction, structural design, architectural planning, land development, surveying, interior design, and project management consulting services for residential, commercial, and infrastructure projects."
        icon={<Building2 size={64} className="text-primary" />}
      />
    </Layout>
  );
};

export default CivilServices;
