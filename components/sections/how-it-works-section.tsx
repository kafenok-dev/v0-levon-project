"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, CalendarCheck, CreditCard, MapPin, Play } from "lucide-react"

const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Выбираешь событие",
    description: "Выбери игру или мероприятие из календаря",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Записываешься через календарь",
    description: "Бронируй место на выбранное событие",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Оплачиваешь участие",
    description: "Оплати участие любым удобным способом",
  },
  {
    icon: MapPin,
    step: "04",
    title: "Приходишь в клуб",
    description: "Молодогвардейская 153, вход справа от бутика Корона",
  },
  {
    icon: Play,
    step: "05",
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
            Пять простых шагов до незабываемого вечера
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-full -translate-y-1/2" style={{ width: '20%' }} />
          
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Mobile connector */}
                <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-border" style={{ display: index === steps.length - 1 ? 'none' : 'block' }} />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-background border-2 border-border group-hover:border-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <step.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                    
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
          >
            <a href="#calendar" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Открыть календарь событий
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-8 py-6 text-lg rounded-xl"
          >
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Написать организатору
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
