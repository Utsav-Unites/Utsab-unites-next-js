"use client"

export default function VideoSection() {
  const openVideoModal = (videoUrl: string) => {
    const videoIframe = document.getElementById("video-iframe") as HTMLIFrameElement
    const videoModal = document.getElementById("video-modal")

    if (videoIframe && videoModal) {
      videoIframe.src = videoUrl + "?autoplay=1"
      videoModal.classList.remove("hidden")
      document.body.style.overflow = "hidden"
    }
  }

  return (
    <section id="videos" className="py-12 md:py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center heading-font dark:text-white">Videos & Reels</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Video 1 */}
          <div className="video-container" onClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")}>
            <img
              src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
              className="w-full h-48 sm:h-56 object-cover"
              alt="Festival Highlights"
            />
            <div className="video-overlay">
              <h3 className="text-xl font-bold mb-2 text-white">Festival Highlights</h3>
              <p className="text-sm text-gray-200">Watch the best moments from our latest festival</p>
            </div>
            <div className="play-button">
              <i className="fas fa-play text-indigo-600 text-2xl"></i>
            </div>
          </div>

          {/* Video 2 */}
          <div className="video-container" onClick={() => openVideoModal("https://www.youtube.com/embed/3JZ_D3ELwOQ")}>
            <img
              src="https://i.ytimg.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg"
              className="w-full h-48 sm:h-56 object-cover"
              alt="Cultural Performances"
            />
            <div className="video-overlay">
              <h3 className="text-xl font-bold mb-2 text-white">Cultural Performances</h3>
              <p className="text-sm text-gray-200">Traditional dances from around the world</p>
            </div>
            <div className="play-button">
              <i className="fas fa-play text-indigo-600 text-2xl"></i>
            </div>
          </div>

          {/* Video 3 */}
          <div className="video-container" onClick={() => openVideoModal("https://www.youtube.com/embed/9bZkp7q19f0")}>
            <img
              src="https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg"
              className="w-full h-48 sm:h-56 object-cover"
              alt="Behind the Scenes"
            />
            <div className="video-overlay">
              <h3 className="text-xl font-bold mb-2 text-white">Behind the Scenes</h3>
              <p className="text-sm text-gray-200">How we prepare for the big event</p>
            </div>
            <div className="play-button">
              <i className="fas fa-play text-indigo-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:shadow-xl">
            View More Videos
          </button>
        </div>
      </div>
    </section>
  )
}

