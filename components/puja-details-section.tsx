export default function PujaDetailsSection() {
  return (
    <section id="pujas" className="py-16 md:py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all border border-gray-100 dark:border-slate-600">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bell text-indigo-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Sasthi</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">28th October 2025</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              On the sixth day of Jagadhatri Puja (Sasthi), rituals are performed to awaken and welcome Devi Jagadhatri.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all border border-gray-100 dark:border-slate-600">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-water text-indigo-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Saptami</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">29th October 2025</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              The 4-day Puja starts from the seventh day of Jagadhatri Puja by Ghot Snan with the holy water of Ganga.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all border border-gray-100 dark:border-slate-600">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-fire text-indigo-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Astami</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">30th October 2025</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              Special puja offering is done on the eighth day of Jagadhatri Puja, followed by the preparation of the
              procession.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all border border-gray-100 dark:border-slate-600">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-book text-indigo-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Nabami</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">31st October 2025</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              The ninth day of Jagadhatri Puja followed by Puspanjali, marked with hom, kumari puja, and khichudi bhog.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all border border-gray-100 dark:border-slate-600">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-torii-gate text-indigo-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Dasami</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">1st November 2025</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              The last day of Puja is called Dashami, marked by Sindur Khela and a special lighted procession through
              Chandannagar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

