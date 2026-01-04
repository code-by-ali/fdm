import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServicesSection from "@/components/ServicesSection";
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
      <ServicesSection />
      <WhyChooseUs />
      <Team />
      <CTA />
    </>
  );
}
