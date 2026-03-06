"use client"

import { Star, Play, Quote } from "lucide-react"

const videoTestimonials = [
  {
    name: "Алексей",
    role: "Постоянный игрок",
    quote: "Лучший клуб для тех, кто любит интригу и общение",
  },
  {
    name: "Виктория",
    role: "Член клуба 2 года",
    quote: "Нашла здесь друзей и незабываемые эмоции",
  },
]

const textTestimonials = [
  {
    name: "Дмитрий К.",
    role: "Играет 3 года",
    text: "Каждый вечер в этом клубе — это новые эмоции и интересные знакомства. Атмосфера просто невероятная!",
    rating: 5,
  },
  {
    name: "Анастасия М.",
    role: "Новичок",
    text: "Пришла первый раз и была приятно удивлена. Ведущие всё объяснили, и я быстро влилась в игру.",
    rating: 5,
  },
  {
    name: "Игорь С.",
    role: "Играет 1 год",
    text: "Профессиональные ведущие, отличная компания и всегда интересные партии. Рекомендую!",
    rating: 5,
  },
  {
    name: "Елена В.",
    role: "Играет 2 года",
    text: "Здесь я нашла не просто игру, а настоящее сообщество единомышленников.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Что говорят игроки
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Реальные истории от членов нашего сообщества
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative aspect-video rounded-2xl bg-card border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background flex items-center justify-center">
                {/* Play button */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                  <Play className="w-7 h-7 lg:w-8 lg:h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-foreground/80 italic">{'"'}{testimonial.quote}{'"'}</p>
              </div>

              {/* Video badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                Видео-отзыв
              </div>
            </div>
          ))}
        </div>

        {/* Text Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {textTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary" fill="currentColor" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
