import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-700" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/30 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Need Precision Manufacturing Solutions?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          Get expert laser die cutting & corrugation solutions tailored to your
          production requirements — built for accuracy, speed, and reliability.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 font-semibold rounded-md hover:bg-gray-100 transition transform hover:-translate-y-0.5"
          >
            CONTACT US
            <FaArrowRight />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919826420653?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20manufacturing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/60 px-8 py-4 font-semibold rounded-md hover:bg-white hover:text-primary transition transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-lg" />
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
