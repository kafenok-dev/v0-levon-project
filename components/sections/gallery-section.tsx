"use client"

const galleryItems = [
  { id: 1, span: "col-span-2 row-span-2", label: "Игроки за столом" },
  { id: 2, span: "col-span-1 row-span-1", label: "Эмоции" },
  { id: 3, span: "col-span-1 row-span-1", label: "Интерьер клуба" },
  { id: 4, span: "col-span-1 row-span-2", label: "Ведущие" },
  { id: 5, span: "col-span-1 row-span-1", label: "Игровая атмосфера" },
  { id: 6, span: "col-span-2 row-span-1", label: "Командные фото" },
]

export default function GallerySection() {
  return (
    <section className="relative py-20 lg:py-32 bg-card">
      {/* Subtle top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Атмосфера
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Галерея атмосферы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Загляните в наш клуб и почувствуйте атмосферу игры
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[180px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl bg-background border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 ${item.span}`}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/50" />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/5 flex items-center justify-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10" />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
