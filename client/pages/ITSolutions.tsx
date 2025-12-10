import { useState } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  BarChart3,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

const ITSolutions = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-sky">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            IT Products &amp; Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Cutting-edge technology solutions for digital transformation,
            business automation, and sustainable growth
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Our IT Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Custom Software Development",
                description:
                  "Bespoke software solutions tailored to your unique business requirements. Full stack development with modern technologies.",
                features: [
                  "Architecture Design",
                  "Full Stack Dev",
                  "API Development",
                  "Integration",
                ],
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description:
                  "Native iOS, Android, and cross-platform mobile applications with exceptional UX and performance.",
                features: [
                  "iOS Development",
                  "Android Dev",
                  "Cross-platform",
                  "App Store Ready",
                ],
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description:
                  "AWS, Azure, and GCP expertise. Migration, deployment, and infrastructure management for maximum uptime.",
                features: [
                  "Cloud Migration",
                  "DevOps Setup",
                  "Infrastructure",
                  "99.9% Uptime",
                ],
              },
              {
                icon: BarChart3,
                title: "ERP & CRM Systems",
                description:
                  "Enterprise resource planning and customer relationship management for operational excellence and growth.",
                features: [
                  "SAP Implementation",
                  "Salesforce CRM",
                  "ERP Customization",
                  "Training",
                ],
              },
              {
                icon: Zap,
                title: "DevOps & Automation",
                description:
                  "CI/CD pipelines, containerization, and infrastructure as code for rapid, reliable deployments.",
                features: [
                  "Docker/Kubernetes",
                  "CI/CD Pipelines",
                  "IaC",
                  "Monitoring",
                ],
              },
              {
                icon: TrendingUp,
                title: "AI & Data Analytics",
                description:
                  "Machine learning models, data pipelines, and analytics platforms for data-driven decision making.",
                features: [
                  "ML Models",
                  "Data Pipeline",
                  "Analytics",
                  "Dashboards",
                ],
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl border border-gray-700 p-8 hover:border-secondary/50 transition-all group"
                >
                  <Icon size={40} className="text-secondary mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex gap-2 text-gray-400 text-sm"
                      >
                        <CheckCircle
                          size={16}
                          className="text-secondary mt-0.5"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Our Technology Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Languages",
                tech: [
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "Java",
                  "Go",
                  "C++",
                ],
              },
              {
                category: "Frontend",
                tech: [
                  "React",
                  "Vue.js",
                  "Angular",
                  "Next.js",
                  "Tailwind CSS",
                  "Material UI",
                ],
              },
              {
                category: "Backend",
                tech: [
                  "Node.js",
                  "Express",
                  "Django",
                  "FastAPI",
                  "Spring Boot",
                  "GraphQL",
                ],
              },
              {
                category: "Cloud & DevOps",
                tech: [
                  "AWS",
                  "Azure",
                  "Google Cloud",
                  "Docker",
                  "Kubernetes",
                  "GitLab CI/CD",
                ],
              },
            ].map((group, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-white mb-4">
                  {group.category}
                </h3>
                <div className="space-y-2">
                  {group.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-gray-600 rounded text-gray-300 text-sm text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Case Studies */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Products &amp; Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise ERP System",
                client: "Fortune 500 Manufacturing",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                description:
                  "Complete ERP implementation for supply chain management",
                metrics: "2.5M Users | 40% Cost Reduction",
              },
              {
                title: "E-Commerce Platform",
                client: "Leading Retail Chain",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab1c9b841?w=400&h=300&fit=crop",
                description:
                  "High-performance e-commerce platform with AI recommendations",
                metrics: "10M Orders | 5x Growth",
              },
              {
                title: "Mobile Banking App",
                client: "National Bank",
                image:
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
                description:
                  "Secure, feature-rich banking application for millions",
                metrics: "5M Users | 99.99% Uptime",
              },
              {
                title: "Analytics Dashboard",
                client: "Data-Driven Startup",
                image:
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
                description:
                  "Real-time analytics platform processing 1B+ data points",
                metrics: "1B+ Data Points | Real-time",
              },
              {
                title: "IoT Platform",
                client: "Smart City Initiative",
                image:
                  "https://images.unsplash.com/photo-1551821440-fc7278865c41?w=400&h=300&fit=crop",
                description:
                  "IoT management platform for 100,000+ connected devices",
                metrics: "100K Devices | Real-time",
              },
              {
                title: "AI Chatbot System",
                client: "Global Tech Company",
                image:
                  "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=400&h=300&fit=crop",
                description:
                  "Intelligent chatbot handling 10M+ customer queries monthly",
                metrics: "10M Queries | 95% Resolution",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-secondary/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-secondary text-sm font-semibold mb-3">
                    {product.client}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700">
                    <span className="text-gray-400 text-xs font-semibold">
                      {product.metrics}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all text-sm">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Why Choose Our IT Solutions?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4 font-heading font-bold text-white bg-gray-700">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-heading font-bold text-white bg-gray-700">
                    BricksKart
                  </th>
                  <th className="px-6 py-4 font-heading font-bold text-gray-400 bg-gray-700">
                    Competitors
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Custom Development", "✓", "✓"],
                  ["Integrated Civil + IT", "✓", "✗"],
                  ["24/7 Support", "✓", "✗"],
                  ["Cost-Effective", "✓", "✗"],
                  ["Agile Methodology", "✓", "✓"],
                  ["Scalable Solutions", "✓", "✓"],
                  ["Security Certified", "✓", "✓"],
                  ["Post-Launch Support", "✓", "✗"],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {row[0]}
                    </td>
                    <td className="px-6 py-4 text-secondary font-bold">
                      {row[1]}
                    </td>
                    <td className="px-6 py-4 text-gray-400">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-sky">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Transform Your Business with IT
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build innovative solutions that drive growth, efficiency, and
            competitive advantage
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-soft hover:shadow-soft-lg group"
          >
            Get a Quote
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Get a Quote"
      >
        <ContactForm type="quote" onClose={() => setIsQuoteModalOpen(false)} />
      </Modal>
    </Layout>
  );
};

export default ITSolutions;
