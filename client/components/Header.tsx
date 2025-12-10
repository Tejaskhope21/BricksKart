import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Civil Services", href: "/civil-services" },
    { label: "IT Solutions", href: "/it-solutions" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg">
              CI
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-heading font-bold text-primary">
                CoreInnovate
              </div>
              <div className="text-xs text-secondary font-medium">
                Civil + Tech
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
            >
              Get Quote
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-5 py-2 text-sm font-medium bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-all duration-200 shadow-soft hover:shadow-soft-lg font-bold"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex-1 px-4 py-2 text-sm font-medium text-secondary border border-secondary rounded-lg hover:bg-secondary/10 transition-colors"
              >
                Get Quote
              </button>
              <button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex-1 px-4 py-2 text-sm font-medium bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-all font-bold"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Modals */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Us"
      >
        <ContactForm type="contact" onClose={() => setIsContactModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Get a Quote"
      >
        <ContactForm type="quote" onClose={() => setIsQuoteModalOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;
