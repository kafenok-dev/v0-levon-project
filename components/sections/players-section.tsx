"use client"

import { Gamepad2, Heart, Trophy, Crown, Medal } from "lucide-react"

// Mock players data - will be replaced with backend data
const players = [
  {
    id: 1,
    nickname: "Dark_Lord",
    games: 156,
    favoriteRole: "Мафия",
    comment: "Лучший клуб для тех, кто любит интеллектуальные игры!",
    initials: "DL",
  },
  {
    id: 2,
    nickname: "Angel_Eyes",
    games: 142,
    favoriteRole: "Шериф",
    comment: "Нашла здесь настоящих друзей и незабываемые эмоции",
    initials: "AE",
  },
  {
    id: 3,
    nickname: "Silent_Hunter",
    games: 138,
    favoriteRole: "Маньяк",
    comment: "Каждая игра — это новая история и новые эмоции",
    initials: "SH",
  },
  {
    id: 4,
    nickname: "Phoenix_Rise",
    games: 129,
    favoriteRole: "Доктор",
    comment: "Профессиональные ведущие и отличная атмосфера",
    initials: "PR",
  },
  {
    id: 5,
    nickname: "Wolf_Alpha",
    games: 125,
    favoriteRole: "Дон",
    comment: "Играю уже 2 года, и каждый вечер жду с нетерпением",
    initials: "WA",
  },
  {
    id: 6,
    nickname: "Lady_Luck",
    games: 118,
    favoriteRole: "Мирный",
    comment: "Сильное комьюнити и дружелюбная атмосфера",
    initials: "LL",
  },
  {
    id: 7,
    nickname: "Shadow_King",
    games: 112,
    favoriteRole: "Мафия",
    comment: "Здесь я научился читать людей и убеждать",
    initials: "SK",
  },
  {
    id: 8,
    nickname: "Crystal_Clear",
    games: 105,
    favoriteRole: "Шериф",
    comment: "Лучшее место для новых знакомств в городе",
    initials: "CC",
  },
  {
    id: 9,
    nickname: "Night_Owl",
    games: 98,
    favoriteRole: "Архангел",
    comment: "Каждая игра — это маленький спектакль",
    initials: "NO",
  },
  {
    id: 10,
    nickname: "Storm_Rider",
    games: 92,
    favoriteRole: "Маньяк",
    comment: "Пришёл попробовать и остался навсегда",
    initials: "SR",
  },
]

// Top players of the month
const topPlayers = [
  {
    rank: 1,
    nickname: "Dark_Lord",
    initials: "DL",
    subtitle: "Мастер интриг",
    icon: Crown,
  },
  {
    rank: 2,
    nickname: "Angel_Eyes",
    initials: "AE",
    subtitle: "Легенда клуба",
    icon: Medal,
  },
  {
    rank: 3,
    nickname: "Silent_Hunter",
    initials: "SH",
    subtitle: "Восходящая звезда",
    icon: Trophy,
  },
]

export default function PlayersSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-card">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Players of the Month */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Признание
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
              Лучшие игроки месяца
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {topPlayers.map((player) => (
              <div
                key={player.rank}
                className={`relative rounded-2xl border text-center p-6 lg:p-8 ${
                  player.rank === 1
                    ? "bg-gradient-to-b from-amber-500/10 to-card border-amber-500/30 shadow-lg shadow-amber-500/10"
                    : player.rank === 2
                    ? "bg-gradient-to-b from-slate-400/10 to-card border-slate-400/30"
                    : "bg-gradient-to-b from-amber-700/10 to-card border-amber-700/30"
                }`}
              >
                {/* Rank badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  player.rank === 1
                    ? "bg-amber-500 text-background"
                    : player.rank === 2
                    ? "bg-slate-400 text-background"
                    : "bg-amber-700 text-foreground"
                }`}>
                  {player.rank}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  player.rank === 1
                    ? "bg-amber-500/20"
                    : player.rank === 2
                    ? "bg-slate-400/20"
                    : "bg-amber-700/20"
                }`}>
                  <player.icon className={`w-6 h-6 ${
                    player.rank === 1
                      ? "text-amber-500"
                      : player.rank === 2
                      ? "text-slate-400"
                      : "text-amber-700"
                  }`} />
                </div>

                {/* Avatar */}
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 mb-4">
                  <span className="text-xl font-bold text-primary">{player.initials}</span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1">{player.nickname}</h3>
                <p className="text-sm text-muted-foreground">{player.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Players */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Комьюнити
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
              Игроки клуба
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Познакомьтесь с постоянными игроками нашего сообщества
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {players.map((player) => (
              <div
                key={player.id}
                className="group relative rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                <div className="p-4 lg:p-5">
                  {/* Avatar */}
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold text-primary">{player.initials}</span>
                  </div>

                  {/* Nickname */}
                  <h4 className="text-center font-bold text-foreground mb-1 text-sm truncate">
                    {player.nickname}
                  </h4>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                    <Gamepad2 className="w-3 h-3" />
                    <span>{player.games} игр</span>
                  </div>

                  {/* Favorite role */}
                  <div className="flex items-center justify-center gap-1 text-xs text-primary mb-3">
                    <Heart className="w-3 h-3" />
                    <span>{player.favoriteRole}</span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-muted-foreground text-center leading-relaxed line-clamp-2">
                    {player.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
