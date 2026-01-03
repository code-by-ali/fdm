const services = [
  {
    title: "Laser Cutting Dies",
    description:
      "High-precision laser cutting dies engineered for accuracy, durability, and consistent performance in packaging and industrial applications.",
    image:
      "https://images.pexels.com/photos/257997/pexels-photo-257997.jpeg",
  },
  {
    title: "Corrugation Dies",
    description:
      "Custom corrugation die solutions designed to meet exact specifications for box manufacturing and corrugated packaging.",
    image:
      "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
  },
  {
    title: "Rotary Dies",
    description:
      "Precision rotary dies manufactured to deliver clean cuts, long tool life, and reliable performance at high production speeds.",
    image:
      "https://images.pexels.com/photos/209251/industrial-plant-industry-factory-209251.jpeg",
  },
  {
    title: "Flat Bed Dies",
    description:
      "Flat bed cutting dies developed for flexibility, precision, and superior cutting quality across a wide range of materials.",
    image:
      "https://images.pexels.com/photos/162553/industry-machine-technology-automation-162553.jpeg",
  },
  {
    title: "Custom Fabrication",
    description:
      "End-to-end custom fabrication services tailored to unique manufacturing and tooling requirements.",
    image:
      "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg",
  },
  {
    title: "Packaging Tooling Solutions",
    description:
      "Complete tooling solutions to support efficient, accurate, and scalable packaging production workflows.",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We provide precision-engineered die cutting and corrugation
            solutions built to meet the highest industry standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-5">
                  <a
                    href="/contact"
                    className="inline-block text-sm font-semibold text-red-600 hover:text-red-700"
                  >
                    Request Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
