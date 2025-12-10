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
                className="flex-1 px-4 py-3 rounded-lg bg-primary/20 border border-primary/30 text-white placeholder:text-primary/50 focus:outline-none focus:border-secondary"
              />
              <button className="px-6 py-3 bg-secondary text-primary font-medium rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-primary font-bold text-sm">
                CI
              </div>
              <span className="font-heading font-bold text-lg">CoreInnovate</span>
            </div>
            <p className="text-primary/70 text-sm mb-4">
              Transforming infrastructure and technology together for a better
              future.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-primary/20 hover:bg-secondary rounded-lg transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/20 hover:bg-secondary rounded-lg transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary/20 hover:bg-secondary rounded-lg transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/civil-services" className="text-primary/70 hover:text-white transition-colors">
                  Civil Services
                </Link>
              </li>
              <li>
                <Link to="/it-solutions" className="text-primary/70 hover:text-white transition-colors">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary/70 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/civil-services" className="text-primary/70 hover:text-white transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/it-solutions" className="text-primary/70 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary/70 hover:text-white transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary/70 hover:text-white transition-colors">
                  Consulting
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-primary/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 text-primary/70">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </li>
              <li className="flex gap-2 text-primary/70 hover:text-white transition-colors">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex gap-2 text-primary/70 hover:text-white transition-colors">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@coreinnovate.com">info@coreinnovate.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary/70">
          <p>&copy; 2024 CoreInnovate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
