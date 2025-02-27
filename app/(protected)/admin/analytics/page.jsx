"use client";

import React from "react";
import Link from "next/link";

export default function Analytics() {
  // Sample analytics data
  const stats = [
    {
      label: "Total Views",
      value: "1,234",
      change: "+15%",
      changeType: "positive",
    },
    {
      label: "Unique Visitors",
      value: "892",
      change: "-5%",
      changeType: "negative",
    },
    {
      label: "Blog Engagement",
      value: "67%",
      change: "+8%",
      changeType: "positive",
    },
    {
      label: "Portfolio Clicks",
      value: "345",
      change: "+12%",
      changeType: "positive",
    },
  ];

  const recentTrends = [
    {
      id: 1,
      type: "views",
      value: "Portfolio Page Views",
      change: "+25",
      time: "Last 7 days",
    },
    {
      id: 2,
      type: "engagement",
      value: "Blog Post Shares",
      change: "+10",
      time: "Last 7 days",
    },
    {
      id: 3,
      type: "clicks",
      value: "Project Link Clicks",
      change: "-8",
      time: "Last 7 days",
    },
  ];

  const trafficSources = [
    { source: "Direct", value: 45 },
    { source: "Search Engines", value: 30 },
    { source: "Social Media", value: 20 },
    { source: "Referrals", value: 5 },
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Analytics</h1>
          <p className="text-secondary-text mt-2">
            Insights into your portfolio and blog performance
          </p>
        </div>

        {/* Key Stats */}
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
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Overview */}
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              Traffic Overview (Last 30 Days)
            </h2>
            <div className="space-y-4">
              <div className="h-64 bg-primary-bg/30 rounded-lg flex items-center justify-center">
                {/* Placeholder for chart */}
                <p className="text-secondary-text">
                  [Line Chart Placeholder: Views Over Time]
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-secondary-text text-sm">Peak Day</p>
                  <p className="text-primary-text font-medium">Feb 20, 2025</p>
                  <p className="text-secondary-text text-sm">245 views</p>
                </div>
                <div>
                  <p className="text-secondary-text text-sm">Average Views</p>
                  <p className="text-primary-text font-medium">41/day</p>
                  <p className="text-secondary-text text-sm">
                    +3% from last month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              Traffic Sources
            </h2>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-primary-text">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent-text"
                        style={{ width: `${source.value}%` }}
                      ></div>
                    </div>
                    <span className="text-secondary-text">{source.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Trends */}
        <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            Recent Trends
          </h2>
          <div className="space-y-4">
            {recentTrends.map((trend) => (
              <div
                key={trend.id}
                className="flex items-center justify-between p-4 bg-primary-bg/30 rounded-lg hover:bg-primary-bg/50 transition-colors"
              >
                <div>
                  <p className="text-primary-text font-medium">{trend.value}</p>
                  <p className="text-secondary-text text-sm">{trend.time}</p>
                </div>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    trend.change.startsWith("+")
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {trend.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/analytics/export"
              className="bg-primary-bg/30 p-4 rounded-lg hover:bg-primary-bg/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent-text/10 rounded-lg">
                  <span className="text-accent-text text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-primary-text font-semibold">
                    Export Data
                  </h3>
                  <p className="text-secondary-text text-sm">
                    Download analytics report
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/admin/analytics/settings"
              className="bg-primary-bg/30 p-4 rounded-lg hover:bg-primary-bg/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <span className="text-blue-500 text-xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-primary-text font-semibold">
                    Analytics Settings
                  </h3>
                  <p className="text-secondary-text text-sm">
                    Customize metrics
                  </p>
                </div>
              </div>
            </Link>
            <button className="bg-primary-bg/30 p-4 rounded-lg hover:bg-primary-bg/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <span className="text-green-500 text-xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-primary-text font-semibold">
                    Refresh Data
                  </h3>
                  <p className="text-secondary-text text-sm">
                    Update analytics
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
    </div>
  );
}
