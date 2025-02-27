"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditBlogForm({ blog }) {
  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [date, setDate] = useState(blog?.date || "");
  const router = useRouter();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setDate(blog.date);
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/blogs/${blog.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, date }),
    });

    if (res.ok) {
      router.push("/admin/blogs");
    } else {
      console.error("Failed to update blog");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save Changes
        </button>
        <Link href="/admin/blogs" className="px-4 py-2 text-gray-600">
          Cancel
        </Link>
      </div>
    </form>
  );
}
