import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { Briefcase } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="Portfolio &amp; Projects"
        description="Explore our extensive portfolio of successful civil engineering projects (residential buildings, commercial complexes, infrastructure) and IT projects (web portals, mobile apps, ERP systems, dashboards) with detailed case studies and results."
        icon={<Briefcase size={64} className="text-primary" />}
      />
    </Layout>
  );
};

export default Projects;
