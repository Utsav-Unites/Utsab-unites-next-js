"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const images = document.querySelectorAll(".hero-slide")
      images[currentIndex].classList.remove("active")
      const nextIndex = (currentIndex + 1) % images.length
      images[nextIndex].classList.add("active")
      setCurrentIndex(nextIndex)
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="hero relative h-screen min-h-[600px] overflow-hidden flex justify-center items-center text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 z-10"></div>

      {/* Hero Slides - Properly Aligned */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://assets.onecompiler.app/4362nvr75/436am4ert/jaghadhatri%20puja%206.png"
          className="hero-slide active absolute inset-0 w-full h-full object-cover object-center"
          alt="Festival Image"
        />
        <img
          src="https://assets.onecompiler.app/4362nvr75/436bvmy94/WhatsApp%20Image%202025-01-17%20at%2020.43.12_e66aa031.jpg"
          className="hero-slide absolute inset-0 w-full h-full object-cover object-center"
          alt="Culture Image"
        />
        <img
          src="https://assets.onecompiler.app/4362nvr75/4377z58ue/WhatsApp%20Image%202025-01-26%20at%2021.25.53_4c2b419b.jpg"
          className="hero-slide absolute inset-0 w-full h-full object-cover object-center"
          alt="Tradition Image"
        />
      </div>

      {/* Hero Content */}
      <div
        className="hero-content relative z-20 text-white px-4 max-w-4xl mx-auto transform transition-all duration-1000"
        id="hero-content"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 heading-font">
          <span className="gradient-text bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-600">
            Celebrating Culture & Unity
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover stories, traditions, and voices from around the world.
        </p>
        <div>
          <button className="explore-btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:shadow-xl">
            Explore the Festivities
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

