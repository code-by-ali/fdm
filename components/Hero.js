export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* Background Video */}
      <iframe
        src="https://player.vimeo.com/video/1062345072?autoplay=1&muted=1&loop=1&background=1&playsinline=1"
        className="absolute inset-0 w-full h-full object-cover scale-[1.4] sm:scale-[1.25]"
        frameBorder="0"
        allow="autoplay; fullscreen"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Centered Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl md:max-w-3xl">
            <h1 className="font-bold text-white leading-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl">
              Precision Laser
              <br />
              Die & Corrugation
            </h1>

            <p className="mt-4 text-gray-200
              text-sm
              sm:text-base
              md:text-lg">
              High-precision laser die cutting and corrugation solutions
              built for modern industrial manufacturing.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex justify-center items-center
                  bg-red-700 hover:bg-red-800
                  px-6 py-3
                  text-sm font-semibold text-white"
              >
                REQUEST QUOTE
              </a>

              <a
                href="/services"
                className="inline-flex justify-center items-center
                  border border-white
                  px-6 py-3
                  text-sm font-semibold text-white
                  hover:bg-white hover:text-black transition"
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
