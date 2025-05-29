import Image from "next/image";
import Link from "next/link";
import { LucideArrowRight, Clock, Tag } from "lucide-react";

async function getPortfolios() {
  const API_BASE_URL = "https://joycodes-backend.vercel.app";

  const res = await fetch(`${API_BASE_URL}/api/portfolios`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch portfolios");
  }
  return res.json();
}

export async function FeaturedProjects() {
  const API_BASE_URL = "https://joycodes-backend.vercel.app";

  try {
    const res = await getPortfolios();
    const portfolios = res.data;
    const featuredProjects = portfolios.slice(0, 2); // Get first 2 projects

    return (
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-mono text-2xl font-semibold">Selected Work</h2>
          <Link
            href="/portfolio"
            className="text-sm font-medium flex items-center hover:underline"
          >
            View all
            <LucideArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((post, index) => (
            <Link
              key={`project-${post._id}-${index}`}
              href={`/portfolio/${post.slug || post._id}`}
              className="group"
            >
              <article className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48 w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-purple-500/10" />
                  <Image
                    src={
                      post.featuredImage &&
                      !post.featuredImage.startsWith("/placeholder")
                        ? `${API_BASE_URL}${post.featuredImage}`
                        : "/placeholder.svg?height=192&width=320"
                    }
                    alt={post.title || "Project"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Project
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-5 flex flex-col">
                  <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mb-3 space-x-4">
                    {post.technologies && post.technologies.length > 0 && (
                      <div className="flex items-center">
                        <Tag size={14} className="mr-1" />
                        <span>{post.technologies[0]}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-medium text-lg text-neutral-900 dark:text-neutral-100 mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title || "Untitled Project"}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3 flex-grow">
                    {post.description || "No description available"}
                  </p>

                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    View project
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return (
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-mono text-2xl font-semibold">Selected Work</h2>
          <Link
            href="/portfolio"
            className="text-sm font-medium flex items-center hover:underline"
          >
            View all
            <LucideArrowRight size={14} className="ml-1" />
          </Link>
        </div>
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">
            Unable to load projects at the moment.
          </p>
        </div>
      </section>
    );
  }
}
