"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles, PartyPopper } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[#0B0B0B]">
        {/* Atmospheric gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        
        {/* Red glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Decorative elements - cards silhouette */}
        <div className="absolute top-20 right-10 lg:right-20 opacity-10">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none" className="transform rotate-12">
            <rect x="10" y="10" width="100" height="140" rx="8" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            <text x="60" y="85" textAnchor="middle" className="text-primary fill-current text-4xl font-bold">{"♠"}</text>
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 lg:left-20 opacity-10">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none" className="transform -rotate-12">
            <rect x="5" y="5" width="90" height="130" rx="8" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            <text x="50" y="75" textAnchor="middle" className="text-primary fill-current text-4xl font-bold">{"♦"}</text>
          </svg>
        </div>
        
        {/* Mask decorative element */}
        <div className="absolute top-1/2 right-1/6 opacity-5 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="45" rx="40" ry="35" stroke="currentColor" strokeWidth="1.5" className="text-foreground"/>
            <ellipse cx="35" cy="40" rx="10" ry="8" fill="currentColor" className="text-foreground"/>
            <ellipse cx="65" cy="40" rx="10" ry="8" fill="currentColor" className="text-foreground"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="text-center lg:text-left lg:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-6 lg:mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Клуб игроков в мафию</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black tracking-tight text-foreground mb-4 lg:mb-6">
            МАФИЯ <span className="text-primary">№1</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 font-medium mb-4 lg:mb-6 text-balance">
            Клуб игроков в мафию
          </p>

          {/* Description */}
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10 leading-relaxed">
            Сообщество людей из разных сфер, которых объединяет интеллектуальная игра, 
            живое общение, новые знакомства и сильное комьюнити.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl animate-glow-pulse"
            >
              <a
                href="https://t.me/mafia_no1_club"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Вступить в Телеграм клуб
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <a href="#calendar" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Посмотреть календарь игр
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <a href="#events" className="flex items-center gap-2">
                <PartyPopper className="w-5 h-5" />
                Заказать мероприятие
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Листайте вниз</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
