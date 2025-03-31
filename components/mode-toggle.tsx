"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative inline-block w-12 mr-2 align-middle select-none">
        <div className="block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"></div>
        <div className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></div>
      </div>
    )
  }

  return (
    <div className="relative inline-block w-12 mr-2 align-middle select-none">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
        <i className="fas fa-moon mr-1"></i>
      </span>
    </div>
  )
}

