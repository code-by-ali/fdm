export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Vimeo Background */}
      <iframe
        src="https://player.vimeo.com/video/1062345072?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
        className="absolute top-0 left-0 w-full h-full scale-125"
        frameBorder="0"
        allow="autoplay; fullscreen"
      ></iframe>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Precision Laser
              <br />
              Die & Corrugation
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              High-precision laser dies and corrugation solutions engineered
              for the packaging and manufacturing industry.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/contact"
                className="bg-red-700 hover:bg-red-800 px-8 py-4 text-sm font-semibold tracking-wide"
              >
                REQUEST QUOTE
              </a>
              <a
                href="/services"
                className="border border-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                OUR SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
