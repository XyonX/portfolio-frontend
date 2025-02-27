import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

async function getBlogs() {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

  const res = await fetch(`${API_BASE_URL}/api/blogs`);
  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  return res.json();
}

// BlogPage component
export default async function BlogPage() {
  const json = await getBlogs();
  const blogs = json.data;

  return (
    <div>
      {/* Header with title and Add New Blog button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary-text">Blogs</h2>
        <Link
          href="/admin/blogs/new"
          className="px-4 py-2 bg-primary-btn text-light-text rounded-md hover:bg-primary-btn-hover transition-colors duration-200"
        >
          Add New Blog
        </Link>
      </div>

      {/* Blogs table */}
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-secondary-bg">
            <th className="px-4 py-2 text-left text-secondary-text">Title</th>
            <th className="px-4 py-2 text-left text-secondary-text">Date</th>
            <th className="px-4 py-2 text-left text-secondary-text">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length === 0 ? (
            <tr>
              <td
                colSpan="3"
                className="px-4 py-2 text-center text-secondary-text"
              >
                No blogs found
              </td>
            </tr>
          ) : (
            blogs.map((blog) => (
              <tr
                key={blog.id}
                className="border-b border-accent-border hover:bg-accent-bg"
              >
                <td className="px-4 py-2 text-primary-text">{blog.title}</td>
                <td className="px-4 py-2 text-secondary-text">
                  {new Date(blog.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <Link href={`/admin/blogs/${blog.slug}`}>
                      <PencilIcon className="w-5 h-5 text-accent-text hover:text-primary-btn-hover" />
                    </Link>
                    <button>
                      <TrashIcon className="w-5 h-5 text-red-500 hover:text-red-700" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
