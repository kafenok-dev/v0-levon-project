"use client"

import { MapPin, Phone, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "+7 (917) 970 00 70"
const PHONE_LINK = "tel:+79179700070"
const TELEGRAM_LINK = "https://t.me/mafia_no1_club"
const ADDRESS = "Молодогвардейская 153"
const ADDRESS_DETAIL = "(вход справа от бутика «Корона»)"

const socialLinks = [
  {
    name: "Telegram",
    href: TELEGRAM_LINK,
    icon: Send,
  },
]

const footerLinks = [
  { name: "О клубе", href: "#stats" },
  { name: "Дом Мафии", href: "#house" },
  { name: "Календарь", href: "#calendar" },
  { name: "Форматы игр", href: "#formats" },
  { name: "Роли", href: "#roles" },
  { name: "Мероприятия", href: "#events" },
]

export default function FooterSection() {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">М</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                МАФИЯ <span className="text-primary">№1</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Клуб игроков в мафию. Сообщество людей из разных сфер, 
              которых объединяет интеллектуальная игра, живое общение 
              и сильное комьюнити.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Навигация</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Контакты</h4>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground block">{ADDRESS}</span>
                  <span className="text-muted-foreground text-sm">{ADDRESS_DETAIL}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={PHONE_LINK} className="text-foreground hover:text-primary transition-colors font-medium">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Написать организатору
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Вступить в Телеграм клуб
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 МАФИЯ №1. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
