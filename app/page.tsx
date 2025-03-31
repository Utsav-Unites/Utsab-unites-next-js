import AboutSection from "@/components/about-section"
import ArticlesSection from "@/components/articles-section"
import CountdownSection from "@/components/countdown-section"
import Footer from "@/components/footer"
import GallerySection from "@/components/gallery-section"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PujaDetailsSection from "@/components/puja-details-section"
import SocialMediaSection from "@/components/social-media-section"
import TeamSection from "@/components/team-section"
import VideoSection from "@/components/video-section"
import { VideoModal } from "@/components/video-modal"
import { FullscreenImageModal } from "@/components/fullscreen-image-modal"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
        <GallerySection />
        <CountdownSection />
        <PujaDetailsSection />
        <TeamSection />
        <SocialMediaSection />
        <VideoSection />
      </main>
      <Footer />
      <VideoModal />
      <FullscreenImageModal />
    </>
  )
}

