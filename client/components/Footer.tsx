import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-3">
              Stay Updated
            </h3>
            <p className="text-primary/80 mb-6">
              Get the latest updates on our projects, products, and innovations.
            </p>
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary"
              />
              <button className="px-6 py-3 bg-secondary text-primary font-medium rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center text-gray-900 font-bold text-sm font-heading">
                CI
              </div>
              <div>
                <span className="font-heading font-bold text-lg block">
                  CoreInnovate
                </span>
                <span className="text-xs text-gray-400">Civil + Tech</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Transforming infrastructure and technology together for a better,
              more innovative future.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/civil-services" className="text-gray-400 hover:text-secondary transition-colors">
                  Civil Services
                </Link>
              </li>
              <li>
                <Link to="/it-solutions" className="text-gray-400 hover:text-secondary transition-colors">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/civil-services" className="text-gray-400 hover:text-secondary transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/it-solutions" className="text-gray-400 hover:text-secondary transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Consulting
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-secondary" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </li>
              <li className="flex gap-3 text-gray-400 hover:text-secondary transition-colors">
                <Phone size={20} className="flex-shrink-0 text-secondary" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 text-gray-400 hover:text-secondary transition-colors">
                <Mail size={20} className="flex-shrink-0 text-secondary" />
                <a href="mailto:info@coreinnovate.com">info@coreinnovate.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2024 CoreInnovate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-secondary transition-colors">
              Terms & Conditions
            </Link>
            <a href="#" className="hover:text-secondary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
