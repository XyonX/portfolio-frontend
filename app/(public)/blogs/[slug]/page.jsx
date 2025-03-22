import React from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

async function getBlogBySlug(slug) {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    if (!json.data) return null;
    console.log("Fetched blog by slug", json.data);
    return json.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Post Not Found" };

  return {
    title: `${blog.title} | Joy's Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.featuredImage],
    },
  };
}

const BlogPostPage = async ({ params }) => {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-primary-bg min-h-screen">
      <Head>
        <title>{blog.title} | My Blog</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        {blog.featuredImage && (
          <meta property="og:image" content={blog.featuredImage} />
        )}
      </Head>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link href="/" className="text-accent-text hover:underline">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link href="/blogs" className="text-accent-text hover:underline">
              Blogs
            </Link>{" "}
            &gt; <span className="text-secondary-text">{blog.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-primary-text mb-4">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center text-secondary-text mb-6">
            <span>{new Date(blog.publicationDate).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime} min read</span>
          </div>

          {/* Categories */}
          {blog.categories.length > 0 && (
            <div className="mb-6">
              {blog.categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="mb-8">
              <img
                src={`${API_BASE_URL}${blog.featuredImage}`}
                alt={blog.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Markdown Content */}
          <div className="prose prose-lg text-gray-800 max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  if (!inline && match) {
                    return (
                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    );
                  } else {
                    return (
                      <code
                        className={`${
                          className || ""
                        } p-1 rounded bg-gray-100 text-gray-800`}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }
                },
                img({ node, ...props }) {
                  return (
                    <div className="my-8">
                      <Image
                        {...props}
                        width={1200}
                        height={600}
                        className="rounded-lg shadow-lg"
                        alt={props.alt || "Blog post image"}
                      />
                    </div>
                  );
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* Back to Blogs Link */}
          <div className="mt-8">
            <Link href="/blogs" className="text-accent-text hover:underline">
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;

// import React from "react";
// import ReactMarkdown from "react-markdown";
// import { notFound } from "next/navigation";

// async function getBlogBySlug(slug) {
//   const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";

//   try {
//     const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
//     if (!res.ok) throw new Error("Failed to fetch");
//     const json = await res.json();
//     if (!json.data) return null;
//     console.log("Fetched blog by slug", json.data);
//     return json.data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// const page = async ({ params }) => {
//   const blog = await getBlogBySlug(params.slug);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <div className="prose">
//       <ReactMarkdown>{blog.content}</ReactMarkdown>
//     </div>
//   );
// };

// export default page;
