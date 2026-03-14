"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#stats", label: "О клубе" },
  { href: "#house", label: "Дом Мафии" },
  { href: "#calendar", label: "Календарь" },
  { href: "#formats", label: "Форматы" },
  { href: "#roles", label: "Роли" },
  { href: "#events", label: "Мероприятия" },
]

const PHONE_NUMBER = "+7 (917) 970 00 70"
const PHONE_LINK = "tel:+79179700070"
const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">М</span>
            </div>
            <span className="font-bold text-lg lg:text-xl text-foreground">
              МАФИЯ <span className="text-primary">№1</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{PHONE_NUMBER}</span>
            </a>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-border hover:bg-card"
            >
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Написать
              </a>
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Вступить в клуб
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-border">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>
              <Button
                asChild
                variant="outline"
                className="border-border hover:bg-card"
              >
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Написать организатору
                </a>
              </Button>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Вступить в клуб
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
