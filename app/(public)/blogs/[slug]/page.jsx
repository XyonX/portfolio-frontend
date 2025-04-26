import React from "react";
import { notFound } from "next/navigation";

import PostContent from "../../../../components/PostContent";

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

  return <PostContent post={blog} />;
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
