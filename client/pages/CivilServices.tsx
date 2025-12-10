import { useState } from "react";
import {
  Building2,
  Hammer,
  Award,
  TrendingUp,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

const CivilServices = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Civil Engineering Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive construction, structural design, and project
            management solutions for residential, commercial, and infrastructure
            projects
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Construction Services",
                description:
                  "End-to-end construction management with quality assurance, timeline optimization, and safety compliance. Experienced in residential, commercial, and industrial projects.",
                features: [
                  "Project Planning",
                  "Quality Control",
                  "Safety Management",
                  "Progress Tracking",
                ],
              },
              {
                icon: Hammer,
                title: "Structural Design",
                description:
                  "Advanced structural analysis and design using AutoCAD, Revit, and STAAD Pro. RCC, steel, and mixed structure expertise.",
                features: [
                  "Load Analysis",
                  "3D Modeling",
                  "Seismic Design",
                  "Cost Optimization",
                ],
              },
              {
                icon: Award,
                title: "Architectural Planning",
                description:
                  "Innovative architectural designs combining aesthetics with functionality. Modern, contemporary, and heritage design expertise.",
                features: [
                  "Space Planning",
                  "3D Visualization",
                  "Interior Design",
                  "Sustainable Design",
                ],
              },
              {
                icon: TrendingUp,
                title: "Land Development",
                description:
                  "Strategic land planning and development for maximum ROI. Expertise in residential colonies, commercial zones, and mixed-use projects.",
                features: [
                  "Site Analysis",
                  "Master Planning",
                  "Infrastructure Design",
                  "Approvals Management",
                ],
              },
              {
                icon: BarChart3,
                title: "Project Management",
                description:
                  "Comprehensive project management from conception to completion. Cost control, timeline management, and resource optimization.",
                features: [
                  "Scheduling",
                  "Budget Control",
                  "Risk Management",
                  "Stakeholder Coordination",
                ],
              },
              {
                icon: Shield,
                title: "Quality & Safety",
                description:
                  "Rigorous quality control and comprehensive safety protocols. ISO certified and compliant with all national and international standards.",
                features: [
                  "ISO 9001 & 45001",
                  "Safety Audits",
                  "Quality Testing",
                  "Compliance Management",
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

      {/* Project Workflow */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Our Project Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Understanding your requirements and vision",
              },
              {
                step: "2",
                title: "Planning",
                description: "Detailed project planning and design",
              },
              {
                step: "3",
                title: "Execution",
                description: "Professional execution with quality control",
              },
              {
                step: "4",
                title: "Monitoring",
                description: "Regular monitoring and progress updates",
              },
              {
                step: "5",
                title: "Delivery",
                description: "Handover and post-project support",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-secondary to-sky rounded-lg p-6 text-center h-32 flex flex-col justify-center items-center mb-4">
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    {item.step}
                  </div>
                  <div className="text-white font-heading font-bold text-sm">
                    {item.title}
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center">
                  {item.description}
                </p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-14 -right-2 text-secondary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Tools &amp; Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Design Tools",
                tools: ["AutoCAD", "Revit", "SketchUp", "Adobe Suite", "Rhino"],
              },
              {
                category: "Analysis Tools",
                tools: [
                  "STAAD Pro",
                  "SAFE",
                  "ETABS",
                  "SAP2000",
                  "CSI Products",
                ],
              },
              {
                category: "Site Management",
                tools: [
                  "Drone Survey",
                  "Total Station",
                  "GPS",
                  "Project Management Software",
                  "BIM",
                ],
              },
            ].map((group, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl border border-gray-700 p-8"
              >
                <h3 className="text-2xl font-heading font-bold text-white mb-6">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 text-gray-300 items-center"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Civil Projects Portfolio */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Civil Projects Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Commercial Complex",
                location: "Mumbai, Maharashtra",
                value: "₹50 Cr+",
                image:
                  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop",
                stats: "50,000 sqft | 200+ Offices",
              },
              {
                title: "Residential Development",
                location: "Bangalore, Karnataka",
                value: "250 Units",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
                stats: "1000+ Residents | 50 Acres",
              },
              {
                title: "Infrastructure Project",
                location: "Delhi, NCR",
                value: "₹75 Cr+",
                image:
                  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
                stats: "10km Road | 4 Flyovers",
              },
              {
                title: "Industrial Park",
                location: "Pune, Maharashtra",
                value: "₹40 Cr",
                image:
                  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop",
                stats: "30 Units | 100 Acres",
              },
              {
                title: "Shopping Mall",
                location: "Gurgaon, Haryana",
                value: "₹60 Cr+",
                image:
                  "https://images.unsplash.com/photo-1555109307-f7d9da7583d1?w=400&h=300&fit=crop",
                stats: "400+ Shops | 500,000 sqft",
              },
              {
                title: "Hospital Complex",
                location: "Hyderabad, Telangana",
                value: "₹45 Cr",
                image:
                  "https://images.unsplash.com/photo-1587454226027-cb62e3e02e75?w=400&h=300&fit=crop",
                stats: "500 Beds | 200,000 sqft",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-xl overflow-hidden border border-gray-600 hover:border-secondary/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.location}
                  </p>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-600">
                    <span className="text-secondary font-bold">
                      {project.value}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {project.stats}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Ready for Your Next Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our civil engineering expertise can bring your
            vision to life
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-soft hover:shadow-soft-lg group"
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

export default CivilServices;
