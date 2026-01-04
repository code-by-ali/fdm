const team = [
  { name: "John Doe", role: "Founder" },
  { name: "John Doe", role: "Operations Head" },
  { name: "John Doe", role: "Production Manager" },
];

export default function Team() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Leadership
          </h2>
          <p className="mt-4 text-gray-600">
            Experienced professionals driving precision, quality, and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <img
                  src={`https://i.pravatar.cc/300?img=${i + 12}`}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-primary transition"
                />
              </div>

              {/* Name */}
              <h4 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h4>

              {/* Role */}
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>

              {/* Divider */}
              <div className="mt-4 h-0.5 w-10 bg-primary mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
