"use client";

import React, { useState } from "react";
import Link from "next/link";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

// async function getBlogs() {
//   const API_BASE_URL =
//     process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

//   const res = await fetch(`${API_BASE_URL}/api/blogs`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch Data");
//   }
//   return res.json();
// }

// // BlogPage component
// export default async function BlogPage() {
//   const json = await getBlogs();
//   const blogs = json.data;

//   return (
//     <div>
//       {/* Header with title and Add New Blog button */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-primary-text">Blogs</h2>
//         <Link
//           href="/admin/blogs/new"
//           className="px-4 py-2 bg-primary-btn text-light-text rounded-md hover:bg-primary-btn-hover transition-colors duration-200"
//         >
//           Add New Blog
//         </Link>
//       </div>

//       {/* Blogs table */}
//       <table className="w-full table-auto">
//         <thead>
//           <tr className="bg-secondary-bg">
//             <th className="px-4 py-2 text-left text-secondary-text">Title</th>
//             <th className="px-4 py-2 text-left text-secondary-text">Date</th>
//             <th className="px-4 py-2 text-left text-secondary-text">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.length === 0 ? (
//             <tr>
//               <td
//                 colSpan="3"
//                 className="px-4 py-2 text-center text-secondary-text"
//               >
//                 No blogs found
//               </td>
//             </tr>
//           ) : (
//             blogs.map((blog) => (
//               <tr
//                 key={blog.id}
//                 className="border-b border-accent-border hover:bg-accent-bg"
//               >
//                 <td className="px-4 py-2 text-primary-text">{blog.title}</td>
//                 <td className="px-4 py-2 text-secondary-text">
//                   {new Date(blog.date).toLocaleDateString()}
//                 </td>
//                 <td className="px-4 py-2">
//                   <div className="flex space-x-2">
//                     <Link href={`/admin/blogs/${blog.slug}`}>
//                       <PencilIcon className="w-5 h-5 text-accent-text hover:text-primary-btn-hover" />
//                     </Link>
//                     <button>
//                       <TrashIcon className="w-5 h-5 text-red-500 hover:text-red-700" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

export default function BlogsPage() {
  // Sample blog data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "A beginner’s guide to building apps with Next.js.",
      status: "Published",
      lastUpdated: "1d ago",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Tailwind CSS Tips",
      excerpt: "Top tricks to streamline your styling workflow.",
      status: "Draft",
      lastUpdated: "3d ago",
      category: "Design",
    },
    {
      id: 3,
      title: "Deploying to Vercel",
      excerpt: "Step-by-step deployment guide for your projects.",
      status: "Published",
      lastUpdated: "5d ago",
      category: "DevOps",
    },
  ]);

  // State for handling modals or forms (optional for future expansion)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Blogs</h1>
          <Link
            href="/admin/blogs/new"
            className="bg-accent-text text-white px-4 py-2 rounded-lg hover:bg-accent-text/80 transition-colors flex items-center space-x-2"
          >
            <span>+</span>
            <span>Add New Blog</span>
          </Link>
        </div>

        {/* Blogs Table */}
        <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            All Blog Posts
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-secondary-text border-b border-accent-border/30">
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Excerpt</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Last Updated</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="hover:bg-primary-bg/30 transition-colors"
                  >
                    <td className="py-3 text-primary-text">{blog.title}</td>
                    <td className="py-3 text-secondary-text truncate max-w-[250px]">
                      {blog.excerpt}
                    </td>
                    <td className="py-3 text-secondary-text">
                      {blog.category}
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          blog.status === "Published"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="py-3 text-secondary-text">
                      {blog.lastUpdated}
                    </td>
                    <td className="py-3 flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-400">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-400">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Optional: Add Blog Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-primary-bg/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent-text/10 rounded-lg">
                <span className="text-accent-text text-2xl">+</span>
              </div>
              <div>
                <h3 className="text-primary-text font-semibold">
                  Write a New Blog
                </h3>
                <p className="text-secondary-text text-sm">
                  Share your thoughts and expertise
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="fixed bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
      </main>
    </div>
  );
}
