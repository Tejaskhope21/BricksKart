import { MapPin, Briefcase, DollarSign, Heart, Users, Award, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Civil Engineer",
      department: "Civil Engineering",
      location: "Mumbai, India",
      salary: "₹15-25 Lakh",
      experience: "5+ years",
      type: "Full-time",
      description: "Lead civil engineering projects with expertise in structural design",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "IT Solutions",
      location: "Bangalore, India",
      salary: "₹12-20 Lakh",
      experience: "3+ years",
      type: "Full-time",
      description: "Develop scalable web applications using modern technologies",
    },
    {
      id: 3,
      title: "Project Manager",
      department: "Project Management",
      location: "Delhi, India",
      salary: "₹10-18 Lakh",
      experience: "4+ years",
      type: "Full-time",
      description: "Manage complex projects across civil and IT domains",
    },
    {
      id: 4,
      title: "Cloud Architect",
      department: "IT Solutions",
      location: "Bangalore, India",
      salary: "₹18-28 Lakh",
      experience: "6+ years",
      type: "Full-time",
      description: "Design and implement cloud infrastructure solutions",
    },
    {
      id: 5,
      title: "Junior Developer",
      department: "IT Solutions",
      location: "Pune, India",
      salary: "₹6-10 Lakh",
      experience: "1-2 years",
      type: "Full-time",
      description: "Work on software development projects under mentorship",
    },
    {
      id: 6,
      title: "Structural Engineer",
      department: "Civil Engineering",
      location: "Chennai, India",
      salary: "₹10-16 Lakh",
      experience: "2-4 years",
      type: "Full-time",
      description: "Design and analyze structural systems for buildings",
    },
  ];

  const internships = [
    {
      title: "Civil Engineering Internship",
      duration: "3-6 months",
      location: "Mumbai",
      stipend: "₹20,000/month",
    },
    {
      title: "Software Development Internship",
      duration: "3-6 months",
      location: "Bangalore",
      stipend: "₹18,000/month",
    },
    {
      title: "Data Science Internship",
      duration: "3-6 months",
      location: "Delhi",
      stipend: "₹17,000/month",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Build your career with CoreInnovate - where civil engineering meets
            technology innovation
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Our Culture & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We care deeply about excellence in everything we do",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Strong teamwork across civil and technology domains",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Commitment to highest standards and continuous improvement",
              },
              {
                icon: Briefcase,
                title: "Growth",
                description: "Invest in your professional development and career growth",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-secondary/50 transition-all"
                >
                  <Icon size={40} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Perks &amp; Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Competitive Salary & Performance Bonus",
              "Health Insurance (Self + Family)",
              "Professional Development Allowance",
              "Remote Work Flexibility",
              "Annual Leave (20+ days)",
              "Team Building Activities",
              "Laptop & Equipment Provided",
              "Gym Membership Subsidy",
              "Flexible Working Hours",
              "Career Growth Opportunities",
              "Maternity & Paternity Leave",
              "Employee Stock Option Plan (ESOP)",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex gap-3 p-4 bg-gray-700 rounded-lg items-center"
              >
                <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-4">
            Current Openings
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Explore exciting opportunities to grow your career with us
          </p>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-secondary/50 transition-all group"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{job.department}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-secondary" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={16} className="text-secondary" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-700 rounded text-xs font-semibold text-gray-300">
                      {job.experience}
                    </span>
                    <span className="px-3 py-1 bg-secondary/20 rounded text-xs font-semibold text-secondary">
                      {job.type}
                    </span>
                  </div>

                  <div className="text-right">
                    <button className="px-6 py-2 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 ml-auto group/btn">
                      Apply Now
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4 pt-4 border-t border-gray-700">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            Internship Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-xl border border-gray-600 p-8 text-center hover:border-secondary/50 transition-all group"
              >
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                  {internship.title}
                </h3>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-600">
                  <div>
                    <p className="text-gray-400 text-sm">Duration</p>
                    <p className="text-white font-semibold">{internship.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">{internship.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Stipend</p>
                    <p className="text-secondary font-bold">{internship.stipend}</p>
                  </div>
                </div>

                <button className="w-full px-6 py-2 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all">
                  Apply for Internship
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
            What Our Team Says
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Akshay Singh",
                role: "Senior Software Engineer",
                text: "CoreInnovate gave me the opportunity to work on cutting-edge technologies while maintaining work-life balance. The team is amazing!",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
              },
              {
                name: "Divya Sharma",
                role: "Civil Project Manager",
                text: "The diverse exposure to both civil and IT projects here is unique. I'm constantly learning and growing professionally.",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
              },
              {
                name: "Rohan Kapoor",
                role: "Cloud Architect",
                text: "Outstanding company culture, supportive management, and exciting projects. This is the best place to build a tech career!",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-secondary/50 transition-all"
              >
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
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
                    <p className="text-sm text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Send us your CV and we'll keep you in mind for future opportunities
          </p>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-soft hover:shadow-soft-lg">
            Send Your CV
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
