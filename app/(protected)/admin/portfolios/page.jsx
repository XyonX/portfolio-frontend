"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  // Sample project data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack online store built with Next.js and Stripe.",
      status: "Published",
      lastUpdated: "2h ago",
    },
    {
      id: 2,
      title: "Personal Blog",
      description: "A minimal blog site with Markdown support.",
      status: "Draft",
      lastUpdated: "1d ago",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A dynamic portfolio showcasing my work.",
      status: "Published",
      lastUpdated: "3d ago",
    },
  ]);

  // State for handling modals or forms (optional for future expansion)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Projects</h1>
          <Link
            href="/admin/projects/new"
            className="bg-accent-text text-white px-4 py-2 rounded-lg hover:bg-accent-text/80 transition-colors flex items-center space-x-2"
          >
            <span>+</span>
            <span>Add New Project</span>
          </Link>
        </div>

        {/* Projects Table */}
        <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            All Projects
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-secondary-text border-b border-accent-border/30">
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Description</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Last Updated</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-primary-bg/30 transition-colors"
                  >
                    <td className="py-3 text-primary-text">{project.title}</td>
                    <td className="py-3 text-secondary-text truncate max-w-[300px]">
                      {project.description}
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          project.status === "Published"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 text-secondary-text">
                      {project.lastUpdated}
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

        {/* Optional: Add Project Card (for symmetry with dashboard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-primary-bg/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent-text/10 rounded-lg">
                <span className="text-accent-text text-2xl">+</span>
              </div>
              <div>
                <h3 className="text-primary-text font-semibold">
                  Create a New Project
                </h3>
                <p className="text-secondary-text text-sm">
                  Add a new entry to your portfolio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements (consistent with dashboard) */}
        <div className="fixed top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="fixed bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
      </main>
    </div>
  );
}
