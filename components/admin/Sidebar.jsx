import React from "react";
import Link from "next/link";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-secondary-bg shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary-text">Admin Panel</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link
              href="/admin/dashboard"
              className="block p-4 text-secondary-text hover:bg-accent-bg hover:text-accent-text transition-colors duration-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/portfolios"
              className="block p-4 text-secondary-text hover:bg-accent-bg hover:text-accent-text transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/admin/blogs"
              className="block p-4 text-secondary-text hover:bg-accent-bg hover:text-accent-text transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
