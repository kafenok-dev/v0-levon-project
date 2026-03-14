"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Gamepad2, Calendar, Award, ArrowRight, Dice5, Gamepad, Tv, Coffee, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "игроков клуба",
  },
  {
    icon: Gamepad2,
    value: 6000,
    suffix: "+",
    label: "сыгранных игр",
  },
  {
    icon: Calendar,
    value: 500,
    suffix: "+",
    label: "мероприятий",
  },
  {
    icon: Award,
    value: 4,
    suffix: " года",
    label: "существует клуб",
  },
]

const activities = [
  { icon: Dice5, label: "Настольные игры" },
  { icon: Gamepad, label: "Игровые вечера" },
  { icon: Tv, label: "Консоли" },
  { icon: Coffee, label: "Лаунж зона" },
  { icon: Users2, label: "Встречи игроков" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-20 lg:py-32 bg-card">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                
                {/* Animated Number */}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                
                {/* Label */}
                <p className="text-sm lg:text-base text-muted-foreground mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Activities */}
        <div className="text-center mb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">Дополнительные активности</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {activities.map((activity) => (
              <div
                key={activity.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border"
              >
                <activity.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{activity.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
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
        </div>
      </div>

      {/* Subtle bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
