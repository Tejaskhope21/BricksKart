import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PagePlaceholderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PagePlaceholder = ({
  title,
  description,
  icon,
}: PagePlaceholderProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {icon && <div className="mb-6 flex justify-center">{icon}</div>}
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="inline-block p-6 bg-white rounded-xl shadow-soft border border-gray-200 mb-8">
            <p className="text-gray-700 mb-4">
              Continue prompting to fill in this page with detailed content, or
              explore other sections of our website.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-soft hover:shadow-soft-lg group"
            >
              Back to Home
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-all shadow-soft hover:shadow-soft-lg group"
            >
              Contact Us
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagePlaceholder;
