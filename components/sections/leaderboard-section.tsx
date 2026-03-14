"use client"

import { Trophy, Medal, TrendingUp, Crown, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const TELEGRAM_LINK = "https://t.me/mafia_no1_club"

const cityLeaders = [
  { rank: 1, name: "Игорь М.", points: 2847, games: 156, winrate: "68%" },
  { rank: 2, name: "Анна К.", points: 2654, games: 142, winrate: "65%" },
  { rank: 3, name: "Денис В.", points: 2531, games: 138, winrate: "62%" },
  { rank: 4, name: "Ольга С.", points: 2420, games: 129, winrate: "59%" },
  { rank: 5, name: "Павел Н.", points: 2315, games: 125, winrate: "58%" },
]

const sportLeaders = [
  { rank: 1, name: "Михаил Р.", points: 3124, games: 189, winrate: "71%" },
  { rank: 2, name: "Елена Т.", points: 2987, games: 175, winrate: "69%" },
  { rank: 3, name: "Артём Б.", points: 2856, games: 168, winrate: "66%" },
  { rank: 4, name: "Наталья Д.", points: 2743, games: 162, winrate: "64%" },
  { rank: 5, name: "Сергей К.", points: 2689, games: 155, winrate: "63%" },
]

function LeaderTable({ leaders, title, icon: Icon }: { 
  leaders: typeof cityLeaders
  title: string
  icon: typeof Trophy
}) {
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-background/50 border-b border-border flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">ТОП-5 игроков месяца</p>
        </div>
      </div>
      
      {/* Table */}
      <div className="divide-y divide-border">
        {leaders.map((player) => (
          <div
            key={player.name}
            className="px-6 py-4 flex items-center gap-4 hover:bg-background/30 transition-colors"
          >
            {/* Rank */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              player.rank === 1 
                ? "bg-amber-500/20 text-amber-400"
                : player.rank === 2
                ? "bg-slate-400/20 text-slate-300"
                : player.rank === 3
                ? "bg-amber-700/20 text-amber-600"
                : "bg-muted text-muted-foreground"
            }`}>
              {player.rank === 1 ? <Crown className="w-4 h-4" /> : player.rank}
            </div>
            
            {/* Name & Avatar */}
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">
                  {player.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{player.name}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{player.games} игр</span>
                  <span className="text-primary">WR: {player.winrate}</span>
                </div>
              </div>
            </div>
            
            {/* Points */}
            <div className="text-right">
              <p className="font-bold text-foreground">{player.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</p>
              <p className="text-xs text-muted-foreground">очков</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LeaderboardSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Рейтинг
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Рейтинг игроков
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ведём рейтинг по городской и спортивной мафии. Соревнуйтесь и становитесь лучшими!
          </p>
        </div>

        {/* Info Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Рейтинг обновляется после каждой игры</span>
          </div>
        </div>

        {/* Leaderboards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <LeaderTable 
            leaders={cityLeaders} 
            title="Городская мафия" 
            icon={Trophy}
          />
          <LeaderTable 
            leaders={sportLeaders} 
            title="Спортивная мафия" 
            icon={Medal}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-6 py-6 rounded-xl"
          >
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Trophy className="w-5 h-5 text-primary" />
              Рейтинг городской мафии
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-6 py-6 rounded-xl"
          >
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Medal className="w-5 h-5 text-amber-400" />
              Рейтинг спортивной мафии
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-border hover:bg-card text-foreground font-semibold px-6 py-6 rounded-xl"
          >
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Все игроки
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
