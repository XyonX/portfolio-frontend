"use client";
import React, { useState } from "react";
import Link from "next/link";
import Post from "./Post/Post";

const BlogGrid = ({ blogs }) => {
  const [layout, setLayout] = useState("medium"); // Default to medium grid
  const [selectedCategory, setSelectedCategory] = useState("all");

  console.log(blogs);
  //Extract all caterogy
  const allCategories = blogs.flatMap((blog) => blog.categories || []);
  const categories = ["all", ...new Set(allCategories)];

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  console.log(filteredBlogs);

  // Define grid classes for each layout
  const getGridClasses = () => {
    switch (layout) {
      case "small":
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4";
      case "medium":
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
      case "large":
        return "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8";
      default:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
    }
  };

  return (
    <div>
      {/* Filter and Layout Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <h1 className="text-3xl font-bold text-primary-text sm:text-4xl mb-4 md:mb-0 ">
          BLOGS
        </h1>
        <div>
          <div className="flex flex-wrap justify-end mb-4 space-x-4">
            {/* Category Filter Dropdown */}
            <div className="flex items-center space-x-2">
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-md bg-secondary-btn text-secondary-text hover:bg-secondary-btn-hover transition-colors duration-200"
                aria-label="Select category to filter blogs"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Layout Switcher Buttons */}
            <div className="space-x-2">
              <button
                onClick={() => setLayout("small")}
                className={`px-4 py-2 rounded-md font-medium text-sm ${
                  layout === "small"
                    ? "bg-primary-btn text-light-text"
                    : "bg-secondary-btn text-secondary-text hover:bg-secondary-btn-hover"
                }`}
                aria-label="Switch to small grid layout"
              >
                Small
              </button>
              <button
                onClick={() => setLayout("medium")}
                className={`px-4 py-2 rounded-md font-medium text-sm ${
                  layout === "medium"
                    ? "bg-primary-btn text-light-text"
                    : "bg-secondary-btn text-secondary-text hover:bg-secondary-btn-hover"
                }`}
                aria-label="Switch to medium grid layout"
              >
                Medium
              </button>
              <button
                onClick={() => setLayout("large")}
                className={`px-4 py-2 rounded-md font-medium text-sm ${
                  layout === "large"
                    ? "bg-primary-btn text-light-text"
                    : "bg-secondary-btn text-secondary-text hover:bg-secondary-btn-hover"
                }`}
                aria-label="Switch to large grid layout"
              >
                Large
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className={getGridClasses()}>
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.id}>
            <Post post={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
