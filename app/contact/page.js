export default function Contact() {
  return (
    <section className="bg-gray-50 relative">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch for quotations, technical queries, or custom
            manufacturing solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
              alt="Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 p-8 text-white">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>

              <p className="mt-4 text-gray-200">
                Our team is ready to assist you with high-precision laser die
                and corrugation requirements.
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>📍 Industrial Area, India</li>
                <li>📞 +91 98765 43210</li>
                <li>✉️ info@yourcompany.com</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=industrial%20area%20india&output=embed"
            className="w-full h-100 border-0"
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
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </section>
  );
}
