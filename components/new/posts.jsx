import Link from "next/link";
import Image from "next/image";
import { LucideArrowRight } from "lucide-react";
import fs from "fs";
import path from "path";

// Utility functions
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  if (!match) return { metadata: {}, content: fileContent };

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim()] = value;
  });

  return { metadata, content };
}

function getMDXFiles(dir) {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}

function readMDXFile(filePath) {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
  } catch (error) {
    console.error("Error reading file:", error);
    return { metadata: {}, content: "" };
  }
}

function getBlogPosts() {
  try {
    const postsDirectory = path.join(process.cwd(), "app", "blog", "posts");
    const mdxFiles = getMDXFiles(postsDirectory);

    return mdxFiles.map((file) => {
      const { metadata, content } = readMDXFile(
        path.join(postsDirectory, file)
      );
      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    });
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return [];
  }
}

function formatDate(date: string, includeRelative = false) {
  if (!date || !date.includes) return "No date";

  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

export function BlogPosts() {
  let allBlogs = [];
  try {
    allBlogs = getBlogPosts().sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt || "2000-01-01") >
        new Date(b.metadata.publishedAt || "2000-01-01")
      ) {
        return -1;
      }
      return 1;
    });
  } catch (error) {
    console.error("Error sorting blog posts:", error);
  }

  if (allBlogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 dark:text-neutral-400">
          No blog posts found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {allBlogs.map((post, index) => (
        <article key={post.slug} className="group">
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={
                      post.metadata.image ||
                      `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(
                        post.metadata.title || "Blog Post"
                      )}`
                    }
                    alt={post.metadata.title || "Blog Post"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <time className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 block">
                  {formatDate(post.metadata.publishedAt, false)}
                </time>
                <h2 className="text-2xl font-medium mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {post.metadata.title || "Untitled Post"}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {post.metadata.summary || "No summary available"}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Read article
                  <LucideArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </div>
          </Link>

          {index < allBlogs.length - 1 && (
            <div className="mt-12 border-b border-neutral-200 dark:border-neutral-800"></div>
          )}
        </article>
      ))}
    </div>
  );
}
