import Image from "next/image";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";

async function getBlogs() {
  const API_BASE_URL = "https://joycodes-backend.vercel.app";

  const res = await fetch(`${API_BASE_URL}/api/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return res.json();
}

function formatDate(date) {
  if (!date) return "No date";

  const targetDate = new Date(date);
  return targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function FeaturedBlogs() {
  const API_BASE_URL = "https://joycodes-backend.vercel.app";
  try {
    const res = await getBlogs();
    const blogs = res.data;
    const featuredBlogs = blogs
      .sort(
        (a, b) =>
          new Date(b.createdAt || b.publishedAt) -
          new Date(a.createdAt || a.publishedAt)
      )
      .slice(0, 3); // Get latest 3 blogs

    if (featuredBlogs.length === 0) {
      return null; // Don't render the section if no blogs
    }

    return (
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-mono text-2xl font-semibold">Latest Writing</h2>
          <Link
            href="/blog"
            className="text-sm font-medium flex items-center hover:underline"
          >
            View all
            <LucideArrowRight size={14} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug || blog._id}`}
              className="group"
            >
              <article className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-40 w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-purple-500/10" />
                  <Image
                    src={
                      `${API_BASE_URL}${blog.featuredImage}` ||
                      `/placeholder.svg?height=160&width=320&text=${encodeURIComponent(
                        blog.title || "Blog Post"
                      )}`
                    }
                    alt={blog.title || "Blog Post"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col">
                  <time className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                    {formatDate(blog.createdAt || blog.publishedAt)}
                  </time>
                  <h3 className="font-medium text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {blog.title || "Untitled Post"}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
                    {blog.summary || blog.description || "No summary available"}
                  </p>
                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Read article
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-mono text-2xl font-semibold">Latest Writing</h2>
          <Link
            href="/blog"
            className="text-sm font-medium flex items-center hover:underline"
          >
            View all
            <LucideArrowRight size={14} className="ml-1" />
          </Link>
        </div>
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">
            Unable to load blog posts at the moment.
          </p>
        </div>
      </section>
    );
  }
}
