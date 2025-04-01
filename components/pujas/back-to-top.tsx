"use client"

import { useState, useEffect } from "react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-premium-accent to-blue-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
        isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
      }`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

