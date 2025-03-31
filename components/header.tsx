"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      const header = document.getElementById("main-header")
      const headerHeight = header?.offsetHeight || 0

      if (currentScroll <= 0) {
        setIsScrolled(false)
        if (header) header.style.transform = "translateY(0)"
        return
      }

      setIsScrolled(true)

      if (currentScroll > lastScroll && currentScroll > headerHeight) {
        // Scroll down - hide header
        if (header) header.style.transform = `translateY(-${headerHeight}px)`
      } else if (currentScroll < lastScroll) {
        // Scroll up - show header
        if (header) header.style.transform = "translateY(0)"
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm dark:bg-slate-800/80 dark:shadow-slate-900/50 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors heading-font flex items-center"
        >
          <span className="mr-2">🎉</span>
          Utsav Unites
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-1">
            <li>
              <Link
                href="/"
                className="relative px-4 py-2 text-gray-800 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors group"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#gallery"
                className="relative px-4 py-2 text-gray-800 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors group"
              >
                <span>Gallery</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#videos"
                className="relative px-4 py-2 text-gray-800 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors group"
              >
                <span>Video</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="pujas"
                className="relative px-4 py-2 text-gray-800 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors group"
              >
                <span>Pujalist</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="relative px-4 py-2 text-gray-800 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors group"
              >
                <span>Team</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-indigo-600 dark:text-indigo-400 focus:outline-none p-2 rounded-lg bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border border-indigo-100 dark:border-slate-600 shadow-sm hover:shadow-md transition-all"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`mobile-menu md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg shadow-xl ${isMenuOpen ? "open" : ""}`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
          <Link
            href="/"
            className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="#gallery"
            className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            href="#videos"
            className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
            onClick={closeMenu}
          >
            Video
          </Link>
          <Link
            href="#pujas"
            className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
            onClick={closeMenu}
          >
            Pujalist
          </Link>
          <Link
            href="#team"
            className="block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
            onClick={closeMenu}
          >
            Team
          </Link>
        </div>
      </div>
    </header>
  )
}

