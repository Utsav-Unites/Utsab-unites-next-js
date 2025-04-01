"use client"

import { useState } from "react"

export default function PujaHero() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0">
        <source src="https://assets.onecompiler.app/4362nvr75/43d7kyhak/vid.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-premium-dark/90 via-premium-dark/70 to-premium-dark/50 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 text-center">
        <div className="bg-white/10 dark:bg-premium-deep/20 rounded-2xl p-8 sm:p-12 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-premium-dark/50 text-premium-gold px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-lg">
            <i className="fas fa-crown mr-2"></i> Premium Experience
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-premium-gold via-premium-accent to-premium-gold gradient-text">
              Jagadhatri Puja
            </span>{" "}
            <br />
            <span className="text-white dark:text-premium-light">Committee Directory</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 dark:text-gray-400">
            Discover the most comprehensive collection of premium puja committees in Chandannagar and Bhadreswar
          </p>

          {/* Premium Search */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search committees, locations, jubilees..."
                className="w-full py-4 px-6 rounded-xl bg-white/10 dark:bg-premium-deep/20 border border-white/10 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-premium-accent focus:border-transparent text-white dark:text-gray-300 placeholder-white/80 dark:placeholder-gray-400 pr-14 shadow-lg transition-all duration-300 focus:shadow-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-premium-gold hover:text-white transition-colors">
                <i className="fas fa-search text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

