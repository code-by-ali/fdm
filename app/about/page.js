export default function About() {
  return (
    <section className="bg-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            About Our Company
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We are a trusted manufacturer of high-precision laser cutting dies
            and corrugation solutions, serving the packaging and industrial
            sectors with uncompromising quality and technical excellence.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With advanced machinery, skilled professionals, and a commitment
            to continuous improvement, we deliver tooling solutions that meet
            exact specifications and perform reliably in demanding production
            environments.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-semibold text-gray-900">
                Precision Engineering
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Engineered for accuracy, durability, and consistency.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-semibold text-gray-900">
                Quality Assurance
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Strict quality checks at every stage of production.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-semibold text-gray-900">
                Industry Experience
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Years of expertise serving packaging manufacturers.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="font-semibold text-gray-900">
                Customer Focus
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Solutions tailored to your production needs.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg"
            alt="Manufacturing facility"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-red-600">10+</h3>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">500+</h3>
            <p className="mt-2 text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">100%</h3>
            <p className="mt-2 text-gray-600">Quality Commitment</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600">24/7</h3>
            <p className="mt-2 text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
