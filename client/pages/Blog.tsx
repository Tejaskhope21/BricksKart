import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { BookOpen } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <PagePlaceholder
        title="Blog &amp; Resources"
        description="Stay updated with the latest articles, guides, and insights on civil engineering trends, construction technology, software development, IT innovations, AI, and industry best practices."
        icon={<BookOpen size={64} className="text-primary" />}
      />
    </Layout>
  );
};

export default Blog;
