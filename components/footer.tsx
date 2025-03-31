import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors heading-font flex items-center mb-4"
              >
                <span className="mr-2">🎉</span>
                Utsav Unites
              </Link>
              <p className="mb-6 max-w-md">
                Celebrating Culture & Unity through digital experiences and bringing communities together.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 heading-font">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-indigo-200 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-indigo-200 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#videos" className="hover:text-indigo-200 transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="#pujas" className="hover:text-indigo-200 transition-colors">
                    Pujas
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-indigo-200 transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 heading-font">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-indigo-200 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-200 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-200 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-200 transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm">&copy; 2025 Utsav Unites. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

