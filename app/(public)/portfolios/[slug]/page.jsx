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
import PostContent from "../../../../components/PostContent";

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
  return <PostContent post={portfolio} />;
};

export default PortfolioPostPage;
