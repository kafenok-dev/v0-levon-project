"use client"

import { Star, Award, Users } from "lucide-react"

const hosts = [
  {
    name: "Александр",
    role: "Ведущий городской мафии",
    experience: "5 лет опыта",
    games: "2000+ игр",
    initials: "АК",
  },
  {
    name: "Мария",
    role: "Ведущая спортивной мафии",
    experience: "4 года опыта",
    games: "1500+ игр",
    initials: "МС",
  },
  {
    name: "Дмитрий",
    role: "Ведущий турниров",
    experience: "6 лет опыта",
    games: "3000+ игр",
    initials: "ДП",
  },
  {
    name: "Екатерина",
    role: "Ведущая мероприятий",
    experience: "3 года опыта",
    games: "1000+ игр",
    initials: "ЕВ",
  },
]

export default function HostsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-card">
      {/* Subtle decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Наша команда
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Команда ведущих
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Профессиональные ведущие, которые создают атмосферу и делают игру интересной и динамичной
          </p>
        </div>

        {/* Hosts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {hosts.map((host) => (
            <div
              key={host.name}
              className="group relative rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Avatar area */}
              <div className="relative h-48 bg-gradient-to-br from-muted/50 to-background flex items-center justify-center">
                {/* Placeholder avatar */}
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary">{host.initials}</span>
                </div>
                
                {/* Experience badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                  <Award className="w-3 h-3 text-primary" />
                  {host.experience}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {host.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {host.role}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{host.games}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-primary" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
