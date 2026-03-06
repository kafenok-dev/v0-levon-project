"use client"

import { Users, MessageCircle, Calendar, Heart } from "lucide-react"

const communityStats = [
  { icon: Users, value: "1200+", label: "Игроков" },
  { icon: MessageCircle, value: "24/7", label: "Общение" },
  { icon: Calendar, value: "5+", label: "Игр в неделю" },
  { icon: Heart, value: "100%", label: "Дружелюбие" },
]

export default function CommunitySection() {
  return (
    <section className="relative py-20 lg:py-32 bg-card overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Комьюнити
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            Стань частью клуба
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Каждый вечер — новые знакомства, новые истории и новые эмоции. 
            Присоединяйтесь к нашему дружному сообществу!
          </p>

          {/* Community Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-6 rounded-2xl bg-background/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-black text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Avatars showcase */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="flex -space-x-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                  style={{ zIndex: 6 - i }}
                >
                  <span className="text-xs font-bold text-primary">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary font-medium">
              +1194 игрока
            </div>
          </div>

          <p className="text-muted-foreground">
            Новые игроки присоединяются к нам каждую неделю
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
