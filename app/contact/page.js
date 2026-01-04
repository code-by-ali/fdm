import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-secondary relative">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted">
            Get in touch for quotations, technical queries, or custom
            manufacturing solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[360px]">
            <img
              src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
              alt="Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 p-8 text-white">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>

              <p className="mt-4 text-gray-200 leading-relaxed">
                Our team is ready to assist you with high-precision laser die
                and corrugation requirements.
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>📍 Industrial Area, India</li>
                <li>📞 +91 98264 20653</li>
                <li>✉️ info@yourcompany.com</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl shadow-xl p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-muted">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-md border border-border px-4 py-3 focus:ring-2 focus:ring-primary outline-none bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-border px-4 py-3 focus:ring-2 focus:ring-primary outline-none bg-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement"
                  className="mt-1 w-full rounded-md border border-border px-4 py-3 focus:ring-2 focus:ring-primary outline-none bg-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1577376648297!2d75.84580117499638!3d22.75952672609396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630263470f7c39%3A0xe8d4dac26a44ab6c!2sFAKHRI%20DIE%20MAKER!5e0!3m2!1sen!2sin!4v1767535375129!5m2!1sen!2sin"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919826420653?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-xl hover:scale-105 transition"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  );
}
