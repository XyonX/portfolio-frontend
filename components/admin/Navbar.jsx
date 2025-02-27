"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, text: "New message from John Doe", read: false },
    { id: 2, text: "Project 'E-commerce' updated", read: true },
    { id: 3, text: "System backup completed", read: true },
  ];

  return (
    <nav class="fixed top-0 left-0 right-0 h-16 bg-primary-bg text-primary-text border-b border-accent-border/30 z-50">
      {" "}
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo and Sidebar Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-400 hover:text-white lg:hidden"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <Link href="/admin/dashboard" className="flex items-center space-x-2">
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/nextdotjs.svg"
              alt="Admin Logo"
              width={32}
              height={32}
              className="text-white"
            />
            <span className="text-xl font-bold text-primary-text hidden md:inline">
              Admin Panel
            </span>
          </Link>
        </div>

        {/* Right Section: Notifications and Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative text-gray-400 hover:text-white p-2"
              aria-label="Notifications"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {notifications.some((n) => !n.read) && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-700/30">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Notifications
                  </h3>
                  <div className="space-y-2">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 rounded-lg ${
                          !notification.read
                            ? "bg-blue-500/10"
                            : "bg-transparent"
                        }`}
                      >
                        <p className="text-sm text-white">
                          {notification.text}
                        </p>
                        <span className="text-xs text-gray-400">
                          2 hours ago
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-400 hover:text-white"
              aria-label="User Profile"
            >
              <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-600 overflow-hidden">
                <Image
                  src="https://avatars.githubusercontent.com/u/33289572?v=4"
                  alt="Admin Avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="hidden md:inline text-white">Admin</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-700/30">
                <div className="py-1">
                  <Link
                    href="/admin/profile"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700/50"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/admin/settings"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700/50"
                  >
                    Settings
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
