"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, CreditCard, MessageCircle, Phone } from "lucide-react"

const PHONE_LINK = "tel:+79179700070"
const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

// Mock events data - will be replaced with backend data
const events = [
  {
    id: 1,
    title: "Городская мафия",
    date: "Пт, 15 марта",
    time: "19:00",
    format: "Городская",
    price: "1200 ₽",
    spots: "5 мест",
    location: "Молодогвардейская 153",
    available: true,
  },
  {
    id: 2,
    title: "Спортивная мафия",
    date: "Сб, 16 марта",
    time: "18:00",
    format: "Спортивная",
    price: "800 ₽",
    spots: "8 мест",
    location: "Молодогвардейская 153",
    available: true,
  },
  {
    id: 3,
    title: "Настольные игры",
    date: "Вс, 17 марта",
    time: "16:00",
    format: "Настольные",
    price: "600 ₽",
    spots: "12 мест",
    location: "Молодогвардейская 153",
    available: true,
  },
  {
    id: 4,
    title: "Городская мафия",
    date: "Ср, 20 марта",
    time: "19:00",
    format: "Городская",
    price: "1200 ₽",
    spots: "3 места",
    location: "Молодогвардейская 153",
    available: true,
  },
  {
    id: 5,
    title: "Турнир по мафии",
    date: "Сб, 23 марта",
    time: "15:00",
    format: "Турнир",
    price: "1500 ₽",
    spots: "Мест нет",
    location: "Молодогвардейская 153",
    available: false,
  },
  {
    id: 6,
    title: "Спортивная мафия",
    date: "Вс, 24 марта",
    time: "18:00",
    format: "Спортивная",
    price: "800 ₽",
    spots: "10 мест",
    location: "Молодогвардейская 153",
    available: true,
  },
]

function getFormatColor(format: string) {
  switch (format) {
    case "Городская":
      return "bg-primary/20 text-primary"
    case "Спортивная":
      return "bg-amber-500/20 text-amber-400"
    case "Настольные":
      return "bg-blue-500/20 text-blue-400"
    case "Турнир":
      return "bg-purple-500/20 text-purple-400"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function CalendarSection() {
  return (
    <section id="calendar" className="relative py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Расписание
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Календарь событий
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите удобное время и запишитесь на игру
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className={`group relative rounded-2xl bg-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${
                event.available 
                  ? "border-border hover:border-primary/50 hover:shadow-primary/10" 
                  : "border-border/50 opacity-60"
              }`}
            >
              {/* Format badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getFormatColor(event.format)}`}>
                  {event.format}
                </span>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 pr-20">
                  {event.title}
                </h3>

                {/* Event details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className={`text-sm ${!event.available ? "text-destructive" : ""}`}>
                      {event.spots}
                    </span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <span className="text-lg font-bold text-foreground">{event.price}</span>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    disabled={!event.available}
                    className={event.available 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                    }
                  >
                    <a
                      href={event.available ? TELEGRAM_LINK : undefined}
                      target={event.available ? "_blank" : undefined}
                      rel={event.available ? "noopener noreferrer" : undefined}
                    >
                      {event.available ? "Записаться" : "Мест нет"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
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
        </div>
      </div>
    </section>
  )
}
