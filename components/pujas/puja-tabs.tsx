"use client"

import { useState, useEffect } from "react"
import { chandannagarData, bhadreswarData } from "@/data/puja-list"

export default function PujaTabs() {
  const [activeTab, setActiveTab] = useState("chandannagar")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredChandannagar, setFilteredChandannagar] = useState(chandannagarData)
  const [filteredBhadreswar, setFilteredBhadreswar] = useState(bhadreswarData)

  useEffect(() => {
    // Filter Chandannagar data
    setFilteredChandannagar(
      chandannagarData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.years.toString().includes(searchTerm),
      ),
    )

    // Filter Bhadreswar data
    setFilteredBhadreswar(
      bhadreswarData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.years.toString().includes(searchTerm),
      ),
    )
  }, [searchTerm])

  return (
    <div className="bg-white dark:bg-premium-deep rounded-2xl shadow-xl overflow-hidden mb-16 gradient-border">
      <div className="border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
        <nav className="flex">
          <button
            className={`tab-btn shrink-0 py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "chandannagar"
                ? "border-premium-accent text-premium-accent"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-premium-accent hover:border-premium-accent"
            } transition-colors duration-300`}
            onClick={() => setActiveTab("chandannagar")}
          >
            <i className="fas fa-city mr-2"></i> Chandannagar
          </button>
          <button
            className={`tab-btn shrink-0 py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "bhadreswar"
                ? "border-premium-accent text-premium-accent"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-premium-accent hover:border-premium-accent"
            } transition-colors duration-300 flex items-center justify-center`}
            onClick={() => setActiveTab("bhadreswar")}
          >
            <i className="fas fa-archway mr-2"></i> Bhadreswar
          </button>
          <button
            className={`tab-btn shrink-0 py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "others"
                ? "border-premium-accent text-premium-accent"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-premium-accent hover:border-premium-accent"
            } transition-colors duration-300 flex items-center justify-center`}
            onClick={() => setActiveTab("others")}
          >
            <i className="fas fa-map-marker-alt mr-2"></i> Other Areas
          </button>
        </nav>
      </div>

      {/* Chandannagar Tab Content */}
      <div className={`tab-content p-6 ${activeTab !== "chandannagar" ? "hidden" : ""}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Chandannagar Puja Committees</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-medium">132</span> committees •
              <span className="text-premium-accent font-medium"> 6 jubilees</span>
            </p>
          </div>
          <div className="flex gap-2">
            <button className="export-btn px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center">
              <i className="fas fa-file-export mr-2"></i> Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Committee Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Years
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  View
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-premium-deep divide-y divide-gray-200 dark:divide-gray-700">
              {filteredChandannagar.length > 0 ? (
                filteredChandannagar.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.years}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {item.celebrating === "Jubilee" ? (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-premium-gold/10 text-premium-gold">
                          Jubilee
                        </span>
                      ) : item.celebrating === "Pre-Jubilee" ? (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-premium-accent/10 text-premium-accent">
                          Pre-Jubilee
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">--</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <a
                        href={item.view}
                        className="text-premium-accent hover:text-premium-accent/80 transition-colors flex items-center"
                      >
                        View <i className="fas fa-chevron-right ml-1 text-xs"></i>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    No committees found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bhadreswar Tab Content */}
      <div className={`tab-content p-6 ${activeTab !== "bhadreswar" ? "hidden" : ""}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Bhadreswar Puja Committees</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-medium">90</span> committees •
              <span className="text-premium-accent font-medium"> 2 jubilees</span>
            </p>
          </div>
          <div className="flex gap-2">
            <button className="export-btn px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center">
              <i className="fas fa-file-export mr-2"></i> Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Committee Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Years
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  View
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-premium-deep divide-y divide-gray-200 dark:divide-gray-700">
              {filteredBhadreswar.length > 0 ? (
                filteredBhadreswar.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {item.years}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {item.celebrating === "Jubilee" ? (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-premium-gold/10 text-premium-gold">
                          Jubilee
                        </span>
                      ) : item.celebrating === "Pre-Jubilee" ? (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-premium-accent/10 text-premium-accent">
                          Pre-Jubilee
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500">--</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <a
                        href={item.view}
                        className="text-premium-accent hover:text-premium-accent/80 transition-colors flex items-center"
                      >
                        View <i className="fas fa-chevron-right ml-1 text-xs"></i>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    No committees found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Other Pujas Tab - Enlistment Message */}
      <div className={`tab-content p-6 ${activeTab !== "others" ? "hidden" : ""}`}>
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 bg-premium-accent/10 rounded-full flex items-center justify-center mb-6">
            <i className="fas fa-plus-circle text-4xl text-premium-accent"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Enlist Your Puja Committee</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            We're continuously expanding our directory. Submit your puja committee details to be featured in our premium
            listing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-premium-accent to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center shadow-md">
              <i className="fas fa-paper-plane mr-2"></i> Submit Your Committee
            </button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
              <i className="fas fa-info-circle mr-2"></i> Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

