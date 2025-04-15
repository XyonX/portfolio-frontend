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

async function getPortfolioBySlug(slug) {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

  try {
    const res = await fetch(`${API_BASE_URL}/api/portfolios/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) return { title: "Post Not Found" };

  return {
    title: `${portfolio.title} | Joy's Portfolio`,
    description: portfolio.description,
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      images: [portfolio.featuredImage],
    },
  };
}

const PortfolioPostPage = async ({ params }) => {
  const { slug } = await params; // ✅ Extract `slug` first
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

  return (
    <div className="bg-primary-bg min-h-screen">
      <Head>
        <title>{portfolio.title} | My Portfolio</title>
        <meta name="description" content={portfolio.description} />
        <meta property="og:title" content={portfolio.title} />
        <meta property="og:description" content={portfolio.description} />
        {portfolio.featuredImage && (
          <meta property="og:image" content={portfolio.featuredImage} />
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
            <Link
              href="/portfolios"
              className="text-accent-text hover:underline"
            >
              Portfolios
            </Link>{" "}
            &gt; <span className="text-secondary-text">{portfolio.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-primary-text mb-4">
            {portfolio.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center text-secondary-text mb-6">
            <span>
              {new Date(portfolio.publicationDate).toLocaleDateString()}
            </span>
            <span className="mx-2">•</span>
            <span>{portfolio.readTime} min read</span>
          </div>

          {/* Categories */}
          {portfolio.categories.length > 0 && (
            <div className="mb-6">
              {portfolio.categories.map((category, index) => (
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
          {portfolio.featuredImage && (
            <div className="mb-8">
              <img
                src={`${API_BASE_URL}${portfolio.featuredImage}`}
                alt={portfolio.title}
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
                        alt={props.alt || "Portfolio post image"}
                      />
                    </div>
                  );
                },
              }}
            >
              {portfolio.content}
            </ReactMarkdown>
          </div>

          {/* Back to Portfolios Link */}
          <div className="mt-8">
            <Link
              href="/portfolios"
              className="text-accent-text hover:underline"
            >
              ← Back to Portfolios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPostPage;
