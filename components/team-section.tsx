export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white heading-font">
          🌟 Meet Our Team 🌟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-slate-700 team-card">
            <div className="relative w-full h-48 bg-gradient-to-r from-pink-500 to-purple-500 flex justify-center items-center overflow-hidden">
              <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover team-image"
                src="https://assets.onecompiler.app/4362nvr75/43b9mzgrt/ron.png"
                alt="Saurashis Baral"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Saurashis Baral</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">CoFounder & Developer</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
                A visionary leader with a passion for innovation and expert for using AI tools.
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a
                  href="https://www.facebook.com/share/1Fik4eoZfq/"
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300 transition-colors"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition-colors"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-slate-700 team-card">
            <div className="relative w-full h-48 bg-gradient-to-r from-blue-500 to-teal-500 flex justify-center items-center overflow-hidden">
              <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover team-image"
                src="https://assets.onecompiler.app/4362nvr75/43b9mzgrt/dev%202.png"
                alt="Hritam Das"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hritam Das</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">CoFounder & Developer</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
                Expert in problem solving and digital marketing strategies.
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a
                  href="https://www.facebook.com/Hritam Das"
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300 transition-colors"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition-colors"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-slate-700 team-card">
            <div className="relative w-full h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex justify-center items-center overflow-hidden">
              <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover team-image"
                src="https://assets.onecompiler.app/4362nvr75/43b9mzgrt/dev%201.jpg"
                alt="Soham Saha"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Soham Saha</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Developer</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
                Passionate about coding and innovative solutions.
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a
                  href="https://www.facebook.com/Soham Saha"
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300 transition-colors"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition-colors"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-slate-700 team-card">
            <div className="relative w-full h-48 bg-gradient-to-r from-green-500 to-lime-500 flex justify-center items-center overflow-hidden">
              <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover team-image"
                src="https://via.placeholder.com/150"
                alt="Michael Lee"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Michael Lee</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Lead Developer</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-2">
                Passionate about coding and innovative solutions.
              </p>
              <div className="flex justify-center mt-4 space-x-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300 transition-colors"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

