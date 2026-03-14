"use client"

import { ArrowRight, Users, Calendar, MessageCircle, Phone, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "+7 (917) 970 00 70"
const PHONE_LINK = "tel:+79179700070"
const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Large red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        
        {/* Decorative card silhouettes */}
        <div className="absolute top-10 left-10 opacity-5">
          <svg width="80" height="110" viewBox="0 0 80 110" fill="none" className="transform rotate-[-15deg]">
            <rect x="5" y="5" width="70" height="100" rx="6" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
            <text x="40" y="60" textAnchor="middle" className="text-foreground fill-current text-2xl font-bold">{"♠"}</text>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <svg width="80" height="110" viewBox="0 0 80 110" fill="none" className="transform rotate-[15deg]">
            <rect x="5" y="5" width="70" height="100" rx="6" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
            <text x="40" y="60" textAnchor="middle" className="text-foreground fill-current text-2xl font-bold">{"♦"}</text>
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5 hidden lg:block">
          <svg width="60" height="85" viewBox="0 0 60 85" fill="none" className="transform rotate-[8deg]">
            <rect x="4" y="4" width="52" height="77" rx="5" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
            <text x="30" y="45" textAnchor="middle" className="text-foreground fill-current text-xl font-bold">{"♥"}</text>
          </svg>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">Более 1200 игроков уже с нами</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground mb-6 text-balance">
          Присоединяйся к клубу{" "}
          <span className="text-primary">Мафия №1</span>
        </h2>

        {/* Description */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Начни играть уже сегодня. Интрига, психология, новые знакомства 
          и незабываемые эмоции ждут тебя!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap mb-6">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-7 text-lg rounded-2xl animate-glow-pulse"
          >
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Вступить в Телеграм клуб
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-8 py-7 text-lg rounded-2xl"
          >
            <a href="#calendar" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Открыть календарь событий
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-6 py-5 rounded-xl"
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
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-6 py-5 rounded-xl"
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
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-6 py-5 rounded-xl"
          >
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <CalendarCheck className="w-5 h-5" />
              Забронировать место
            </a>
          </Button>
        </div>

        {/* Additional info */}
        <p className="mt-8 text-sm text-muted-foreground">
          Бесплатное вступление в клуб
        </p>
      </div>
    </section>
  )
}
