"use client"

export default function GallerySection() {
  const openFullscreen = (img: HTMLImageElement) => {
    const fullscreenImg = document.getElementById("fullscreen-img") as HTMLImageElement
    const fullscreen = document.getElementById("fullscreen")

    if (fullscreenImg && fullscreen && img.src) {
      fullscreenImg.src = img.src
      fullscreen.classList.remove("hidden")
      setTimeout(() => {
        fullscreen.classList.remove("opacity-0")
        fullscreenImg.classList.remove("scale-90")
      }, 10)
      document.body.style.overflow = "hidden"
    }
  }

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-100 dark:bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-200 dark:bg-indigo-900/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-200 dark:bg-purple-900/30 blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-12 heading-font">
          Famous Pujas
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          <img
            src="https://assets.onecompiler.app/4362nvr75/439fm45cr/pal.jpg"
            alt="Puja 1"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full p-1 puja-thumbnail cursor-pointer"
            onClick={(e) => openFullscreen(e.target as HTMLImageElement)}
          />

          <img
            src="https://assets.onecompiler.app/4362nvr75/436bvmy94/WhatsApp%20Image%202025-01-17%20at%2020.43.12_e66aa031.jpg"
            alt="Puja 2"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full p-1 puja-thumbnail cursor-pointer"
            onClick={(e) => openFullscreen(e.target as HTMLImageElement)}
          />

          <img
            src="https://assets.onecompiler.app/4362nvr75/436bvvcvg/WhatsApp%20Image%202025-01-17%20at%2020.43.11_9e2b837f.jpg"
            alt="Puja 3"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full p-1 puja-thumbnail cursor-pointer"
            onClick={(e) => openFullscreen(e.target as HTMLImageElement)}
          />

          <img
            src="https://assets.onecompiler.app/4362nvr75/4377z58ue/WhatsApp%20Image%202025-01-26%20at%2021.25.53_4c2b419b.jpg"
            alt="Puja 4"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full p-1 puja-thumbnail cursor-pointer"
            onClick={(e) => openFullscreen(e.target as HTMLImageElement)}
          />

          <img
            src="https://assets.onecompiler.app/4362nvr75/436am4ert/jaghadhatri%20puja%206.png"
            alt="Puja 5"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full p-1 puja-thumbnail cursor-pointer"
            onClick={(e) => openFullscreen(e.target as HTMLImageElement)}
          />
        </div>
      </div>
    </section>
  )
}

