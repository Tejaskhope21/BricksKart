import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="About CoreInnovate"
        description="Learn about our company story, mission, vision, leadership team, certifications, and the values that drive us to deliver excellence in civil engineering and IT solutions."
        icon={<Users size={64} className="text-secondary" />}
      />
    </Layout>
  );
};

export default About;
