import PujaHero from "@/components/pujas/puja-hero"
import PujaStats from "@/components/pujas/puja-stats"
import PujaTabs from "@/components/pujas/puja-tabs"
import FeaturedCommittees from "@/components/pujas/featured-committees"
import PujaFooter from "@/components/pujas/puja-footer"
import BackToTop from "@/components/pujas/back-to-top"

export default function PujasPage() {
  return (
    <div className="font-sans bg-premium-light text-premium-dark dark:bg-premium-dark dark:text-premium-light">
      <PujaHero />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <PujaStats />
        <PujaTabs />
        <FeaturedCommittees />
      </main>

      <PujaFooter />
      <BackToTop />
    </div>
  )
}