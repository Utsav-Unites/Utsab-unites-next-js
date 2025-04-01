export default function PujaFooter() {
    return (
      <footer className="bg-premium-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-display font-bold text-premium-gold mb-4">Puja Committee Directory</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              The most comprehensive directory of Jagadhatri Puja committees in West Bengal.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2023 Puja Committee Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  