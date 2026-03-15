"use client"

import { MapPin, Phone, Mail, Send } from "lucide-react"

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/mafia_club",
    icon: Send,
  },
  {
    name: "VK",
    href: "https://vk.com/mafia_club",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.08 14.27h-1.46c-.55 0-.72-.44-1.71-1.44-1.03-1-1.48-1.13-1.74-1.13-.36 0-.47.11-.47.64v1.27c0 .46-.14.74-1.31.74-1.93 0-4.09-1.17-5.6-3.36-2.27-3.19-2.9-5.57-2.9-6.06 0-.26.11-.5.64-.5h1.46c.47 0 .65.22.83.74.91 2.64 2.44 4.96 3.07 4.96.24 0 .34-.11.34-.71V8.12c-.07-1.26-.73-1.37-.73-1.82 0-.22.18-.45.47-.45h2.3c.4 0 .54.22.54.69v3.76c0 .4.18.54.29.54.24 0 .43-.14.87-.58 1.34-1.5 2.3-3.82 2.3-3.82.13-.26.34-.5.81-.5h1.46c.44 0 .54.23.44.55-.18.84-1.93 3.31-1.93 3.31-.15.26-.21.37 0 .66.15.21.65.66.99 1.07.62.73 1.09 1.34 1.22 1.77.13.43-.09.65-.54.65z"/>
      </svg>
    ),
  },
]

const footerLinks = [
  { name: "О клубе", href: "#stats" },
  { name: "Форматы игр", href: "#formats" },
  { name: "Роли", href: "#roles" },
  { name: "Абонементы", href: "#pricing" },
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
              Самое большое сообщество игроков в мафию в городе. 
              Интрига, психология, знакомства и сильное комьюнити в одном клубе.
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
                  {typeof link.icon === 'function' ? <link.icon /> : <link.icon className="w-5 h-5" />}
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
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  г. Москва, ул. Примерная, д. 1
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+79991234567" className="text-muted-foreground hover:text-foreground transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@mafia1.ru" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@mafia1.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 МАФИЯ №1. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
