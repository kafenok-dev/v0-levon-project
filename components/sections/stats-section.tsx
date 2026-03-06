"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Gamepad2, Calendar, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "игроков клуба",
  },
  {
    icon: Gamepad2,
    value: 8000,
    suffix: "+",
    label: "сыгранных игр",
  },
  {
    icon: Calendar,
    value: 300,
    suffix: "+",
    label: "мероприятий",
  },
  {
    icon: Award,
    value: 5,
    suffix: " лет",
    label: "сообщества",
  },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
      </div>

      {/* Subtle bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  )
}
