"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !date) {
      alert("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, date }),
      });
      if (res.ok) {
        router.push("/admin/blogs");
      } else {
        alert("Failed to create blog");
      }
    } catch (error) {
      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary-text mb-6">
        Add New Blog Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            placeholder="Enter the blog title"
            className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
          />
        </div>
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
            placeholder="Write your blog content here..."
            className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
          />
        </div>
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
        <div className="flex items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 bg-primary-btn text-light-text rounded-md hover:bg-primary-btn-hover transition-colors duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
          <Link
            href="/admin/blogs"
            className="ml-4 px-4 py-2 text-sm font-medium text-secondary-text hover:text-accent-text"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
