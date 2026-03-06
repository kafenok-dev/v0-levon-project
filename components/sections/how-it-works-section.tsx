"use client"

import { MapPin, Users, Shuffle, Play } from "lucide-react"

const steps = [
  {
    icon: MapPin,
    step: "01",
    title: "Приходишь в клуб",
    description: "Уютная атмосфера ждёт тебя каждый вечер",
  },
  {
    icon: Users,
    step: "02",
    title: "Знакомишься с игроками",
    description: "Новые лица и интересные люди за каждым столом",
  },
  {
    icon: Shuffle,
    step: "03",
    title: "Получаешь роль",
    description: "Мирный, мафия или шериф — судьба решает",
  },
  {
    icon: Play,
    step: "04",
    title: "Начинается игра",
    description: "Интриги, дебаты и незабываемые эмоции",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-card overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Процесс
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Как проходит игра
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Всего четыре простых шага до незабываемого вечера
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-full -translate-y-1/2" style={{ width: '25%' }} />
          
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Mobile connector */}
                <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-border" style={{ display: index === steps.length - 1 ? 'none' : 'block' }} />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-background border-2 border-border group-hover:border-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                    
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
