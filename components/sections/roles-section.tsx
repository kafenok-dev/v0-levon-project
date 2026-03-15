"use client"

import { User, Skull, Shield, Heart, Eye, Crown, Star } from "lucide-react"

const roles = [
  {
    icon: User,
    name: "Мирный житель",
    description: "Ищи мафию среди игроков и голосуй за её устранение",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "hover:border-blue-400/50",
  },
  {
    icon: Skull,
    name: "Мафия",
    description: "Притворяйся мирным и устраняй жителей по ночам",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
  },
  {
    icon: Shield,
    name: "Шериф",
    description: "Проверяй игроков ночью и разоблачай мафию",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "hover:border-amber-400/50",
  },
  {
    icon: Heart,
    name: "Доктор",
    description: "Спасай жителей от ночных нападений мафии",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "hover:border-emerald-400/50",
  },
  {
    icon: Eye,
    name: "Маньяк",
    description: "Играешь сам за себя и устраняешь всех",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "hover:border-purple-400/50",
  },
  {
    icon: Crown,
    name: "Дон мафии",
    description: "Лидер мафии с особыми способностями",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
  },
  {
    icon: Star,
    name: "Архангел",
    description: "Защитник мирных с уникальными силами",
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    borderColor: "hover:border-sky-400/50",
  },
]

export default function RolesSection() {
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
            Роли в игре
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Каждая роль уникальна и требует своей стратегии
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-6">
          {roles.map((role) => (
            <div
              key={role.name}
              className={`group relative rounded-2xl bg-card border border-border ${role.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer overflow-hidden`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 ${role.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              
              <div className="relative p-5 lg:p-6 flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${role.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${role.color}`} />
                </div>
                
                {/* Name */}
                <h3 className="text-base lg:text-lg font-bold text-foreground mb-2">
                  {role.name}
                </h3>
                
                {/* Description - hidden on mobile, visible on hover for desktop */}
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
