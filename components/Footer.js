import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-muted">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="logo-text text-primary text-2xl tracking-widest mb-4">
            Fakhri Die Makers
          </h3>

          <p className="text-sm leading-relaxed">
            Manufacturer of precision laser cutting dies and corrugation
            solutions for the packaging industry. Quality, accuracy, and
            reliability since day one.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-background font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-background font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Laser Cutting Dies</li>
            <li>Corrugation Dies</li>
            <li>Custom Fabrication</li>
            <li>Packaging Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-background font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              Industrial Area, India
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              +91 98264 20653
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              info@yourcompany.com
            </li>
            <li>
              <a
                href="https://wa.me/919826420653"
                target="_blank"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>
            © {new Date().getFullYear()} Laser Die & Corrugation. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0">Designed & Developed with Precision</p>
        </div>
      </div>
    </footer>
  );
}
