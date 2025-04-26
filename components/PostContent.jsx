import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
const PostContent = ({ post }) => {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

  return (
    <div className="bg-primary-bg min-h-screen">
      <Head>
        <title>{post.title} | My post</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        {post.featuredImage && (
          <meta property="og:image" content={post.featuredImage} />
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
            &gt; <span className="text-secondary-text">{post.title}</span>
          </div>

          {/* Markdown Content */}
          <div className="prose text-sm md:text-md prose-lg text-gray-800 max-w-none">
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
                    <div className="my-8 p-2">
                      <Image
                        {...props}
                        width={1200}
                        height={600}
                        className="rounded-lg shadow-lg"
                        alt={props.alt || "post post image"}
                      />
                    </div>
                  );
                },
              }}
            >
              {post.content}
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

export default PostContent;
