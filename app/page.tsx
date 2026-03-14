import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import HouseSection from "@/components/sections/house-section"
import FounderSection from "@/components/sections/founder-section"
import WhyUsSection from "@/components/sections/why-us-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import GameFormatsSection from "@/components/sections/game-formats-section"
import CalendarSection from "@/components/sections/calendar-section"
import LeaderboardSection from "@/components/sections/leaderboard-section"
import PlayersSection from "@/components/sections/players-section"
import EventsSection from "@/components/sections/events-section"
import GallerySection from "@/components/sections/gallery-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import RolesSection from "@/components/sections/roles-section"
import CtaSection from "@/components/sections/cta-section"
import FooterSection from "@/components/sections/footer-section"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Statistics */}
      <StatsSection />
      {/* 3. House of Mafia */}
      <HouseSection />
      {/* 4. Founder */}
      <FounderSection />
      {/* 5. Why Us */}
      <WhyUsSection />
      {/* 6. How It Works */}
      <HowItWorksSection />
      {/* 7. Game Formats */}
      <GameFormatsSection />
      {/* 8. Calendar */}
      <CalendarSection />
      {/* 9. Leaderboard */}
      <LeaderboardSection />
      {/* 10. Players */}
      <PlayersSection />
      {/* 11. Events */}
      <EventsSection />
      {/* 12. Gallery */}
      <GallerySection />
      {/* 13. Testimonials */}
      <TestimonialsSection />
      {/* 14. Roles */}
      <RolesSection />
      {/* 15. CTA */}
      <CtaSection />
      {/* 16. Footer */}
      <FooterSection />
    </main>
  )
}
