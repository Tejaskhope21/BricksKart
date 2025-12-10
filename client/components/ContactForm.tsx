import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: "contact" | "quote";
}

interface ContactFormProps {
  type?: "contact" | "quote";
  onClose?: () => void;
}

const ContactForm = ({ type = "contact", onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: type,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - in production, this would send to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);

      // Show success message
      setIsSuccess(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          type: type,
        });
        setIsSuccess(false);
        if (onClose) onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isQuote = type === "quote";

  return (
    <div className="w-full max-w-2xl">
      {isSuccess ? (
        <div className="text-center py-12">
          <CheckCircle size={64} className="mx-auto text-secondary mb-4" />
          <h3 className="text-2xl font-heading font-bold text-white mb-2">
            Thank You!
          </h3>
          <p className="text-gray-300 mb-6">
            {isQuote
              ? "Your quote request has been received. We'll contact you within 24 hours."
              : "Your message has been sent successfully. We'll get back to you soon!"}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            {isQuote && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">Select a type</option>
                  <option value="civil">Civil Engineering Project</option>
                  <option value="it">IT Solutions</option>
                  <option value="both">Both Services</option>
                </select>
              </div>
            )}

            {!isQuote && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
                  placeholder="How can we help?"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {isQuote ? "Project Details" : "Message"} *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors resize-none"
              placeholder={
                isQuote
                  ? "Tell us about your project requirements..."
                  : "Your message..."
              }
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                {isQuote ? "Get Quote" : "Send Message"}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
