"use client"

import { Play, Info } from "lucide-react"

const videos = [
  {
    title: "Как играть в городскую мафию",
    duration: "5:32",
    thumbnail: "city",
  },
  {
    title: "Как играть в спортивную мафию",
    duration: "4:15",
    thumbnail: "sport",
  },
]

export default function BeginnerSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-card overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Для новичков
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Никогда не играли в мафию?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Перед каждой игрой ведущие объясняют правила и помогают новичкам 
              быстро включиться в процесс. Вы освоитесь уже с первой партии!
            </p>
            
            {/* Info cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Подробные правила</h4>
                  <p className="text-sm text-muted-foreground">Объясним всё перед игрой</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Дружелюбная атмосфера</h4>
                  <p className="text-sm text-muted-foreground">Поддержим на первых играх</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Placeholders */}
          <div className="grid gap-6">
            {videos.map((video) => (
              <div
                key={video.title}
                className="group relative aspect-video rounded-2xl bg-background border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Video thumbnail placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background flex items-center justify-center">
                  {/* Play button */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <Play className="w-7 h-7 lg:w-8 lg:h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {video.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {video.duration}
                  </span>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                  Видео
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
