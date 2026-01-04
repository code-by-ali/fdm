import ServiceCard from "./ServiceCard";
import { FaLaserDiecut, FaBoxes, FaCogs } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiCutDiamond } from "react-icons/gi";

export default function ServicesSection() {
  const services = [
    {
      title: "Laser Die Cutting",
      desc: "Precision laser cutting dies engineered for accuracy and durability. Perfect for high-volume production with consistent quality.",
      icon: GiCutDiamond,
    },
    {
      title: "Corrugation Dies",
      desc: "Custom corrugation dies for packaging and box manufacturing. Built to withstand demanding industrial applications.",
      icon: FaBoxes,
    },
    {
      title: "Custom Fabrication",
      desc: "Tailored fabrication solutions for industrial requirements. From concept to completion, we bring your vision to life.",
      icon: FaCogs,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted">
            Industry-leading solutions for precision manufacturing and die cutting
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => (
            <div 
              key={i}
              className="animate-fadeIn"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}