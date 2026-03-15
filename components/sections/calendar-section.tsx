"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, CreditCard, MessageCircle, Phone, Loader2 } from "lucide-react"

const PHONE_LINK = "tel:+79179700070"
const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

// Event type from Supabase
interface Event {
  id: number
  title: string
  event_date: string
  event_time: string | null
  type: string
  price: number
  available_seats: number | null
  location: string
}

// Format date for display
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  
  const dayName = days[date.getDay()]
  const day = date.getDate()
  const month = months[date.getMonth()]
  
  return `${dayName}, ${day} ${month}`
}

// Format time for display
function formatTime(timeStr: string): string {
  return timeStr.slice(0, 5) // Returns "HH:MM" from "HH:MM:SS"
}

// Format seats for display
function formatSeats(available: number | null): string {
  if (available === null) return "-"
  if (available <= 0) return "Мест нет"
  if (available === 1) return "1 место"
  if (available >= 2 && available <= 4) return `${available} места`
  return `${available} мест`
}

function getTypeColor(type: string) {
  switch (type) {
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
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchEvents = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/events')
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to fetch events')
      }
      
      const data = await response.json()
      setEvents(data)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch events'))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

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

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Загружаем события...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-muted-foreground mb-4">Не удалось загрузить события</p>
            <Button
              variant="outline"
              onClick={() => fetchEvents()}
            >
              Попробовать снова
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && events && events.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg mb-2">Пока нет запланированных событий</p>
            <p className="text-muted-foreground text-sm">Следите за обновлениями в нашем Telegram</p>
          </div>
        )}

        {/* Events Grid */}
        {!isLoading && !error && events.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {events.map((event) => {
              const available = event.available_seats !== null && event.available_seats > 0
              const seatsUnknown = event.available_seats === null
              
              return (
                <div
                  key={event.id}
                  className={`group relative rounded-2xl bg-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${
                    available || seatsUnknown
                      ? "border-border hover:border-primary/50 hover:shadow-primary/10" 
                      : "border-border/50 opacity-60"
                  }`}
                >
                  {/* Type badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
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
                        <span className="text-sm">{formatDate(event.event_date)}</span>
                      </div>
                      {event.event_time && (
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{formatTime(event.event_time)}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className={`text-sm ${!available && !seatsUnknown ? "text-destructive" : ""}`}>
                          {formatSeats(event.available_seats)}
                        </span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-muted-foreground" />
                        <span className="text-lg font-bold text-foreground">{event.price} ₽</span>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        disabled={!available && !seatsUnknown}
                        className={available || seatsUnknown
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                        }
                      >
                        <a
                          href={available || seatsUnknown ? TELEGRAM_LINK : undefined}
                          target={available || seatsUnknown ? "_blank" : undefined}
                          rel={available || seatsUnknown ? "noopener noreferrer" : undefined}
                        >
                          {available || seatsUnknown ? "Записаться" : "Мест нет"}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

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
