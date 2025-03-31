"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function FullscreenImageModal() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const pujaImages = [
    "https://assets.onecompiler.app/4362nvr75/439fm45cr/pal.jpg",
    "https://assets.onecompiler.app/4362nvr75/436bvmy94/WhatsApp%20Image%202025-01-17%20at%2020.43.12_e66aa031.jpg",
    "https://assets.onecompiler.app/4362nvr75/436bvvcvg/WhatsApp%20Image%202025-01-17%20at%2020.43.11_9e2b837f.jpg",
    "https://assets.onecompiler.app/4362nvr75/4377z58ue/WhatsApp%20Image%202025-01-26%20at%2021.25.53_4c2b419b.jpg",
    "https://assets.onecompiler.app/4362nvr75/436am4ert/jaghadhatri%20puja%206.png",
  ]

  const closeFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const fullscreen = document.getElementById("fullscreen")
    const fullscreenImg = document.getElementById("fullscreen-img") as HTMLImageElement

    if (fullscreen && fullscreenImg) {
      fullscreen.classList.add("opacity-0")
      fullscreenImg.classList.add("scale-90")
      setTimeout(() => {
        fullscreen.classList.add("hidden")
        document.body.style.overflow = "auto"
      }, 300)
    }
  }

  const navigateFullscreen = (direction: number) => {
    const fullscreenImg = document.getElementById("fullscreen-img") as HTMLImageElement
    if (!fullscreenImg) return

    const newIndex = (currentImageIndex + direction + pujaImages.length) % pujaImages.length
    setCurrentImageIndex(newIndex)

    fullscreenImg.classList.add("scale-90")
    setTimeout(() => {
      fullscreenImg.src = pujaImages[newIndex]
      fullscreenImg.classList.remove("scale-90")
    }, 150)
  }

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen()
      if (e.key === "ArrowLeft") navigateFullscreen(-1)
      if (e.key === "ArrowRight") navigateFullscreen(1)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentImageIndex])

  return (
    <div
      id="fullscreen"
      className="fixed inset-0 bg-black/90 flex justify-center items-center hidden z-50 cursor-zoom-out transition-opacity duration-300 opacity-0"
      onClick={closeFullscreen}
    >
      <div className="relative max-w-4xl w-full px-4">
        <button
          className="absolute -top-12 right-0 text-white text-3xl z-50 hover:text-indigo-300 transition-colors"
          onClick={(e) => closeFullscreen(e)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="overflow-hidden rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <img
            id="fullscreen-img"
            className="max-w-full max-h-[90vh] object-contain transform scale-90 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="p-2 text-white hover:text-indigo-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              navigateFullscreen(-1)
            }}
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button
            className="p-2 text-white hover:text-indigo-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              navigateFullscreen(1)
            }}
          >
            <i className="fas fa-chevron-right text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

