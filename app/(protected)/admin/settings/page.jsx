"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Settings() {
  // Sample settings state
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    bio: "Portfolio administrator and developer",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    browser: false,
    messages: true,
  });

  const [appearance, setAppearance] = useState({
    theme: "dark",
    fontSize: "medium",
  });

  // Handle form submission (for demo purposes)
  const handleProfileSave = (e) => {
    e.preventDefault();
    alert("Profile settings saved!");
  };

  const handleNotificationsSave = (e) => {
    e.preventDefault();
    alert("Notification settings saved!");
  };

  const handleAppearanceSave = (e) => {
    e.preventDefault();
    alert("Appearance settings saved!");
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-text">Settings</h1>
          <p className="text-secondary-text mt-2">
            Customize your admin panel experience
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Profile Settings */}
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              Profile Settings
            </h2>
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div>
                <label className="text-secondary-text text-sm">Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="w-full mt-1 p-3 bg-primary-bg/30 rounded-lg text-primary-text border border-accent-border/30 focus:outline-none focus:border-accent-text"
                />
              </div>
              <div>
                <label className="text-secondary-text text-sm">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="w-full mt-1 p-3 bg-primary-bg/30 rounded-lg text-primary-text border border-accent-border/30 focus:outline-none focus:border-accent-text"
                />
              </div>
              <div>
                <label className="text-secondary-text text-sm">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  className="w-full mt-1 p-3 bg-primary-bg/30 rounded-lg text-primary-text border border-accent-border/30 focus:outline-none focus:border-accent-text h-24 resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-accent-text text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Save Profile
              </button>
            </form>
          </div>

          {/* Notification Settings */}
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              Notification Settings
            </h2>
            <form onSubmit={handleNotificationsSave} className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary-text">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        email: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-accent-text"></div>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:left-6"></span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-text">Browser Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.browser}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        browser: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-accent-text"></div>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:left-6"></span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-text">New Message Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.messages}
                    onChange={(e) =>
                      setNotifications({
                        ...notifications,
                        messages: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-accent-text"></div>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:left-6"></span>
                </label>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-accent-text text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Save Notification Settings
              </button>
            </form>
          </div>

          {/* Appearance Settings */}
          <div className="bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-text mb-4">
              Appearance Settings
            </h2>
            <form onSubmit={handleAppearanceSave} className="space-y-4">
              <div>
                <label className="text-secondary-text text-sm">Theme</label>
                <select
                  value={appearance.theme}
                  onChange={(e) =>
                    setAppearance({ ...appearance, theme: e.target.value })
                  }
                  className="w-full mt-1 p-3 bg-primary-bg/30 rounded-lg text-primary-text border border-accent-border/30 focus:outline-none focus:border-accent-text"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="system">System Default</option>
                </select>
              </div>
              <div>
                <label className="text-secondary-text text-sm">Font Size</label>
                <select
                  value={appearance.fontSize}
                  onChange={(e) =>
                    setAppearance({ ...appearance, fontSize: e.target.value })
                  }
                  className="w-full mt-1 p-3 bg-primary-bg/30 rounded-lg text-primary-text border border-accent-border/30 focus:outline-none focus:border-accent-text"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-accent-text text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Save Appearance
              </button>
            </form>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-primary-bg/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-primary-text mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/settings/reset"
              className="bg-primary-bg/30 p-4 rounded-lg hover:bg-primary-bg/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <span className="text-red-500 text-xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-primary-text font-semibold">
                    Reset Settings
                  </h3>
                  <p className="text-secondary-text text-sm">
                    Restore default preferences
                  </p>
                </div>
              </div>
            </Link>
            <button className="bg-primary-bg/30 p-4 rounded-lg hover:bg-primary-bg/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <span className="text-blue-500 text-xl">💾</span>
                </div>
                <div>
                  <h3 className="text-primary-text font-semibold">
                    Export Settings
                  </h3>
                  <p className="text-secondary-text text-sm">
                    Save current configuration
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
