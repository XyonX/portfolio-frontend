"use client";

import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  // Sample data
  const stats = [
    {
      label: "Total Projects",
      value: "12",
      change: "+2",
      changeType: "positive",
    },
    { label: "Messages", value: "5", change: "+3", changeType: "negative" },
    { label: "Skills Listed", value: "24", change: "0", changeType: "neutral" },
    {
      label: "Active Visitors",
      value: "43",
      change: "-12",
      changeType: "negative",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "project",
      action: "Added 'E-commerce Platform'",
      time: "2h ago",
    },
    {
      id: 2,
      type: "skill",
      action: "Updated 'Next.js' description",
      time: "4h ago",
    },
    { id: 3, type: "message", action: "Replied to John Doe", time: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-secondary-text text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary-text mt-2">
                    {stat.value}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    stat.changeType === "positive"
                      ? "bg-green-100 text-green-800"
                      : stat.changeType === "negative"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            href="/admin/portfolios/new"
            className="bg-primary-bg/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent-text/10 rounded-lg">
                <span className="text-accent-text text-2xl">+</span>
              </div>
              <div>
                <h3 className="text-primary-text font-semibold">
                  Add New Project
                </h3>
                <p className="text-secondary-text text-sm">
                  Create a new portfolio entry
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/skills"
            className="bg-primary-bg/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <span className="text-green-500 text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-primary-text font-semibold">
                  Manage Skills
                </h3>
                <p className="text-secondary-text text-sm">
                  Update technical expertise
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/messages"
            className="bg-primary-bg/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <span className="text-blue-500 text-2xl">✉️</span>
              </div>
              <div>
                <h3 className="text-primary-text font-semibold">
                  View Messages
                </h3>
                <p className="text-secondary-text text-sm">
                  Check recent inquiries
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-primary-bg/30 rounded-lg hover:bg-primary-bg/50 transition-colors"
                >
                  <div>
                    <p className="text-primary-text font-medium">
                      {activity.action}
                    </p>
                    <p className="text-secondary-text text-sm">
                      {activity.time}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-sm rounded-full bg-accent-text/10 text-accent-text">
                    {activity.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              System Status
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary-bg/30 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-text">Database</span>
                  <span className="text-green-500">● Connected</span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-accent-text"></div>
                </div>
              </div>

              <div className="p-4 bg-primary-bg/30 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-text">Storage</span>
                  <span className="text-secondary-text">64% used</span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Messages Preview */}
        <div className="mt-8 bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            Recent Messages
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-secondary-text border-b border-accent-border/30">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Message</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((item) => (
                  <tr
                    key={item}
                    className="hover:bg-primary-bg/30 transition-colors"
                  >
                    <td className="py-3 text-primary-text">John Doe</td>
                    <td className="py-3 text-secondary-text">
                      john@example.com
                    </td>
                    <td className="py-3 text-secondary-text truncate max-w-[200px]">
                      Interested in collaboration opportunities...
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-1 text-sm rounded-full bg-yellow-500/10 text-yellow-500">
                        Pending
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
    </div>
  );
}
