import { Calendar, User, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Smart Cities: Integration of Civil & IoT",
      excerpt:
        "Exploring how IoT and smart technologies are revolutionizing urban infrastructure and city planning...",
      author: "Rajesh Verma",
      date: "March 15, 2024",
      category: "Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Cloud Migration: Best Practices for Enterprise Success",
      excerpt:
        "A comprehensive guide to successfully migrating your enterprise applications to cloud infrastructure...",
      author: "Neha Gupta",
      date: "March 10, 2024",
      category: "IT Solutions",
      image:
        "https://images.unsplash.com/photo-1518694712202-14dd9538aa97?w=400&h=250&fit=crop",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Sustainable Construction: Building for the Future",
      excerpt:
        "How modern construction practices and sustainable materials are creating eco-friendly buildings...",
      author: "Vikram Singh",
      date: "March 5, 2024",
      category: "Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "AI-Powered Solutions: Transforming Business Operations",
      excerpt:
        "Discover how artificial intelligence is streamlining operations and creating new business opportunities...",
      author: "Priya Sharma",
      date: "March 1, 2024",
      category: "IT Solutions",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=400&h=250&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "BIM Technology: Revolutionizing Project Management",
      excerpt:
        "Building Information Modeling is transforming how we plan, design, and execute construction projects...",
      author: "Rajesh Verma",
      date: "February 25, 2024",
      category: "Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "DevOps Best Practices: From Development to Deployment",
      excerpt:
        "Master the essentials of DevOps to streamline your software development and deployment pipeline...",
      author: "Neha Gupta",
      date: "February 20, 2024",
      category: "IT Solutions",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 7,
      title: "Quality Assurance in Construction: Standards & Compliance",
      excerpt:
        "Ensuring quality at every stage of construction through rigorous testing and compliance frameworks...",
      author: "Vikram Singh",
      date: "February 15, 2024",
      category: "Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=250&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 8,
      title: "Cybersecurity in the Cloud: Protecting Your Data",
      excerpt:
        "Essential cybersecurity practices for protecting your organization's data in cloud environments...",
      author: "Priya Sharma",
      date: "February 10, 2024",
      category: "IT Solutions",
      image:
        "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400&h=250&fit=crop",
      readTime: "8 min read",
    },
  ];

  const categories = [
    "All Articles",
    "Civil Engineering",
    "IT Solutions",
    "Project Management",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Blog &amp; Resources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Latest insights, tips, and best practices in civil engineering and
            IT solutions
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-lg font-medium whitespace-nowrap bg-gray-800 text-gray-300 hover:bg-secondary hover:text-primary transition-all"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-secondary/50 transition-all group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-xs font-bold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-secondary font-semibold text-sm mb-3">
                  {articles[0].category}
                </span>
                <h2 className="text-3xl font-heading font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-700">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    {articles[0].date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User size={16} />
                    {articles[0].author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {articles[0].readTime}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all group/btn">
                  Read Article
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-secondary/50 transition-all group flex flex-col"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-white rounded text-xs font-bold">
                      {article.category === "Civil Engineering"
                        ? "Civil"
                        : "IT"}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-gray-700 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <div>{article.readTime}</div>
                  </div>

                  <button className="text-secondary font-bold hover:text-secondary/80 transition-colors flex items-center gap-2 group/btn">
                    Read More
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-16">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  page === 1
                    ? "bg-secondary text-primary"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 mb-8">
              Get the latest articles, tips, and insights delivered to your inbox
            </p>
            <form className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-primary placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-yellow text-primary font-bold rounded-lg hover:bg-yellow/90 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
