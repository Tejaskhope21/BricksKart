import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { Briefcase } from "lucide-react";

const Careers = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="Join Our Team"
        description="Explore current job openings, internship opportunities, learn about our company culture, benefits, perks, and view our office photos. Be part of a dynamic team transforming infrastructure and technology."
        icon={<Briefcase size={64} className="text-secondary" />}
      />
    </Layout>
  );
};

export default Careers;
