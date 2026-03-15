import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import WhyUsSection from "@/components/sections/why-us-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import GameFormatsSection from "@/components/sections/game-formats-section"
import BeginnerSection from "@/components/sections/beginner-section"
import RolesSection from "@/components/sections/roles-section"
import HostsSection from "@/components/sections/hosts-section"
import LeaderboardSection from "@/components/sections/leaderboard-section"
import PricingSection from "@/components/sections/pricing-section"
import EventsSection from "@/components/sections/events-section"
import GallerySection from "@/components/sections/gallery-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CommunitySection from "@/components/sections/community-section"
import CtaSection from "@/components/sections/cta-section"
import FooterSection from "@/components/sections/footer-section"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <HowItWorksSection />
      <GameFormatsSection />
      <BeginnerSection />
      <RolesSection />
      <HostsSection />
      <LeaderboardSection />
      <PricingSection />
      <EventsSection />
      <GallerySection />
      <TestimonialsSection />
      <CommunitySection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
