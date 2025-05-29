import Image from "next/image";
import Link from "next/link";
import { LucideArrowRight, LucideClock } from "lucide-react";
import { Suspense } from "react";

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

// Calculate reading time (rough estimate)
function calculateReadingTime(content) {
  if (!content) return 1;
  const wordCount = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200)); // Assuming 200 words per minute
}

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

function BlogSkeleton() {
  return (
    <div className="space-y-12">
      <div className="h-10 w-48 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-6"></div>
      <div className="h-6 w-full max-w-2xl bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-12"></div>

      <div className="space-y-16">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            <div className="md:col-span-1">
              <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
            </div>
            <div className="md:col-span-2">
              <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-2"></div>
              <div className="h-8 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-3"></div>
              <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-4"></div>
              <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function BlogContent() {
  let blogs = [];
  let error = null;

  try {
    const response = await getBlogs();
    blogs = response.data || [];

    // Sort blogs by date (newest first)
    blogs = blogs.sort(
      (a, b) =>
        new Date(b.createdAt || b.publishedAt || 0).getTime() -
        new Date(a.createdAt || a.publishedAt || 0).getTime()
    );
  } catch (err) {
    error = err.message;
    console.error("Error fetching blogs:", err);
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 dark:text-neutral-400">
          Unable to load blog posts at the moment. Please try again later.
        </p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 dark:text-neutral-400">
          No blog posts available yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {blogs.map((blog, index) => (
        <article key={blog._id} className="group">
          <Link href={`/blog/${blog.slug || blog._id}`} className="block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={
                      `https://joycodes-backend.vercel.app${blog.featuredImage}` ||
                      `/placeholder.svg?height=169&width=300&text=${encodeURIComponent(
                        blog.title || "Blog Post"
                      )}`
                    }
                    alt={blog.title || "Blog Post"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-2">
                  <time className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDate(blog.createdAt || blog.publishedAt)}
                  </time>
                  <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                    <LucideClock size={14} className="mr-1" />
                    <span>{calculateReadingTime(blog.content)} min read</span>
                  </div>
                </div>
                <h2 className="text-2xl font-medium mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {blog.title || "Untitled Post"}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {blog.summary || blog.description || "No summary available"}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Read article
                  <LucideArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </div>
          </Link>

          {index < blogs.length - 1 && (
            <div className="mt-16 border-b border-neutral-200 dark:border-neutral-800"></div>
          )}
        </article>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="font-mono text-3xl font-bold mb-6">My Writing</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mb-12">
          I write about web development, programming languages, and developer
          tools. Here you'll find tutorials, opinions, and insights from my
          experience as a software developer.
        </p>
      </section>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent />
      </Suspense>
    </div>
  );
}
