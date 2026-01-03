import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-red-700 text-xl font-bold mb-4">
            Laser Die & Corrugation
          </h3>
          <p className="text-sm leading-relaxed">
            Manufacturer of precision laser cutting dies and corrugation
            solutions for the packaging industry. Quality, accuracy, and
            reliability since day one.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
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
                  className="hover:text-red-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Laser Cutting Dies</li>
            <li>Corrugation Dies</li>
            <li>Custom Fabrication</li>
            <li>Packaging Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Industrial Area, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@yourcompany.com</li>
            <li>
              <a
                href="https://wa.me/919876543210"
                className="hover:text-green-500 transition-colors"
                target="_blank"
              >
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
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
