"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type MafiaRole = {
  id: string
  icon_key: string
  title: string
  short_description: string
  display_order: number
  published: boolean
}

const fallbackRoles: MafiaRole[] = [
  {
    id: "1",
    icon_key: "",
    title: "Мафия",
    short_description: "Притворяйся мирным и устраняй жителей по ночам",
    display_order: 1,
    published: true,
  },
  {
    id: "2",
    icon_key: "",
    title: "Шериф",
    short_description: "Проверяй игроков ночью и разоблачай мафию",
    display_order: 2,
    published: true,
  },
  {
    id: "3",
    icon_key: "",
    title: "Доктор",
    short_description: "Спасай жителей от ночных нападений",
    display_order: 3,
    published: true,
  },
]

function getIconUrl(path: string) {
  if (!path) return ""
  const { data } = supabase.storage.from("gallery").getPublicUrl(path)
  return data.publicUrl
}

function RoleCard({ role }: { role: MafiaRole }) {
  const imageUrl = role.icon_key ? getIconUrl(role.icon_key) : ""

  return (
    <div className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

      <div className="relative p-4 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 overflow-hidden group-hover:scale-110 transition-transform duration-300">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={role.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-primary/40" />
          )}
        </div>

        <h3 className="text-sm font-bold text-foreground mb-1">
          {role.title}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity line-clamp-2">
          {role.short_description}
        </p>
      </div>
    </div>
  )
}

export default function RolesSection() {
  const [roles, setRoles] = useState<MafiaRole[]>(fallbackRoles)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadRoles() {
      try {
        const { data, error } = await supabase
          .from("mafia_roles")
          .select("id, icon_key, title, short_description, display_order, published")
          .eq("published", true)
          .order("display_order", { ascending: true })

        if (error || !data || data.length === 0) {
          setRoles(fallbackRoles)
        } else {
          setRoles(data)
        }
      } catch {
        setRoles(fallbackRoles)
      } finally {
        setLoading(false)
      }
    }

    loadRoles()
  }, [])

  return (
    <section id="roles" className="relative py-20 lg:py-32 bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>

        {loading && (
          <div className="text-center mt-6 text-sm text-muted-foreground">
            Загрузка ролей...
          </div>
        )}
      </div>
    </section>
  )
}
