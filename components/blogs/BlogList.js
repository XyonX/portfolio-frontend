import React from "react";
import Post from "../Post/Post";
import Link from "next/link";
import BlogGrid from "../BlogGrid";
async function getBlogs() {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

  const res = await fetch(`${API_BASE_URL}/api/blogs`);
  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  return res.json();
}
console.log(getBlogs());

const BlogList = async () => {
  const json = await getBlogs();
  const blogs = json.data;
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-5 bg-primary-bg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-text sm:text-4xl">
          BLOGS
        </h1>
      </div>
      <BlogGrid blogs={blogs} />
    </div>
  );
};

export default BlogList;
