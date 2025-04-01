export default function PujaStats() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="gradient-border rounded-2xl p-6 hover-scale bg-white dark:bg-premium-deep">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gradient-to-br from-premium-gold to-yellow-300 text-premium-dark mr-4">
              <i className="fas fa-landmark text-2xl"></i>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Committees</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-premium-gold to-yellow-300 gradient-text">222+</p>
            </div>
          </div>
        </div>
        <div className="gradient-border rounded-2xl p-6 hover-scale bg-white dark:bg-premium-deep">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gradient-to-br from-premium-accent to-blue-300 text-premium-dark mr-4">
              <i className="fas fa-trophy text-2xl"></i>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Jubilee Celebrations</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-premium-accent to-blue-300 gradient-text">8</p>
            </div>
          </div>
        </div>
        <div className="gradient-border rounded-2xl p-6 hover-scale bg-white dark:bg-premium-deep">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-300 text-white mr-4">
              <i className="fas fa-star text-2xl"></i>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Featured Pujas</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 gradient-text">12</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  