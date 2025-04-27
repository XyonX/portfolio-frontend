"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
const PostContent = ({ post }) => {
  // State for managing modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

  // Function to open modal with clicked image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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

      <section className=" py-6 md:py-16">
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
                        className="rounded-lg shadow-lg cursor-pointer"
                        alt={props.alt || "post post image"}
                        onClick={() => openModal(props.src)}
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
      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div
          className="cursor-pointer fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[90vw] p-4 overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <Image
              src={selectedImage}
              width={1920}
              height={1080}
              className="rounded-lg shadow-2xl "
              alt="Enlarged image"
              style={{ objectFit: "contain", maxHeight: "90vh", width: "100%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostContent;
