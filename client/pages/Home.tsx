import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Code2,
  Hammer,
  Smartphone,
  Cloud,
  BarChart3,
  CheckCircle,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  Star,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const heroSlides = [
    {
      title: "Building Tomorrow's Infrastructure",
      subtitle:
        "Premier civil engineering solutions with cutting-edge technology integration",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
      cta: "Explore Civil Services",
      ctaLink: "/civil-services",
    },
    {
      title: "Innovating Through Technology",
      subtitle:
        "Next-generation IT solutions for digital transformation and business growth",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
      cta: "Explore IT Solutions",
      ctaLink: "/it-solutions",
    },
    {
      title: "Delivering Excellence",
      subtitle:
        "10+ years of trust, 200+ projects completed, 50+ satisfied clients",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      cta: "View Our Projects",
      ctaLink: "/projects",
    },
  ];

  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} autoPlay={true} autoPlayInterval={6000} />

      {/* Stats Section */}
      <section className="py-16 bg-gray-800 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "10+",
                label: "Years Experience",
                icon: Award,
                color: "from-secondary to-sky",
              },
              {
                number: "200+",
                label: "Projects Completed",
                icon: Briefcase,
                color: "from-yellow to-orange-500",
              },
              {
                number: "50+",
                label: "Happy Clients",
                icon: Users,
                color: "from-green-400 to-emerald-500",
              },
              {
                number: "150+",
                label: "Team Members",
                icon: Building2,
                color: "from-purple-400 to-pink-500",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-700/50 border border-gray-600 rounded-xl hover:border-secondary/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={28} />
                  </div>
                  <div className="text-5xl font-heading font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Civil Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Civil Engineering Excellence
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive construction and structural solutions for
              residential, commercial, and infrastructure projects with proven
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Building2,
                title: "Construction Services",
                description:
                  "End-to-end construction management with quality assurance and timeline optimization",
                count: "25+ Projects",
              },
              {
                icon: Hammer,
                title: "Structural Design",
                description:
                  "Advanced structural analysis and design using AutoCAD, Revit, and latest tools",
                count: "150+ Designs",
              },
              {
                icon: Award,
                title: "Architectural Planning",
                description:
                  "Innovative design with functional and aesthetic excellence for modern spaces",
                count: "75+ Projects",
              },
              {
                icon: TrendingUp,
                title: "Land Development",
                description:
                  "Strategic land planning and development services for maximum ROI",
                count: "40+ Projects",
              },
              {
                icon: BarChart3,
                title: "Project Management",
                description:
                  "Efficient execution with timeline and budget optimization across all phases",
                count: "100+ Managed",
              },
              {
                icon: Shield,
                title: "Quality & Safety",
                description:
                  "Comprehensive quality control and safety compliance with international standards",
                count: "ISO Certified",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-secondary/50 transition-all duration-300 group hover:shadow-soft-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <p className="text-sm text-secondary font-semibold">
                    {service.count}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/civil-services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all shadow-soft hover:shadow-soft-lg group"
            >
              View All Civil Services
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* IT Products & Services Preview */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              IT Products &amp; Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technology solutions for digital transformation and
              business growth with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Code2,
                title: "Custom Software",
                description:
                  "Tailor-made applications built for your unique business needs and workflows",
                count: "45+ Solutions",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description:
                  "Native iOS, Android & cross-platform apps with exceptional user experience",
                count: "60+ Apps",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description:
                  "AWS, Azure, and GCP integration and migration services with 99.9% uptime",
                count: "80+ Migrations",
              },
              {
                icon: BarChart3,
                title: "ERP & CRM Systems",
                description:
                  "Enterprise resource planning and customer management for operational excellence",
                count: "35+ Implementations",
              },
              {
                icon: Zap,
                title: "DevOps & Automation",
                description:
                  "CI/CD pipelines and infrastructure automation for rapid deployment",
                count: "50+ Pipelines",
              },
              {
                icon: TrendingUp,
                title: "AI Solutions",
                description:
                  "Machine learning and AI-powered analytics platforms for data-driven decisions",
                count: "25+ AI Projects",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-700 rounded-xl border border-gray-600 hover:border-secondary/50 transition-all duration-300 group hover:shadow-soft-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-sm text-secondary font-semibold">
                    {service.count}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/it-solutions"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all shadow-soft hover:shadow-soft-lg group"
            >
              Explore IT Solutions
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center text-white mb-16">
            Why Choose BricksKart?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dual Expertise",
                description:
                  "Unique combination of civil engineering and IT expertise under one roof for integrated solutions",
              },
              {
                title: "Proven Track Record",
                description:
                  "10+ years of successful projects across sectors with measurable results and client satisfaction",
              },
              {
                title: "Quality Assured",
                description:
                  "Rigorous quality control and compliance with international standards and certifications",
              },
              {
                title: "Expert Team",
                description:
                  "Experienced professionals with industry recognition and continuous professional development",
              },
              {
                title: "Customer Focused",
                description:
                  "Dedicated support and transparent communication throughout project lifecycle",
              },
              {
                title: "Innovation Driven",
                description:
                  "Continuous adoption of latest technologies, tools and best practices in industry",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-secondary/50 transition-all group"
              >
                <div className="w-8 h-8 flex-shrink-0 mt-1 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Showcasing our best work in civil construction and IT development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Commercial Complex",
                category: "Civil",
                image:
                  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop",
                value: "₹50 Cr+",
              },
              {
                title: "Enterprise ERP System",
                category: "IT",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
                value: "2.5 Lakh",
              },
              {
                title: "Residential Development",
                category: "Civil",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
                value: "250 Units",
              },
              {
                title: "Mobile App Platform",
                category: "IT",
                image:
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
                value: "500K Users",
              },
              {
                title: "Infrastructure Project",
                category: "Civil",
                image:
                  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
                value: "₹75 Cr+",
              },
              {
                title: "Cloud Analytics Suite",
                category: "IT",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab1c9b841?w=500&h=300&fit=crop",
                value: "Real-time",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl border border-gray-700 hover:border-secondary/50 transition-all duration-300 hover:shadow-soft-lg"
              >
                <div className="relative h-48 overflow-hidden bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-bold text-lg mb-2">
                        View Case Study
                      </p>
                      <ArrowRight size={24} className="text-white mx-auto" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${project.category === "Civil"
                          ? "bg-primary/20 text-secondary"
                          : "bg-secondary/20 text-secondary"
                        }`}
                    >
                      {project.category}
                    </span>
                    <span className="text-sm font-bold text-secondary">
                      {project.value}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all shadow-soft hover:shadow-soft-lg group"
            >
              View All Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center text-white mb-16">
            Client Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Project Manager, BuildTech Ltd",
                text: "BricksKart delivered our construction project on time with exceptional quality. Their expertise in both civil and IT domains is remarkable.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
              },
              {
                name: "Priya Sharma",
                role: "CTO, Digital Solutions Inc",
                text: "Outstanding IT solutions with exceptional support. They understood our requirements perfectly and delivered beyond our expectations.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
              },
              {
                name: "Amit Patel",
                role: "CEO, Infrastructure Ventures",
                text: "Working with BricksKart was transformative. Their integrated approach combining civil and tech is truly innovative and effective.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1516574187841-6c03acbc4f32?w=100&h=100&fit=crop",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-secondary/50 transition-all hover:shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow text-yellow"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading font-bold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
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
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise in civil engineering and IT
            solutions can drive your success and exceed your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-soft hover:shadow-soft-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-4 bg-yellow text-primary font-bold rounded-lg hover:bg-yellow/90 transition-all shadow-soft hover:shadow-soft-lg"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Us"
      >
        <ContactForm
          type="contact"
          onClose={() => setIsContactModalOpen(false)}
        />
      </Modal>

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

export default Home;
