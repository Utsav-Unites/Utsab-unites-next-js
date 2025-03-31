import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Bubblegum_Sans, Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const bubblegum = Bubblegum_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bubblegum",
})

export const metadata: Metadata = {
  title: "Utsav Unites - Digital Magazine",
  description: "Celebrating Culture & Unity through digital experiences",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body
        className={`${poppins.variable} ${bubblegum.variable} font-poppins antialiased bg-gray-50 dark:bg-slate-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          {children}
          <BackToTopButton />
          <AdContainer />
        </ThemeProvider>
        <script src="https://unpkg.com/scrollreveal" async></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" async></script>
      </body>
    </html>
  )
}

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 dark:from-indigo-900/20 dark:to-purple-900/20"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-200 blur-3xl animate-float dark:bg-indigo-900/30"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 rounded-full bg-purple-200 blur-3xl animate-float animation-delay-2000 dark:bg-purple-900/30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-pink-200 blur-3xl animate-float animation-delay-4000 dark:bg-pink-900/30"></div>
      </div>
    </div>
  )
}

function BackToTopButton() {
  return (
    <button
      id="back-to-top"
      className="fixed bottom-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 z-40 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

function AdContainer() {
  return (
    <div
      id="ad-container"
      className="fixed bottom-4 right-4 bg-white dark:bg-slate-800 shadow-2xl rounded-xl p-3 w-64 sm:w-80 flex flex-col items-center border border-gray-200 dark:border-slate-700 z-50 hidden transform transition-all duration-500 translate-y-20"
    >
      <button
        className="absolute top-1 right-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
        id="close-ad"
      >
        ✖
      </button>

      <a id="ad-link" href="" target="_blank" rel="noopener noreferrer" className="w-full overflow-hidden rounded-lg">
        <img
          id="ad-image"
          src="/placeholder.svg"
          alt="Advertisement"
          className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105"
        />
      </a>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Sponsored</p>
    </div>
  )
}



import './globals.css'