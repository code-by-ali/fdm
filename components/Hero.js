export default function Hero() {
  return (
    <section className="relative w-full bg-black">
      {/* Video Container */}
      <div className="w-full h-[60vh] md:h-screen relative overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1062345072?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>

        {/* Overlay only for desktop */}
        <div className="hidden md:block absolute inset-0 bg-black/60"></div>

        {/* Text overlay only for md+ */}
        <div className="hidden md:flex absolute inset-0 items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Precision Laser
                <br />
                Die & Corrugation
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                High-precision laser die cutting & corrugation solutions built
                for modern industrial manufacturing.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="/contact"
                  className="bg-red-700 hover:bg-red-800 px-6 py-3 text-sm font-semibold text-white rounded-md"
                >
                  REQUEST QUOTE
                </a>
                <a
                  href="/services"
                  className="border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black rounded-md transition"
                >
                  OUR SERVICES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text below video for mobile */}
      <div className="md:hidden px-6 py-8 text-center bg-black text-white">
        <h1 className="text-3xl font-bold leading-tight">
          Precision Laser
          <br />
          Die & Corrugation
        </h1>
        <p className="mt-4 text-base text-gray-200">
          High-precision laser die cutting & corrugation solutions built for
          modern industrial manufacturing.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="/contact"
            className="bg-red-700 hover:bg-red-800 px-6 py-3 text-sm font-semibold text-white rounded-md"
          >
            REQUEST QUOTE
          </a>
          <a
            href="/services"
            className="border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black rounded-md transition"
          >
            OUR SERVICES
          </a>
        </div>
      </div>
    </section>
  );
}
