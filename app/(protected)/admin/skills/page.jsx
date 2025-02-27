"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SkillsPage() {
  // Sample skills data
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "Next.js",
      category: "Frontend",
      proficiency: "Advanced",
      description: "Building server-rendered React apps.",
      lastUpdated: "1d ago",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      category: "Design",
      proficiency: "Intermediate",
      description: "Utility-first CSS for rapid UI development.",
      lastUpdated: "2d ago",
    },
    {
      id: 3,
      name: "Node.js",
      category: "Backend",
      proficiency: "Advanced",
      description: "Server-side JavaScript runtime.",
      lastUpdated: "5d ago",
    },
  ]);

  // State for handling modals or forms (optional for future expansion)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Skills</h1>
          <Link
            href="/admin/skills/new"
            className="bg-accent-text text-white px-4 py-2 rounded-lg hover:bg-accent-text/80 transition-colors flex items-center space-x-2"
          >
            <span>+</span>
            <span>Add New Skill</span>
          </Link>
        </div>

        {/* Skills Table */}
        <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            All Skills
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-secondary-text border-b border-accent-border/30">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Proficiency</th>
                  <th className="pb-3">Description</th>
                  <th className="pb-3">Last Updated</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr
                    key={skill.id}
                    className="hover:bg-primary-bg/30 transition-colors"
                  >
                    <td className="py-3 text-primary-text">{skill.name}</td>
                    <td className="py-3 text-secondary-text">
                      {skill.category}
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          skill.proficiency === "Advanced"
                            ? "bg-green-500/10 text-green-500"
                            : skill.proficiency === "Intermediate"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-blue-500/10 text-blue-500"
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    </td>
                    <td className="py-3 text-secondary-text truncate max-w-[250px]">
                      {skill.description}
                    </td>
                    <td className="py-3 text-secondary-text">
                      {skill.lastUpdated}
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

        {/* Optional: Add Skill Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-primary-bg/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent-text/10 rounded-lg">
                <span className="text-accent-text text-2xl">+</span>
              </div>
              <div>
                <h3 className="text-primary-text font-semibold">
                  Add a New Skill
                </h3>
                <p className="text-secondary-text text-sm">
                  Expand your expertise list
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
