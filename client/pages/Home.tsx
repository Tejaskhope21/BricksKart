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
} from "lucide-react";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary pt-20 pb-32 lg:pt-32 lg:pb-48">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-sky rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Transforming Infrastructure &amp; Technology Together
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Premier solutions in Civil Engineering and IT Products. Trust + Innovation = Success
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/civil-services"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-soft-lg hover:shadow-soft-lg flex items-center justify-center gap-2 group"
              >
                Explore Civil Services
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/it-solutions"
                className="px-8 py-4 bg-yellow text-primary font-bold rounded-lg hover:bg-yellow/90 transition-all duration-200 shadow-soft-lg flex items-center justify-center gap-2 group"
              >
                Explore IT Solutions
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience", icon: Award },
              { number: "200+", label: "Projects Completed", icon: Briefcase },
              { number: "50+", label: "Happy Clients", icon: Users },
              { number: "150+", label: "Team Members", icon: Building2 },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10 hover:border-secondary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Civil Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Civil Engineering Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and structural solutions for residential, commercial, and infrastructure projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Building2,
                title: "Construction Services",
                description: "End-to-end construction management with quality assurance",
              },
              {
                icon: Hammer,
                title: "Structural Design",
                description: "Advanced structural analysis and design using latest tools",
              },
              {
                icon: Award,
                title: "Architectural Planning",
                description: "Innovative design with functional and aesthetic excellence",
              },
              {
                icon: Building2,
                title: "Land Development",
                description: "Strategic land planning and development services",
              },
              {
                icon: BarChart3,
                title: "Project Management",
                description: "Efficient execution with timeline and budget optimization",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Comprehensive quality control and safety compliance",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/civil-services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-soft hover:shadow-soft-lg group"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              IT Products &amp; Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology solutions for digital transformation and business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Code2,
                title: "Custom Software",
                description: "Tailor-made applications built for your unique needs",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile application development",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "AWS, Azure, and GCP integration and migration services",
              },
              {
                icon: BarChart3,
                title: "ERP & CRM Systems",
                description: "Enterprise resource planning and customer management tools",
              },
              {
                icon: Code2,
                title: "DevOps & Automation",
                description: "CI/CD pipelines and infrastructure automation",
              },
              {
                icon: Star,
                title: "AI Solutions",
                description: "Machine learning and AI-powered analytics platforms",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-secondary/10 to-sky/10 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-all duration-300 group hover:shadow-soft-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/it-solutions"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-all shadow-soft hover:shadow-soft-lg group"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center text-primary mb-16">
            Why Choose CoreInnovate?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dual Expertise",
                description:
                  "Unique combination of civil engineering and IT expertise under one roof",
              },
              {
                title: "Proven Track Record",
                description:
                  "10+ years of successful projects across sectors with measurable results",
              },
              {
                title: "Quality Assured",
                description:
                  "Rigorous quality control and compliance with international standards",
              },
              {
                title: "Expert Team",
                description:
                  "Experienced professionals with certifications and industry recognition",
              },
              {
                title: "Customer Focused",
                description:
                  "Dedicated support and transparent communication throughout projects",
              },
              {
                title: "Innovation Driven",
                description:
                  "Continuous adoption of latest technologies and best practices",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-soft border border-gray-100 hover:border-secondary/30 transition-all group">
                <div className="w-8 h-8 flex-shrink-0 mt-1 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center text-primary mb-12">
            Company Overview
          </h2>

          <div className="max-w-4xl mx-auto aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/10 overflow-hidden group cursor-pointer hover:border-secondary/30 transition-all">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary text-white rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Company Introduction Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our best work in civil construction and IT development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Commercial Complex",
                category: "Civil",
                image: "bg-gradient-to-br from-primary/20 to-secondary/20",
                value: "₹50 Cr+",
              },
              {
                title: "Enterprise ERP System",
                category: "IT",
                image: "bg-gradient-to-br from-secondary/20 to-sky/20",
                value: "2.5 Lakh",
              },
              {
                title: "Infrastructure Development",
                category: "Civil",
                image: "bg-gradient-to-br from-primary/20 to-yellow/20",
                value: "₹75 Cr+",
              },
              {
                title: "Mobile App Platform",
                category: "IT",
                image: "bg-gradient-to-br from-sky/20 to-secondary/20",
                value: "500K Users",
              },
              {
                title: "Residential Development",
                category: "Civil",
                image: "bg-gradient-to-br from-primary/20 to-secondary/20",
                value: "250 Units",
              },
              {
                title: "Cloud Analytics Suite",
                category: "IT",
                image: "bg-gradient-to-br from-secondary/20 to-primary/20",
                value: "Real-time",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div
                  className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-bold text-lg mb-2">View Case Study</p>
                      <ArrowRight size={24} className="text-white mx-auto" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        project.category === "Civil"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className="text-sm font-bold text-gray-600">
                      {project.value}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-soft hover:shadow-soft-lg group"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center text-primary mb-16">
            Client Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Project Manager, BuildTech Ltd",
                text: "CoreInnovate delivered our construction project on time with exceptional quality. Their team's expertise is unmatched.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "CTO, Digital Solutions Inc",
                text: "Outstanding IT solutions with exceptional support. They understood our requirements perfectly and delivered beyond expectations.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "CEO, Infrastructure Ventures",
                text: "Working with CoreInnovate was a game-changer. Their integrated approach combining civil and tech is truly innovative.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-secondary/30 transition-all hover:shadow-soft"
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
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-heading font-bold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
            Let's discuss how our expertise in civil engineering and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-soft hover:shadow-soft-lg"
            >
              Get In Touch
            </Link>
            <button className="px-8 py-4 bg-yellow text-primary font-bold rounded-lg hover:bg-yellow/90 transition-all shadow-soft hover:shadow-soft-lg">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
