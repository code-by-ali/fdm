export default function WhyChooseUs() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Why Choose Us</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            "High Precision Manufacturing",
            "Advanced Laser Technology",
            "On-Time Delivery",
            "Industry Expertise",
          ].map((item, i) => (
            <div key={i} className="p-6">
              <div className="text-red-600 text-4xl font-bold">0{i + 1}</div>
              <p className="mt-4 text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
