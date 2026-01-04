import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Laser Cutting Dies",
    description:
      "High-precision laser cutting dies engineered for accuracy, durability, and consistent performance in packaging and industrial applications.",
    image: "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg",
  },
  {
    title: "Corrugation Dies",
    description:
      "Custom corrugation die solutions designed to meet exact specifications for box manufacturing and corrugated packaging.",
    image: "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
  },
  {
    title: "Rotary Dies",
    description:
      "Precision rotary dies manufactured to deliver clean cuts, long tool life, and reliable performance at high production speeds.",
    image: "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg",
  },
  {
    title: "Flat Bed Dies",
    description:
      "Flat bed cutting dies developed for flexibility, precision, and superior cutting quality across a wide range of materials.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
  {
    title: "Custom Fabrication",
    description:
      "End-to-end custom fabrication services tailored to unique manufacturing and tooling requirements.",
    image: "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg",
  },
  {
    title: "Packaging Tooling Solutions",
    description:
      "Complete tooling solutions to support efficient, accurate, and scalable packaging production workflows.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
];

export default function Services() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted">
            Precision-engineered die cutting and corrugation solutions built to
            meet the highest industry standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const whatsappMessage = encodeURIComponent(
              `Hello, I’m interested in ${service.title}. Please share more details.`
            );

            return (
              <div
                key={service.title}
                className="bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Row */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <a
                      href="/contact"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Request Quote →
                    </a>

                    <a
                      href={`https://wa.me/9826420653?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp about ${service.title}`}
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white transition"
                    >
                      <FaWhatsapp className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
