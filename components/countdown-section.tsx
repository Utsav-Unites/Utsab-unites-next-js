"use client"

import { useEffect, useState } from "react"

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date("October 28, 2025 00:00:00").getTime()
      const now = new Date().getTime()
      const timeLeftMs = eventDate - now

      const days = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0")
      const hours = Math.floor((timeLeftMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0")
      const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0")
      const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0")

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 heading-font">
          Jagadhatri Puja <span className="text-yellow-300">Countdown 2025</span>
        </h2>
        <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 transition-all hover:bg-white/15">
            <span className="text-3xl sm:text-5xl font-bold text-yellow-300 block mb-2 countdown-digit">
              {timeLeft.days}
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium">Days</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 transition-all hover:bg-white/15">
            <span className="text-3xl sm:text-5xl font-bold text-yellow-300 block mb-2 countdown-digit">
              {timeLeft.hours}
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium">Hours</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 transition-all hover:bg-white/15">
            <span className="text-3xl sm:text-5xl font-bold text-yellow-300 block mb-2 countdown-digit">
              {timeLeft.minutes}
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium">Min</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 sm:p-6 transition-all hover:bg-white/15">
            <span className="text-3xl sm:text-5xl font-bold text-yellow-300 block mb-2 countdown-digit">
              {timeLeft.seconds}
            </span>
            <span className="text-sm sm:text-base uppercase tracking-wider font-medium">Sec</span>
          </div>
        </div>
      </div>
    </section>
  )
}

