import { Award, Users, Globe, Zap } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            About BricksKart
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Building tomorrow's infrastructure and technology solutions with
            trust, innovation, and excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Founded in 2014, BricksKart emerged from a vision to bridge
                the gap between traditional civil engineering and cutting-edge
                technology. We believed that the best solutions come from
                combining structural excellence with digital innovation.
              </p>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Starting with a small team of 5 dedicated professionals, we've
                grown into a powerhouse of 150+ experts spanning civil
                engineering, software development, cloud infrastructure, and AI
                solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we pride ourselves on delivering integrated solutions
                that transform businesses and build lasting infrastructure for
                the future.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-700 h-96">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="BricksKart office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Our Mission, Vision & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Our Mission",
                content:
                  "To deliver innovative, integrated solutions in civil engineering and IT that transform projects, empower businesses, and create lasting value for our clients and communities.",
              },
              {
                icon: Zap,
                title: "Our Vision",
                content:
                  "To be the leading partner for organizations seeking excellence in both infrastructure development and digital transformation globally.",
              },
              {
                icon: Award,
                title: "Our Values",
                content:
                  "Integrity, Innovation, Excellence, Collaboration, and Customer-Centricity drive everything we do. We believe in building relationships, not just projects.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-700 rounded-xl p-8 border border-gray-600 hover:border-secondary/50 transition-all"
                >
                  <Icon size={40} className="text-secondary mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Experienced leaders driving innovation and excellence across civil
            engineering and technology domains
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Vikram Singh",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
                bio: "20+ years in civil engineering and project management",
              },
              {
                name: "Neha Gupta",
                role: "CTO & Co-Founder",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
                bio: "Tech visionary with expertise in cloud and AI solutions",
              },
              {
                name: "Rajesh Verma",
                role: "Head of Civil Services",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
                bio: "Expert architect with 15+ years of experience",
              },
              {
                name: "Priya Sharma",
                role: "Head of IT Solutions",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
                bio: "Software engineering leader with international exposure",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-secondary/50 transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Certifications & Awards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-8">
                Certifications
              </h3>
              <ul className="space-y-4">
                {[
                  "ISO 9001:2015 - Quality Management",
                  "ISO 45001:2018 - Occupational Health & Safety",
                  "ISO 27001:2022 - Information Security",
                  "CMMI Level 3 - Capability Maturity Model",
                  "AWS Partner Network - Premier Tier",
                  "Azure Partner Status - Silver Partner",
                ].map((cert, index) => (
                  <li key={index} className="flex gap-3 text-gray-300">
                    <span className="text-secondary mt-1">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-8">
                Awards & Recognition
              </h3>
              <ul className="space-y-4">
                {[
                  "Best Integrated Solutions Provider 2023",
                  "Innovation Excellence Award 2022",
                  "Top 10 IT Companies in India 2023",
                  "Best Employer Award 2022",
                  "Sustainable Development Leadership 2023",
                  "Customer Choice Award 2023",
                ].map((award, index) => (
                  <li key={index} className="flex gap-3 text-gray-300">
                    <span className="text-yellow mt-1">★</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Our Journey
          </h2>

          <div className="space-y-8">
            {[
              {
                year: "2014",
                title: "Foundation",
                description:
                  "BricksKart founded with vision to combine civil engineering expertise with technology",
              },
              {
                year: "2016",
                title: "First Milestone",
                description:
                  "Completed 25+ projects worth ₹50 Cr, expanded team to 30 members",
              },
              {
                year: "2018",
                title: "IT Division Launch",
                description:
                  "Launched dedicated IT Solutions division, acquired first major SaaS product",
              },
              {
                year: "2020",
                title: "Global Expansion",
                description:
                  "Expanded to international markets, established cloud infrastructure practice",
              },
              {
                year: "2022",
                title: "AI & Innovation",
                description:
                  "Launched AI Solutions division, achieved ISO 27001 certification",
              },
              {
                year: "2024",
                title: "Present",
                description:
                  "150+ team members, 200+ completed projects, serving 50+ happy clients globally",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="flex gap-6 pb-8 border-l-2 border-secondary pl-8 relative"
              >
                <div className="absolute -left-3 top-0 w-4 h-4 bg-secondary rounded-full border-4 border-gray-900" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
                    {event.year}
                  </h3>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
