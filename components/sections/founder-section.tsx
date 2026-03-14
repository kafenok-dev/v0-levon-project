"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"

const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

export default function FounderSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-card overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
              
              {/* Photo placeholder */}
              <div className="relative w-72 h-96 lg:w-80 lg:h-[28rem] rounded-2xl bg-background border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/50 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                    <span className="text-4xl font-bold text-primary">ЛК</span>
                  </div>
                </div>
                
                {/* Name badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-xl font-bold text-foreground">Левон Карапетян</p>
                  <p className="text-sm text-primary">Основатель клуба</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Основатель клуба
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Левон Карапетян
            </h2>
            
            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
              <blockquote className="pl-6 border-l-2 border-primary/30">
                <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed italic mb-4">
                  Я всегда хотел собрать вокруг себя как можно больше интересных, умных и амбициозных людей.
                </p>
                <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed italic">
                  Со временем понял, что мафия — это отличный инструмент для создания сильного сообщества.
                </p>
              </blockquote>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Мы создали площадку для живого общения, новых знакомств и развития навыков общения.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Вступить в Телеграм клуб
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
