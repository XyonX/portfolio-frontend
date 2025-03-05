"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("draft");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [mdFile, setMdFile] = useState(null);
  const today = new Date().toISOString().split("T")[0];
  const [publicationDate, setPublicationDate] = useState(today);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Handle Markdown file upload and read its content
  const handleMdFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".md")) {
      setMdFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setContent(event.target.result); // Set content from .md file
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid .md file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !slug || !featuredImage) {
      alert(
        "Please fill in all required fields: title, content, and slug, featured image"
      );
      return;
    }
    setIsSubmitting(true);

    // Use FormData to handle text fields and files
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("slug", slug);
    formData.append("publicationDate", publicationDate);
    formData.append("categories", categories); // Backend can split this
    formData.append("tags", tags); // Backend can split this
    formData.append("status", status);
    if (featuredImage) {
      formData.append("featuredImage", featuredImage);
    }
    if (mdFile) {
      formData.append("mdFile", mdFile); // Optional, if backend needs the file
    }

    try {
      let API_BASE_URL =
        process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

      const res = await fetch(`${API_BASE_URL}/api/blogs`, {
        method: "POST",
        body: formData, // No headers needed for FormData; browser sets multipart/form-data
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
            htmlFor="slug"
            className="block text-sm font-medium text-secondary-text"
          >
            Slug
          </label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Enter a unique slug (e.g., my-blog-post)"
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
            htmlFor="mdFile"
            className="block text-sm font-medium text-secondary-text"
          >
            Upload Content from .md File (Optional)
          </label>
          <input
            type="file"
            id="mdFile"
            accept=".md"
            onChange={handleMdFileChange}
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label
            htmlFor="publicationDate"
            className="block text-sm font-medium text-secondary-text"
          >
            Publication Date
          </label>
          <input
            type="date"
            id="publicationDate"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
          />
        </div>

        <div>
          <label
            htmlFor="categories"
            className="block text-sm font-medium text-secondary-text"
          >
            Categories (comma-separated)
          </label>
          <input
            type="text"
            id="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            placeholder="e.g., Tech, Design"
            className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
          />
        </div>

        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-secondary-text"
          >
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., JavaScript, React"
            className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
          />
        </div>

        <div>
          <label
            htmlFor="featuredImage"
            className="block text-sm font-medium text-secondary-text"
          >
            Featured Image (Optional)
          </label>
          <input
            type="file"
            id="featuredImage"
            accept="image/*"
            onChange={(e) => setFeaturedImage(e.target.files[0])}
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-secondary-text"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
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
