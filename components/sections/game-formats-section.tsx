"use client"

import { Users, Trophy, Dice5, Palmtree, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const formats = [
  {
    icon: Users,
    title: "Городская мафия",
    games: "5 игр за вечер",
    price: "1200 ₽",
    description: "Классический формат с дискуссиями и голосованиями",
    popular: true,
    link: "#calendar",
  },
  {
    icon: Trophy,
    title: "Спортивная мафия",
    games: "6+ игр",
    price: "800 ₽",
    description: "Турнирный формат с рейтингом и баллами",
    popular: false,
    link: "#calendar",
  },
  {
    icon: Dice5,
    title: "Настольные игры",
    games: "Бункер, Своя игра, Codenames",
    price: "и другие",
    description: "Разнообразие настольных игр для любой компании",
    popular: false,
    link: "#calendar",
  },
  {
    icon: Palmtree,
    title: "Выездные мероприятия",
    games: "Волейбол, футбол",
    price: "активности",
    description: "Отдых и развлечения за пределами клуба",
    popular: false,
    link: "#calendar",
  },
]

export default function GameFormatsSection() {
  return (
    <section id="formats" className="relative py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Форматы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Форматы игр
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выбирайте формат, который подходит именно вам
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format) => (
            <div
              key={format.title}
              className={`group relative h-full rounded-2xl bg-card border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                format.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 hover:shadow-primary/10"
              }`}
            >
              {/* Popular badge */}
              {format.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  Популярное
                </div>
              )}

              <div className="p-6 lg:p-8 flex flex-col h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  format.popular ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <format.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {format.title}
                </h3>

                {/* Games info */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-foreground">{format.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{format.games}</p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {format.description}
                </p>

                {/* Link */}
                <a 
                  href={format.link}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline mt-auto"
                >
                  Смотреть в календаре
                  <ArrowRight className="w-4 h-4" />
                </a>
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
              Смотреть все события в календаре
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
