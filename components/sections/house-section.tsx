"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone, MessageCircle, Dice5, Gamepad, Tv, Coffee, Users2, Film } from "lucide-react"

const activities = [
  { icon: Gamepad, label: "Игровые вечера" },
  { icon: Dice5, label: "Настольные игры" },
  { icon: Tv, label: "Консоли" },
  { icon: Users2, label: "Общение" },
  { icon: Film, label: "Просмотр фильмов" },
  { icon: Coffee, label: "Лаунж зона" },
]

const galleryItems = [
  { id: 1, span: "col-span-2 row-span-2", label: "Игровой зал" },
  { id: 2, span: "col-span-1 row-span-1", label: "Лаунж зона" },
  { id: 3, span: "col-span-1 row-span-1", label: "Интерьер" },
  { id: 4, span: "col-span-1 row-span-2", label: "Атмосфера" },
  { id: 5, span: "col-span-1 row-span-1", label: "Игроки" },
]

const PHONE_LINK = "tel:+79179700070"
const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

export default function HouseSection() {
  return (
    <section id="house" className="relative py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Наше пространство
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Дом Мафии
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Дом Мафии — это место, где проходит жизнь клуба. 
            Здесь проходят игровые вечера, встречи игроков, настольные игры, общение и мероприятия.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[150px] lg:auto-rows-[180px] mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl bg-card border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 ${item.span}`}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/50" />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/5 flex items-center justify-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="text-center mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">Что вас ждёт</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {activities.map((activity) => (
              <div
                key={activity.label}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <activity.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{activity.label}</span>
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
              Посмотреть события
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
              <MessageCircle className="w-5 h-5" />
              Забронировать место
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
