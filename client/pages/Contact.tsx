import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">
                      Office Address
                    </h3>
                    <p className="text-gray-400">
                      123 Innovation Street
                      <br />
                      Tech City, TC 12345
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-400">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-secondary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                      <br />
                      <a
                        href="tel:+919876543211"
                        className="hover:text-secondary transition-colors"
                      >
                        +91 98765 43211
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-400">
                      <a
                        href="mailto:info@coreinnovate.com"
                        className="hover:text-secondary transition-colors"
                      >
                        info@coreinnovate.com
                      </a>
                      <br />
                      <a
                        href="mailto:support@coreinnovate.com"
                        className="hover:text-secondary transition-colors"
                      >
                        support@coreinnovate.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-sky rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-8">
                <h2 className="text-3xl font-heading font-bold text-white mb-8">
                  Send us a Message
                </h2>
                <ContactForm type="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Visit Our Office
          </h2>
          <div className="relative h-96 rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8169563368657!2d77.20986!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7f6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What is your response time for inquiries?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business hours. For urgent matters, please call us directly.",
              },
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes! We offer free initial consultations to understand your requirements and provide personalized recommendations.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept bank transfers, credit/debit cards, cheques, and customized payment plans for larger projects.",
              },
              {
                question: "Can you work on projects outside India?",
                answer:
                  "Yes, we have experience with international projects. Please contact us to discuss your specific requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-secondary/50 transition-all"
              >
                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
