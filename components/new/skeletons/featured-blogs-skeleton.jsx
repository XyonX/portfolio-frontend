export function FeaturedBlogsSkeleton() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
        <div className="h-5 w-20 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden"
          >
            <div className="relative h-40 w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
            <div className="flex-1 p-5 flex flex-col">
              <div className="h-3 w-20 bg-neutral-200 dark:bg-neutral-800 rounded mb-2 animate-pulse"></div>
              <div className="h-6 w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-2 animate-pulse"></div>
              <div className="space-y-2 mb-4 flex-1">
                <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
              </div>
              <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
