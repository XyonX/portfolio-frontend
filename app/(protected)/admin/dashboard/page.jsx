import Link from "next/link";

async function getPortfolios() {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

  const res = await fetch(`${API_BASE_URL}/api/portfolios`);

  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  return res.json();
}

// Fetch the number of projects
async function getProjectsCount() {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

  const res = await fetch(`${API_BASE_URL}/api/portfolios`);

  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  const projects = await res.json();
  return projects.length;
}

// Fetch the number of blogs
async function getBlogsCount() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store", // Ensure fresh data
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const blogs = await res.json();
  return blogs.length;
}

// Dashboard component
export default async function Dashboard() {
  const projectsCount = await getProjectsCount();
  const blogsCount = await getBlogsCount();

  return (
    <div>
      {/* Header */}
      <h2 className="text-3xl font-bold text-primary-text mb-4">Dashboard</h2>
      <p className="text-secondary-text mb-8">
        Welcome to the admin panel. Here you can manage your portfolio content.
      </p>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-secondary-bg p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-primary-text">Projects</h3>
          <p className="text-3xl font-bold text-accent-text">{projectsCount}</p>
        </div>
        <div className="bg-secondary-bg p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-primary-text">Blogs</h3>
          <p className="text-3xl font-bold text-accent-text">{blogsCount}</p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/admin/projects"
          className="block p-6 bg-primary-bg rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-primary-text">
            Manage Projects
          </h3>
          <p className="text-secondary-text">Add, edit, or delete projects.</p>
        </Link>
        <Link
          href="/admin/blogs"
          className="block p-6 bg-primary-bg rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-primary-text">
            Manage Blogs
          </h3>
          <p className="text-secondary-text">
            Add, edit, or delete blog posts.
          </p>
        </Link>
      </div>
    </div>
  );
}
