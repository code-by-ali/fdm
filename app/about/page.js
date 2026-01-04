export default function About() {
  return (
    <section className="bg-background">
      {/* ================= Top Section ================= */}
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Text Content */}
        <div className="animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            About Our Company
          </h1>

          <p className="mt-6 text-lg text-muted leading-relaxed">
            We are a trusted manufacturer of high-precision laser cutting dies
            and corrugation solutions, serving packaging and industrial sectors
            with uncompromising quality.
          </p>

          <p className="mt-4 text-muted leading-relaxed">
            With advanced machinery, skilled professionals, and a commitment
            to continuous improvement, we deliver tooling solutions that meet
            exact specifications and perform reliably in demanding environments.
          </p>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Precision Engineering",
                desc: "Accuracy, durability, and consistency in every tool.",
              },
              {
                title: "Quality Assurance",
                desc: "Strict quality checks at every production stage.",
              },
              {
                title: "Industry Experience",
                desc: "Years of expertise serving packaging manufacturers.",
              },
              {
                title: "Customer Focus",
                desc: "Solutions tailored to real production needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-4 border-primary pl-4"
              >
                <h3 className="font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg"
            alt="Manufacturing facility"
            className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
          />

          {/* Subtle accent */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl hidden lg:block"></div>
        </div>
      </div>

      {/* ================= Stats Section ================= */}
      <div className="bg- py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            ["10+", "Years of Experience"],
            ["500+", "Projects Delivered"],
            ["100%", "Quality Commitment"],
            ["24/7", "Customer Support"],
          ].map(([value, label]) => (
            <div key={label}>
              <h3 className="text-3xl font-bold text-primary">
                {value}
              </h3>
              <p className="mt-2 text-muted text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
