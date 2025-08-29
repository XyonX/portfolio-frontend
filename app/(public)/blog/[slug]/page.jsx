import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LucideArrowLeft, LucideClock, LucideCalendar } from "lucide-react";
// import { MarkdownRenderer } from "../../../../components/new/mdx";
import { MarkdownRenderer } from "../../../../components/new/markdown-renderer";
// Define baseUrl directly here instead of importing
const baseUrl = "https://portfolio-blog-starter.vercel.app";
const API_BASE_URL = "https://joycodes-backend.vercel.app";

async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();
    const blog = data.data.find(
      (blog) => blog.slug === slug || blog._id === slug
    );

    return blog || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
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

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { title, description, featuredImage } = blog;
  const ogImage = featuredImage
    ? `${API_BASE_URL}${featuredImage}`
    : `${baseUrl}/og?title=${encodeURIComponent(title || "Blog Post")}`;

  return {
    title: title || "Untitled Post",
    description: description || "No description available",
    openGraph: {
      title: title || "Untitled Post",
      description: description || "No description available",
      type: "article",
      publishedTime: blog.createdAt || blog.publicationDate,
      url: `${baseUrl}/blog/${blog.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || "Untitled Post",
      description: description || "No description available",
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  // Generate a placeholder image URL if no image is provided
  const postImage = blog.featuredImage
    ? `https://joycodes-backend.vercel.app${blog.featuredImage}`
    : `/placeholder.svg?height=600&width=1200&text=${encodeURIComponent(
        blog.title || "Blog Post"
      )}`;

  // Use readTime from API or calculate it
  const readingTime =
    blog.readTime ||
    Math.max(1, Math.ceil((blog.content?.split(/\s+/).length || 0) / 200));

  return (
    // <article className="max-w-3xl mx-auto">
    <article className="max-w-3xl mx-auto w-full px-2 sm:px-0 overflow-x-hidden">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title || "Untitled Post",
            datePublished:
              blog.createdAt ||
              blog.publicationDate ||
              new Date().toISOString(),
            dateModified:
              blog.updatedAt ||
              blog.createdAt ||
              blog.publicationDate ||
              new Date().toISOString(),
            description: blog.description || "No description available",
            image: postImage,
            url: `${baseUrl}/blog/${blog.slug}`,
            author: {
              "@type": "Person",
              name: "Joydip Chakraborty",
            },
          }),
        }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-medium mb-8 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <LucideArrowLeft size={14} className="mr-1" />
        Back to all posts
      </Link>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-mono prose-headings:font-semibold prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-img:rounded-xl">
        <MarkdownRenderer content={blog.content || ""} />
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-medium mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-medium mb-4">Share this article</h2>
        <div className="flex space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              blog.title || "Blog Post"
            )}&url=${encodeURIComponent(`${baseUrl}/blog/${blog.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Share on Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              `${baseUrl}/blog/${blog.slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(
              blog.title || "Blog Post"
            )}&body=${encodeURIComponent(
              `I thought you might enjoy this article: ${baseUrl}/blog/${blog.slug}`
            )}`}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Share via Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
