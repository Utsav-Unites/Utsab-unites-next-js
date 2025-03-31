"use client"

import { useEffect } from "react"

export default function Scripts() {
  useEffect(() => {
    // Back to top button with scroll detection
    const backToTopButton = document.getElementById("back-to-top")
    if (backToTopButton) {
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove("opacity-0", "invisible")
          backToTopButton.classList.add("opacity-100", "visible")
        } else {
          backToTopButton.classList.remove("opacity-100", "visible")
          backToTopButton.classList.add("opacity-0", "invisible")
        }
      }

      window.addEventListener("scroll", handleScroll)

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })

      return () => window.removeEventListener("scroll", handleScroll)
    }

    // Ad rotation with entrance animation
    const ads = [
      { image: "https://assets.onecompiler.app/4362nvr75/43b9e66zd/burger.png", link: "https://ad1.com" },
      { image: "https://assets.onecompiler.app/4362nvr75/43b9mzgrt/cloth.png", link: "https://ad2.com" },
      { image: "https://assets.onecompiler.app/4362nvr75/43b9mzgrt/trav.png", link: "https://ad3.com" },
    ]

    let currentAdIndex = 0
    const adContainer = document.getElementById("ad-container")
    const adImage = document.getElementById("ad-image") as HTMLImageElement
    const adLink = document.getElementById("ad-link") as HTMLAnchorElement
    const closeAdButton = document.getElementById("close-ad")

    function showNextAd() {
      if (adImage && adLink) {
        adImage.src = ads[currentAdIndex].image
        adLink.href = ads[currentAdIndex].link
        currentAdIndex = (currentAdIndex + 1) % ads.length
      }
    }

    if (closeAdButton && adContainer) {
      closeAdButton.addEventListener("click", () => {
        adContainer.style.transform = "translateY(20px)"
        setTimeout(() => {
          adContainer.style.display = "none"
        }, 300)
      })
    }

    // Start ad rotation after 3 seconds with entrance animation
    if (adContainer) {
      setTimeout(() => {
        adContainer.style.display = "flex"
        setTimeout(() => {
          adContainer.style.transform = "translateY(0)"
        }, 10)
        showNextAd()
        setInterval(showNextAd, 5000) // Change ad every 5 seconds
      }, 3000)
    }

    // Initialize ScrollReveal animations if available
    if (typeof ScrollReveal !== "undefined") {
      ScrollReveal().reveal("[data-sr-id]", {
        delay: 200,
        distance: "20px",
        origin: "bottom",
        interval: 100,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        reset: true,
      })
    }

    // Initialize GSAP animations if available
    if (typeof gsap !== "undefined" && gsap.registerPlugin && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      // Animate hero content on load
      gsap.from("#hero-content", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      })

      // Animate cards on scroll
      gsap.utils.toArray(".card-hover-effect").forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        })
      })

      // Animate video section
      gsap.utils.toArray(".video-container").forEach((video: any, i: number) => {
        gsap.from(video, {
          scrollTrigger: {
            trigger: video,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
        })
      })
    }
  }, [])

  return null
}

