export default function SocialMediaSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl font-bold mb-8 heading-font dark:text-white">Follow Us</h3>
        <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-6 max-w-4xl mx-auto glass-effect">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg social-card hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center social-icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png?20140103173026"
                  alt="Facebook"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">Facebook</p>
              <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">1.2M</span>
            </div>
            <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg social-card hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center social-icon">
                <img
                  src="https://banner2.cleanpng.com/20180619/sul/aa6xrbjzf.webp"
                  alt="YouTube"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">YouTube</p>
              <span className="text-xl font-semibold text-red-600 dark:text-red-400">2.5M</span>
            </div>
            <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg social-card hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center social-icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png"
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">Instagram</p>
              <span className="text-xl font-semibold text-pink-600 dark:text-pink-400">800K</span>
            </div>
            <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg social-card hover:bg-gray-100 dark:hover:bg-gray-900/20 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center social-icon">
                <img
                  src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1741520011~exp=1741523611~hmac=d1e9a7b3c1a252bafc38285c2b10cbf02ac681fcbfd1e3b360fb12b82246be08&w=900"
                  alt="X"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">X</p>
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-300">500K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

