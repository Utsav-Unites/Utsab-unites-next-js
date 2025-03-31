export default function ArticlesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12 md:mb-16 heading-font">
          Latest Stories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-js="cards-container">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-white/30 dark:border-slate-600/30 card-hover-effect">
            <div className="h-48 sm:h-56 overflow-hidden relative">
              <img
                src="https://assets.onecompiler.app/4362nvr75/436am4ert/jaghadhatri%20puja%206.png"
                alt="Story"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-3">
                Festival of Colors
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Dive into the vibrant celebrations of Holi across the globe.
              </p>
              <a href="#" className="inline-block">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 group">
                  <span className="relative z-10">Read More</span>
                  <span className="absolute inset-0 bg-indigo-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-white/30 dark:border-slate-600/30 card-hover-effect">
            <div className="h-48 sm:h-56 overflow-hidden relative">
              <img
                src="https://assets.onecompiler.app/4362nvr75/436bvvcvg/WhatsApp%20Image%202025-01-17%20at%2020.43.11_9e2b837f.jpg"
                alt="Story"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-3">Culinary Journeys</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Explore unique recipes passed down through generations.
              </p>
              <a href="#" className="inline-block">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 group">
                  <span className="relative z-10">Read More</span>
                  <span className="absolute inset-0 bg-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-white/30 dark:border-slate-600/30 card-hover-effect">
            <div className="h-48 sm:h-56 overflow-hidden relative">
              <img
                src="https://assets.onecompiler.app/4362nvr75/439fm45cr/pal.jpg"
                alt="Story"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-3">
                Rhythms of Unity
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                How music brings communities together across borders.
              </p>
              <a href="#" className="inline-block">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 group">
                  <span className="relative z-10">Read More</span>
                  <span className="absolute inset-0 bg-green-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

