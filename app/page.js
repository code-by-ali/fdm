import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  const services = [
    {
      title: "Laser Die Cutting",
      desc: "Precision laser cutting dies engineered for accuracy and durability.",
    },
    {
      title: "Corrugation Dies",
      desc: "Custom corrugation dies for packaging and box manufacturing.",
    },
    {
      title: "Custom Fabrication",
      desc: "Tailored fabrication solutions for industrial requirements.",
    },
  ];

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Team />
      <CTA />
    </>
  );
}
