export function FeaturedProjectsSkeleton() {
    return (
      <section>
        <div className="flex items-center justify-between mb-8">
          <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
          <div className="h-5 w-20 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((index) => (
            <div key={index} className="group">
              <div className="relative h-64 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="h-6 w-3/4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 w-full bg-white/20 rounded mb-3"></div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((techIndex) => (
                      <div key={techIndex} className="h-6 w-16 bg-white/20 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  