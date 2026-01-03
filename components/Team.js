export default function Team() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Our Leadership
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Founder", "Operations Head", "Production Manager"].map(
            (role, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900">
                  John Doe
                </h4>
                <p className="text-sm text-gray-600">{role}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
