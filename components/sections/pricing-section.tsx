"use client"

import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Мирный житель",
    price: "3 990",
    period: "/ месяц",
    description: "Идеально для начинающих игроков",
    features: [
      "4 игровых вечера",
      "Скидка на кальян",
      "Скидка на пребывание",
    ],
    popular: false,
    cta: "Выбрать тариф",
  },
  {
    name: "Маньяк",
    price: "6 990",
    period: "/ месяц",
    description: "Самый популярный выбор",
    features: [
      "9 игровых вечеров",
      "Участие в рейтинге",
      "70% скидка на пребывание",
      "Скидки на кальяны",
    ],
    popular: true,
    cta: "Выбрать тариф",
  },
  {
    name: "Дон мафии",
    price: "9 900",
    period: "/ месяц",
    description: "Для настоящих лидеров",
    features: [
      "9 игровых вечеров",
      "Участие в рейтинге",
      "Бесплатное пребывание",
      "Скидки на кальяны",
      "Приоритетная бронь",
    ],
    popular: false,
    cta: "Выбрать тариф",
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-card overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Тарифы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Абонементы клуба
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите абонемент, который подходит именно вам
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-background border-primary shadow-xl shadow-primary/20 scale-105 z-10"
                  : "bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  <Sparkles className="w-4 h-4" />
                  Популярное
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Plan name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl lg:text-5xl font-black text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground">₽</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full py-6 font-semibold ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <a
                    href="https://t.me/mafia_club"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
