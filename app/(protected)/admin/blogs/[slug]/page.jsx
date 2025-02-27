"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EditBlogForm from "./EditBlogForm"; // Import the form component

export default function EditBlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`/api/blogs/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setBlog(data);
      } else {
        console.error("Failed to fetch blog data");
      }
    }

    if (slug) fetchBlog();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Edit Blog</h1>
      <EditBlogForm blog={blog} />
    </div>
  );
}
