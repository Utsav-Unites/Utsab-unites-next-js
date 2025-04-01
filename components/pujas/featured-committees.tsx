export default function FeaturedCommittees() {
    return (
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 dark:text-white">
            Featured <span className="bg-gradient-to-r from-premium-gold to-yellow-300 gradient-text">Jubilee</span>{" "}
            Committees
          </h2>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Card 1 */}
          <div className="bg-white dark:bg-premium-deep rounded-2xl shadow-xl overflow-hidden border border-premium-gold/20 hover:border-premium-gold/50 transition-all duration-300 hover-scale">
            <div className="relative h-48 bg-gradient-to-r from-premium-dark to-premium-accent flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603383928958-5b844f4301f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10 text-center p-4">
                <div className="w-16 h-16 bg-premium-gold rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <i className="fas fa-crown text-2xl text-premium-dark"></i>
                </div>
                <h3 className="text-xl font-bold text-white">Laxmigunj Kaporepotti</h3>
                <p className="text-premium-gold font-medium">260 Years</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-premium-gold/10 text-premium-gold text-xs font-medium rounded-full">
                    Platinum Jubilee
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                One of the oldest continuously running puja committees in Chandannagar with rich cultural heritage.
              </p>
              <a
                href="/chandannagar/featured1"
                className="text-sm font-medium text-premium-accent hover:text-premium-accent/80 transition-colors flex items-center"
              >
                View Details <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </a>
            </div>
          </div>
  
          {/* Featured Card 2 */}
          <div className="bg-white dark:bg-premium-deep rounded-2xl shadow-xl overflow-hidden border border-premium-gold/20 hover:border-premium-gold/50 transition-all duration-300 hover-scale">
            <div className="relative h-48 bg-gradient-to-r from-premium-dark to-purple-600 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10 text-center p-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <i className="fas fa-gem text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white">Bhadreswar Gunj</h3>
                <p className="text-purple-300 font-medium">217 Years</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-purple-500/10 text-purple-500 text-xs font-medium rounded-full">
                    Diamond Jubilee
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Renowned for its artistic idols and grand celebrations in the heart of Bhadreswar.
              </p>
              <a
                href="/bhadreswar/featured1"
                className="text-sm font-medium text-premium-accent hover:text-premium-accent/80 transition-colors flex items-center"
              >
                View Details <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </a>
            </div>
          </div>
  
          {/* Featured Card 3 */}
          <div className="bg-white dark:bg-premium-deep rounded-2xl shadow-xl overflow-hidden border border-premium-gold/20 hover:border-premium-gold/50 transition-all duration-300 hover-scale">
            <div className="relative h-48 bg-gradient-to-r from-premium-dark to-rose-600 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
              <div className="relative z-10 text-center p-4">
                <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <i className="fas fa-award text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white">Gourhati, Tetultala</h3>
                <p className="text-rose-300 font-medium">233 Years</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-rose-500/10 text-rose-500 text-xs font-medium rounded-full">
                    Golden Jubilee
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Known for its traditional rituals and award-winning pandal designs year after year.
              </p>
              <a
                href="/chandannagar/featured2"
                className="text-sm font-medium text-premium-accent hover:text-premium-accent/80 transition-colors flex items-center"
              >
                View Details <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  