"use client"

import { Cake, Building2, Baby, ArrowRight, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "+7 (917) 970 00 70"
const PHONE_LINK = "tel:+79179700070"
const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

const events = [
  {
    icon: Cake,
    title: "Дни рождения",
    description: "Уникальный праздник с игрой в мафию для именинника и гостей. Мы организуем незабываемое мероприятие с ведущим и призами.",
  },
  {
    icon: Building2,
    title: "Корпоративы",
    description: "Тимбилдинг и незабываемый вечер для вашей команды. Сплочение коллектива через увлекательную игру.",
  },
  {
    icon: Baby,
    title: "Детские праздники",
    description: "Увлекательная программа для детей от 10 лет. Безопасная и весёлая версия игры для юных игроков.",
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="relative py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            События
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Мероприятия
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Организуем незабываемые события для любого повода
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6 lg:p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <event.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-8 py-6 text-lg rounded-xl"
          >
            <a href={PHONE_LINK} className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Позвонить
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
              Заказать мероприятие
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
