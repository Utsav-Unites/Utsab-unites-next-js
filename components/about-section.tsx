export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-800 relative overflow-hidden">
      {/* Wave Divider */}
      <div className="custom-shape-divider-bottom-1719842609">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Animated Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide uppercase mb-2 heading-font">
          <span className="gradient-text bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-600">Utsav Unites</span>
        </h2>
        <p className="text-lg md:text-xl italic tracking-widest opacity-80 mb-12 dark:text-gray-300">"Where Culture Meets Celebration!"</p>

        {/* Glass Morphism Content Box */}
        <div className="mt-8 glass-effect rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xl">
            <p className="text-lg sm:text-xl leading-relaxed dark:text-gray-300">
                Utsav Unites is more than an event—it's a <span className="font-bold gradient-text bg-gradient-to-r from-yellow-400 to-pink-500">movement</span>.  
                A place where traditions thrive, communities come together, and celebrations create lifelong memories.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-5 bg-white/60 dark:bg-slate-700/60 rounded-xl shadow-md card-hover-effect border border-white/30 dark:border-slate-600/30">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-2">🌏 Unity in Diversity</h3>
                    <p className="text-gray-700 dark:text-gray-300">We bring people from all backgrounds together through festivals.</p>
                </div>
                <div className="p-5 bg-white/60 dark:bg-slate-700/60 rounded-xl shadow-md card-hover-effect border border-white/30 dark:border-slate-600/30">
                    <h3 className="text-2xl font-bold text-red-500 mb-2">🎭 Cultural Fusion</h3>
                    <p className="text-gray-700 dark:text-gray-300">Celebrating traditions with a modern twist to keep them alive.</p>
                </div>
                <div className="p-5 bg-white/60 dark:bg-slate-700/60 rounded-xl shadow-md card-hover-effect border border-white/30 dark:border-slate-600/30">
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">🎶 Unforgettable Experiences</h3>
                    <p className="text-gray-700 dark:text-gray-300">Music, dance, and joy—every moment is a story waiting to be told.</p>
                </div>
                <div className="p-5 bg-white/60 dark:bg-slate-700/60 rounded-xl shadow-md card-hover-effect border border-white/30 dark:border-slate-600/30">
                    <h3 className="text-2xl font-bold text-green-500 mb-2">🤝 Community First</h3>
                    <p className="text-gray-700 dark:text-gray-300">Supporting local artists, performers, and cultural icons.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

