"use client"

import { useState } from "react"
import { User, Skull, Shield, Heart, Eye, Crown, Star, Swords, Sparkles, UserX, Target, Lock, Flame, Clock, Link2, Crosshair, Scissors, Bird, Briefcase, Timer, ChevronDown } from "lucide-react"

// Main roles (always visible)
const mainRoles = [
  {
    icon: Skull,
    name: "Мафия",
    description: "Притворяйся мирным и устраняй жителей по ночам",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    team: "mafia",
  },
  {
    icon: Briefcase,
    name: "Адвокат",
    description: "Защищает мафию от проверок шерифа",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    team: "mafia",
  },
  {
    icon: Eye,
    name: "Ниндзя",
    description: "Убивает бесшумно, без следов",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    team: "mafia",
  },
  {
    icon: Crown,
    name: "Дон",
    description: "Лидер мафии с особыми способностями",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    team: "mafia",
  },
  {
    icon: User,
    name: "Мирный житель",
    description: "Ищи мафию и голосуй за её устранение",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "hover:border-blue-400/50",
    team: "peace",
  },
  {
    icon: Shield,
    name: "Шериф",
    description: "Проверяй игроков ночью и разоблачай мафию",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "hover:border-amber-400/50",
    team: "peace",
  },
  {
    icon: Heart,
    name: "Доктор",
    description: "Спасай жителей от ночных нападений",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "hover:border-emerald-400/50",
    team: "peace",
  },
  {
    icon: Sparkles,
    name: "Эскортница",
    description: "Блокирует способность игрока на ночь",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "hover:border-pink-400/50",
    team: "peace",
  },
  {
    icon: Flame,
    name: "Отчаянный",
    description: "Может убить игрока при смерти",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "hover:border-orange-400/50",
    team: "peace",
  },
  {
    icon: Swords,
    name: "Спецназ",
    description: "Может убить одного игрока за игру",
    color: "text-slate-400",
    bgColor: "bg-slate-400/10",
    borderColor: "hover:border-slate-400/50",
    team: "peace",
  },
  {
    icon: Lock,
    name: "Бессмертный",
    description: "Выживает после первого убийства",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "hover:border-cyan-400/50",
    team: "peace",
  },
  {
    icon: Target,
    name: "Стрелочник",
    description: "Перенаправляет действия на другого игрока",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "hover:border-yellow-400/50",
    team: "peace",
  },
  {
    icon: UserX,
    name: "Тюремщик",
    description: "Может заблокировать игрока в тюрьме",
    color: "text-stone-400",
    bgColor: "bg-stone-400/10",
    borderColor: "hover:border-stone-400/50",
    team: "peace",
  },
  {
    icon: Star,
    name: "Архангел",
    description: "Защитник мирных с уникальными силами",
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    borderColor: "hover:border-sky-400/50",
    team: "peace",
  },
  {
    icon: Crosshair,
    name: "Маньяк",
    description: "Играет сам за себя и устраняет всех",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "hover:border-purple-400/50",
    team: "neutral",
  },
  {
    icon: Scissors,
    name: "Двуликий",
    description: "Может менять сторону в течение игры",
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "hover:border-violet-400/50",
    team: "neutral",
  },
]

// Additional/special roles
const additionalRoles = [
  {
    icon: User,
    name: "Чарли",
    description: "Мирный житель с невидимым иммунитетом на первое убийство и первое голосование",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "hover:border-blue-400/50",
    team: "peace",
  },
  {
    icon: Briefcase,
    name: "Наёмник",
    description: "Играет за мафию. Сначала должен найти мафию и присоединиться, потом может дополнительно убивать",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    team: "mafia",
  },
  {
    icon: Target,
    name: "Сапёр",
    description: "Мафия. После первой ночи минирует игрока — если к нему приходит роль, она погибает",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    team: "mafia",
  },
  {
    icon: Heart,
    name: "Хирург",
    description: "Мафия. Может вылечить одного игрока один раз за игру",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    team: "mafia",
  },
  {
    icon: UserX,
    name: "Вдова",
    description: "Играет сама за себя. В первую ночь выбирает мужа — пока он жив, играет за мирных, если умирает — начинает убивать",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "hover:border-purple-400/50",
    team: "neutral",
  },
  {
    icon: Bird,
    name: "Феникс",
    description: "Мирный житель с иммунитетом к первому выстрелу",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "hover:border-orange-400/50",
    team: "peace",
  },
  {
    icon: Sparkles,
    name: "Коллекционер",
    description: "Играет сам за себя. Каждую ночь убивает, но должен чередовать роли жертв",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "hover:border-purple-400/50",
    team: "neutral",
  },
  {
    icon: Timer,
    name: "Часовщик",
    description: "Мирный житель. Если не убит ночью, может вернуть ночь обратно, и роли снова делают выбор",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "hover:border-cyan-400/50",
    team: "peace",
  },
  {
    icon: Link2,
    name: "Связанный",
    description: "Игрок без роли. В первую ночь связывает судьбу с другим игроком — если один умирает, второй тоже",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "hover:border-rose-400/50",
    team: "neutral",
  },
]

function RoleCard({ role }: { role: typeof mainRoles[0] }) {
  return (
    <div
      className={`group relative rounded-2xl bg-card border border-border ${role.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden`}
    >
      {/* Hover glow */}
      <div className={`absolute inset-0 ${role.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
      
      <div className="relative p-4 lg:p-5 flex flex-col items-center text-center">
        {/* Icon */}
        <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${role.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <role.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${role.color}`} />
        </div>
        
        {/* Name */}
        <h3 className="text-sm lg:text-base font-bold text-foreground mb-1">
          {role.name}
        </h3>
        
        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity line-clamp-2">
          {role.description}
        </p>
      </div>
    </div>
  )
}

export default function RolesSection() {
  const [showAdditional, setShowAdditional] = useState(false)

  return (
    <section id="roles" className="relative py-20 lg:py-32 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Персонажи
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Роли городской мафии
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Каждая роль уникальна и требует своей стратегии
          </p>
        </div>

        {/* Team Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-foreground">Мафия</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20">
            <div className="w-3 h-3 rounded-full bg-blue-400" />
            <span className="text-sm text-foreground">Мирные</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20">
            <div className="w-3 h-3 rounded-full bg-purple-400" />
            <span className="text-sm text-foreground">Нейтральные</span>
          </div>
        </div>

        {/* Main Roles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4 mb-8">
          {mainRoles.map((role) => (
            <RoleCard key={role.name} role={role} />
          ))}
        </div>

        {/* Toggle Additional Roles */}
        <div className="text-center">
          <button
            onClick={() => setShowAdditional(!showAdditional)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 text-foreground font-medium transition-all duration-300"
          >
            {showAdditional ? "Скрыть дополнительные роли" : "Показать дополнительные роли"}
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAdditional ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Additional Roles */}
        {showAdditional && (
          <div className="mt-8">
            <h3 className="text-center text-xl font-bold text-foreground mb-6">Дополнительные роли</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
              {additionalRoles.map((role) => (
                <RoleCard key={role.name} role={role} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
