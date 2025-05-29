import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  LucideArrowLeft,
  LucideClock,
  LucideCalendar,
  LucideExternalLink,
  LucideGithub,
} from "lucide-react";
import { MarkdownRenderer } from "../../../../components/new/mdx";

// Define baseUrl directly here instead of importing
const baseUrl = "https://portfolio-blog-starter.vercel.app";

async function getPortfolioBySlug(slug) {
  const API_BASE_URL = "https://joycodes-backend.vercel.app";

  try {
    const res = await fetch(`${API_BASE_URL}/api/portfolios`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch portfolios");
    }

    const data = await res.json();
    const portfolio = data.data.find(
      (portfolio) => portfolio.slug === slug || portfolio._id === slug
    );

    return portfolio || null;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
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
  const portfolio = await getPortfolioBySlug(params.slug);

  if (!portfolio) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const { title, description, featuredImage } = portfolio;
  const ogImage = featuredImage
    ? `https://joycodes-backend.vercel.app${featuredImage}`
    : `${baseUrl}/og?title=${encodeURIComponent(title || "Project")}`;

  return {
    title: title || "Untitled Project",
    description: description || "No description available",
    openGraph: {
      title: title || "Untitled Project",
      description: description || "No description available",
      type: "article",
      publishedTime: portfolio.createdAt || portfolio.publicationDate,
      url: `${baseUrl}/portfolio/${portfolio.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || "Untitled Project",
      description: description || "No description available",
      images: [ogImage],
    },
  };
}

export default async function PortfolioProject({ params }) {
  const portfolio = await getPortfolioBySlug(params.slug);

  if (!portfolio) {
    notFound();
  }

  // Generate a placeholder image URL if no image is provided
  const projectImage = portfolio.featuredImage
    ? `https://joycodes-backend.vercel.app${portfolio.featuredImage}`
    : `/placeholder.svg?height=600&width=1200&text=${encodeURIComponent(
        portfolio.title || "Project"
      )}`;

  // Use readTime from API or calculate it
  const readingTime =
    portfolio.readTime ||
    Math.max(1, Math.ceil((portfolio.content?.split(/\s+/).length || 0) / 200));

  return (
    <article className="max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: portfolio.title || "Untitled Project",
            dateCreated:
              portfolio.createdAt ||
              portfolio.publicationDate ||
              new Date().toISOString(),
            dateModified:
              portfolio.updatedAt ||
              portfolio.createdAt ||
              portfolio.publicationDate ||
              new Date().toISOString(),
            description: portfolio.description || "No description available",
            image: projectImage,
            url: `${baseUrl}/portfolio/${portfolio.slug}`,
            author: {
              "@type": "Person",
              name: "Joydip Chakraborty",
            },
          }),
        }}
      />

      <Link
        href="/portfolio"
        className="inline-flex items-center text-sm font-medium mb-8 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <LucideArrowLeft size={14} className="mr-1" />
        Back to all projects
      </Link>

      <div className="mb-12">
        <div className="relative w-full h-[50vh] mb-8 rounded-2xl overflow-hidden">
          <Image
            src={projectImage || "/placeholder.svg"}
            alt={portfolio.title || "Project"}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {portfolio.title || "Untitled Project"}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center">
            <LucideCalendar size={16} className="mr-1" />
            <time>
              {formatDate(portfolio.createdAt || portfolio.publicationDate)}
            </time>
          </div>
          <div className="flex items-center">
            <LucideClock size={16} className="mr-1" />
            <span>{readingTime} min read</span>
          </div>
          {portfolio.categories && portfolio.categories.length > 0 && (
            <div className="flex gap-2">
              {portfolio.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>

        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          {portfolio.description || "No description available"}
        </p>

        {/* Project Links */}
        {(portfolio.liveUrl || portfolio.githubUrl) && (
          <div className="flex gap-4 mb-8">
            {portfolio.liveUrl && (
              <a
                href={portfolio.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
              >
                <LucideExternalLink size={16} className="mr-2" />
                View Live Demo
              </a>
            )}
            {portfolio.githubUrl && (
              <a
                href={portfolio.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium hover:opacity-90 transition-opacity"
              >
                <LucideGithub size={16} className="mr-2" />
                View Source Code
              </a>
            )}
          </div>
        )}
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-mono prose-headings:font-semibold prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-img:rounded-xl">
        <MarkdownRenderer content={portfolio.content || ""} />
      </div>

      {/* Technologies Used */}
      {portfolio.technologies && portfolio.technologies.length > 0 && (
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-medium mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {portfolio.tags && portfolio.tags.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {portfolio.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-medium mb-4">Share this project</h2>
        <div className="flex space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `Check out this project: ${portfolio.title}`
            )}&url=${encodeURIComponent(
              `${baseUrl}/portfolio/${portfolio.slug}`
            )}`}
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
              `${baseUrl}/portfolio/${portfolio.slug}`
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
              `Check out this project: ${portfolio.title}`
            )}&body=${encodeURIComponent(
              `I thought you might find this project interesting: ${baseUrl}/portfolio/${portfolio.slug}`
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
