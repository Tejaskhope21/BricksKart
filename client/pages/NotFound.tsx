import Layout from "@/components/Layout";
import PagePlaceholder from "@/components/PagePlaceholder";
import { AlertCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <PagePlaceholder
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
        icon={<AlertCircle size={64} className="text-primary" />}
      />
    </Layout>
  );
};

export default NotFound;
