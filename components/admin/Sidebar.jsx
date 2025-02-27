// components/Sidebar.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "dashboard", path: "/admin/dashboard" },
    { name: "Projects", icon: "open-folder", path: "/admin/portfolios" },
    { name: "Blogs", icon: "open-folder", path: "/admin/blogs" },
    { name: "Skills", icon: "lightbulb", path: "/admin/skills" },
    { name: "Messages", icon: "email", path: "/admin/messages" },
    { name: "Analytics", icon: "chart-bar", path: "/admin/analytics" },
    { name: "Settings", icon: "admin-settings", path: "/admin/settings" },
  ];

  return (
    <>
      {/* Sidebar Menu */}
      <aside
        className={`fixed top-16 left-0 h-full bg-primary-bg/80 backdrop-blur-sm border-r border-accent-border/30 z-40 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-0 -translate-x-full"
        } lg:w-64 lg:translate-x-0`}
      >
        <div className="h-full overflow-y-auto">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setActiveMenu(item.name.toLowerCase())}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  activeMenu === item.name.toLowerCase()
                    ? "bg-accent-text/10 text-accent-text"
                    : "text-secondary-text hover:bg-primary-bg/50"
                }`}
              >
                <Image
                  src={`https://unpkg.com/@icon/dashicons/icons/${item.icon}.svg`}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-accent-border/30">
            <div className="text-center text-sm text-secondary-text">
              <p>Version 1.0.0</p>
              <p className="mt-1">© 2024 Your Portfolio</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
