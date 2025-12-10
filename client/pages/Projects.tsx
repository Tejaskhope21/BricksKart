import { useState } from "react";
import { Filter, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const allProjects = [
    // Civil Projects
    {
      category: "civil",
      title: "Modern Commercial Complex",
      location: "Mumbai, Maharashtra",
      value: "₹50 Cr+",
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=350&fit=crop",
      description: "Mixed-use commercial complex with retail, offices, and hospitality",
      duration: "36 months",
      area: "50,000 sqft",
    },
    {
      category: "civil",
      title: "Residential Development",
      location: "Bangalore, Karnataka",
      value: "250 Units",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=350&fit=crop",
      description: "Gated residential community with modern amenities and green spaces",
      duration: "42 months",
      area: "50 acres",
    },
    {
      category: "civil",
      title: "Infrastructure Development",
      location: "Delhi, NCR",
      value: "₹75 Cr+",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=350&fit=crop",
      description: "Large-scale infrastructure including roads, flyovers, and utilities",
      duration: "48 months",
      area: "10km corridor",
    },
    {
      category: "civil",
      title: "Industrial Park",
      location: "Pune, Maharashtra",
      value: "₹40 Cr",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=350&fit=crop",
      description: "State-of-the-art industrial park with warehousing and logistics",
      duration: "30 months",
      area: "100 acres",
    },
    // IT Projects
    {
      category: "it",
      title: "Enterprise ERP System",
      location: "Pan-India",
      value: "2.5 Lakh",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
      description: "Complete ERP implementation for multi-location enterprise",
      duration: "18 months",
      area: "40+ modules",
    },
    {
      category: "it",
      title: "Mobile App Platform",
      location: "Global",
      value: "500K Users",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop",
      description: "Cross-platform mobile application with 500K+ active users",
      duration: "12 months",
      area: "15+ features",
    },
    {
      category: "it",
      title: "E-Commerce Portal",
      location: "India",
      value: "10M Orders",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab1c9b841?w=500&h=350&fit=crop",
      description: "High-performance e-commerce platform with AI recommendations",
      duration: "14 months",
      area: "30K+ products",
    },
    {
      category: "it",
      title: "Analytics Dashboard",
      location: "Cloud-based",
      value: "Real-time",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop",
      description: "Real-time analytics platform processing billions of data points",
      duration: "10 months",
      area: "50+ dashboards",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Projects &amp; Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A showcase of our successful projects in civil engineering and IT
            solutions
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-800 sticky top-20 z-10 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter size={20} className="text-secondary flex-shrink-0" />
            {[
              { id: "all", label: "All Projects" },
              { id: "civil", label: "Civil Engineering" },
              { id: "it", label: "IT Solutions" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter.id
                    ? "bg-secondary text-primary"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-secondary/50 transition-all duration-300 group hover:shadow-soft-lg flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.category === "civil"
                          ? "bg-primary/90 text-white"
                          : "bg-secondary/90 text-primary"
                      }`}
                    >
                      {project.category === "civil"
                        ? "Civil Engineering"
                        : "IT Solutions"}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{project.location}</p>

                  <p className="text-gray-300 mb-6 flex-1">{project.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-gray-700 text-center">
                    <div>
                      <p className="text-secondary font-bold text-sm">
                        {project.value}
                      </p>
                      <p className="text-gray-500 text-xs">Value</p>
                    </div>
                    <div>
                      <p className="text-secondary font-bold text-sm">
                        {project.duration}
                      </p>
                      <p className="text-gray-500 text-xs">Duration</p>
                    </div>
                    <div>
                      <p className="text-secondary font-bold text-sm">
                        {project.area}
                      </p>
                      <p className="text-gray-500 text-xs">Scope</p>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 group/btn">
                    View Case Study
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            By The Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Projects Completed", color: "from-primary to-sky" },
              { number: "₹500+ Cr", label: "Total Project Value", color: "from-secondary to-sky" },
              { number: "10+ Yrs", label: "Industry Experience", color: "from-yellow to-orange-500" },
              { number: "50+", label: "Happy Clients", color: "from-green-400 to-emerald-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-5xl font-heading font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                >
                  {stat.number}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
