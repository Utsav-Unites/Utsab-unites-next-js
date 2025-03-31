"use client"

export function VideoModal() {
  const closeVideoModal = () => {
    const videoIframe = document.getElementById("video-iframe") as HTMLIFrameElement
    const videoModal = document.getElementById("video-modal")

    if (videoIframe && videoModal) {
      videoIframe.src = ""
      videoModal.classList.add("hidden")
      document.body.style.overflow = "auto"
    }
  }

  return (
    <div id="video-modal" className="fixed inset-0 bg-black/90 flex justify-center items-center hidden z-50 p-4">
      <div className="relative w-full max-w-4xl">
        <button
          className="absolute -top-12 right-0 text-white text-3xl z-50 hover:text-indigo-300 transition-colors"
          onClick={closeVideoModal}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden">
          <iframe
            id="video-iframe"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

