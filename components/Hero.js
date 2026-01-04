export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Video Wrapper */}
      <div className="relative w-full aspect-video md:aspect-auto md:h-screen overflow-hidden">
        {/* Vimeo iframe */}
        <iframe
          src="https://player.vimeo.com/video/1062345072?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
          className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%]"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Hero Video"
        />

        {/* Overlay (all screens, lighter on mobile) */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/60"></div>

        {/* Desktop Text Overlay */}
        <div className="hidden md:flex absolute inset-0 items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white animate-fadeIn">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Precision Laser
                <br />
                Die & Corrugation
              </h1>

              <p className="mt-5 text-lg lg:text-xl text-gray-200">
                High-precision laser die cutting & corrugation solutions
                engineered for modern industrial manufacturing.
              </p>

              <div className="mt-8 flex gap-5">
                <a
                  href="/contact"
                  className="bg-primary hover:bg-red-800 px-7 py-3 text-sm font-semibold rounded-md transition"
                >
                  REQUEST QUOTE
                </a>

                <a
                  href="/services"
                  className="border border-white px-7 py-3 text-sm font-semibold rounded-md hover:bg-white hover:text-black transition"
                >
                  OUR SERVICES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content BELOW video */}
      <div className="md:hidden px-6 py-10 bg-black text-white text-center">
        <h1 className="text-2xl font-bold leading-snug">
          Precision Laser
          <br />
          Die & Corrugation
        </h1>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          High-precision laser die cutting & corrugation solutions built
          for modern industrial manufacturing.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <a
            href="/contact"
            className="bg-primary px-6 py-3 text-sm font-semibold rounded-md"
          >
            REQUEST QUOTE
          </a>

          <a
            href="/services"
            className="border border-white px-6 py-3 text-sm font-semibold rounded-md"
          >
            OUR SERVICES
          </a>
        </div>
      </div>
    </section>
  );
}
