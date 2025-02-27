"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditBlogForm({ blog }) {
  // State for form fields, initialized with blog data
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [date, setDate] = useState(blog.date);
  const router = useRouter();

  // Sync state with prop changes
  useEffect(() => {
    setTitle(blog.title);
    setContent(blog.content);
    setDate(blog.date);
  }, [blog]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/blogs/${blog.slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, date }),
    });
    if (res.ok) {
      router.push("/admin/blogs"); // Redirect to blogs list on success
    } else {
      console.error("Failed to update blog"); // Basic error handling
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title Field */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-secondary-text"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
        />
      </div>

      {/* Content Field */}
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-secondary-text"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
        />
      </div>

      {/* Date Field */}
      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-secondary-text"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center">
        <button
          type="submit"
          className="px-4 py-2 bg-primary-btn text-light-text rounded-md hover:bg-primary-btn-hover transition-colors duration-200"
        >
          Save Changes
        </button>
        <Link
          href="/admin/blogs"
          className="ml-4 px-4 py-2 text-sm font-medium text-secondary-text hover:text-accent-text"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
