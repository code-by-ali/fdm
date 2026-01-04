import {
  FaCrosshairs,
  FaBolt,
  FaClock,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    title: "High Precision Manufacturing",
    icon: FaCrosshairs,
  },
  {
    title: "Advanced Laser Technology",
    icon: FaBolt,
  },
  {
    title: "On-Time Delivery",
    icon: FaClock,
  },
  {
    title: "Industry Expertise",
    icon: FaAward,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            Why Choose{" "}
            <span className="text-primary">Fakhri Die Makers</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Precision-driven manufacturing backed by technology, expertise,
            and reliability.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-gray-800/60 backdrop-blur rounded-2xl p-8 text-center border border-gray-700 hover:border-primary transition-all duration-300"
              >
                {/* Icon */}
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5 group-hover:scale-110 transition">
                  <Icon size={26} />
                </div>

                {/* Index */}
                <div className="text-xs tracking-widest text-gray-500">
                  0{i + 1}
                </div>

                {/* Title */}
                <h4 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h4>

                {/* Accent */}
                <div className="mt-4 h-0.5 w-8 bg-primary mx-auto rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
