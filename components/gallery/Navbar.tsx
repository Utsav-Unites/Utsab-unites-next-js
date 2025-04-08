"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full p-5 flex justify-between items-center z-10">
      <Link href="#" legacyBehavior>
        <a className="font-bold text-2xl text-white flex items-center gap-2 no-underline">
          <i className="fas fa-camera-retro text-festival-primary"></i> Utsav Unites
        </a>
      </Link>

      <div className={`nav-links flex gap-6 md:static fixed top-0 ${mobileMenuOpen ? 'right-0' : '-right-full'} w-4/5 h-screen bg-festival-dark md:w-auto md:h-auto md:bg-transparent flex-col md:flex-row justify-center md:justify-start items-center transition-all duration-500 z-50`}>
        <Link href="/" legacyBehavior>
          <a
            className="text-white no-underline font-medium transition-all duration-300 relative text-base hover:text-festival-primary"
            onClick={closeMobileMenu}
          >
            Home
          </a>
        </Link>

        <Link href="/gallery" legacyBehavior>
          <a
            className="text-white no-underline font-medium transition-all duration-300 relative text-base hover:text-festival-primary"
            onClick={closeMobileMenu}
          >
            Gallery
          </a>
        </Link>

        <a
          href="#contact"
          className="text-white no-underline font-medium transition-all duration-300 relative text-base hover:text-festival-primary"
          onClick={closeMobileMenu}
        >
          Contact
        </a>
      </div>

      <button
        className="md:hidden bg-transparent border-0 text-white text-2xl cursor-pointer z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;
