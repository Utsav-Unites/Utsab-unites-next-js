"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-premium-dark z-[999] flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-gradient-to-r from-premium-gold to-premium-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute inset-2 bg-premium-dark rounded-full flex items-center justify-center">
          <svg
            className="w-16 h-16 animate-spin text-premium-gold"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
      <p className="mt-6 text-premium-gold font-medium text-lg tracking-wider">Loading Premium Experience</p>
    </div>
  )
}

