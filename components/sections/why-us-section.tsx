"use client"

import { Heart, Sparkles, Brain, Users, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Heart,
    title: "Новые знакомства",
    description: "Каждый вечер — возможность познакомиться с интересными людьми из разных сфер жизни.",
  },
  {
    icon: Sparkles,
    title: "Атмосфера клуба",
    description: "Уютное пространство с приглушённым светом, где царит дух интриги и азарта.",
  },
  {
    icon: Brain,
    title: "Интеллектуальная игра",
    description: "Развивайте навыки психологии, логики и убеждения в захватывающих партиях.",
  },
  {
    icon: Users,
    title: "Сильное комьюнити",
    description: "Станьте частью дружного сообщества, где ценят честную игру и уважение.",
  },
]

export default function WhyUsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Преимущества
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Почему люди выбирают нас
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Больше, чем просто игра — это стиль жизни и сообщество единомышленников
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
          >
            <a href="#calendar" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Посмотреть календарь игр
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
