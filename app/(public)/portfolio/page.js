import Image from "next/image";
import { LucideExternalLink, LucideGithub } from "lucide-react";

// Sample projects data
const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution built with Next.js and Tailwind CSS. Features include product listings, cart functionality, and checkout process.",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    imageUrl:
      "/placeholder.svg?height=400&width=600&text=E-commerce%20Platform",
    featured: true,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "dashboard-ui",
    title: "Dashboard UI",
    description:
      "An analytics dashboard with responsive design and dark mode support. Includes various chart components and data visualization tools.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageUrl: "/placeholder.svg?height=400&width=600&text=Dashboard%20UI",
    featured: true,
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A minimalist blog platform with MDX support, dark mode, and responsive design. Optimized for performance and SEO.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    imageUrl: "/placeholder.svg?height=400&width=600&text=Blog%20Platform",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "A productivity tool for managing tasks and projects. Features include drag-and-drop interface, task categorization, and progress tracking.",
    tags: ["React", "TypeScript", "Tailwind CSS", "DnD Kit"],
    imageUrl: "/placeholder.svg?height=400&width=600&text=Task%20Management",
    githubUrl: "https://github.com",
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description:
      "A weather forecast application with location detection, hourly and daily forecasts, and weather alerts.",
    tags: ["JavaScript", "React", "API Integration"],
    imageUrl: "/placeholder.svg?height=400&width=600&text=Weather%20App",
    demoUrl: "https://example.com",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description:
      "A minimal, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode support and blog functionality.",
    tags: ["Next.js", "Tailwind CSS", "MDX"],
    imageUrl: "/placeholder.svg?height=400&width=600&text=Portfolio%20Site",
    githubUrl: "https://github.com",
  },
];

async function getPortfolios() {
  const API_BASE_URL = "https://joycodes-backend.vercel.app";

  const res = await fetch(`${API_BASE_URL}/api/portfolios`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch portfolios");
  }
  return res.json();
}

export const metadata = {
  title: "Portfolio",
  description: "View my projects and work samples.",
};

export default async function PortfolioPage() {
  const API_BASE_URL = "https://joycodes-backend.vercel.app";
  let projects = [];
  let error = null;

  try {
    const res = await getPortfolios();
    projects = res.data;
  } catch (err) {
    error = err.message;
    console.error("Error fetching portfolios:", err);
  }

  if (error) {
    return (
      <div className="space-y-16">
        <section>
          <h1 className="font-mono text-3xl font-bold mb-6">My Work</h1>
          <div className="text-center py-12">
            <p className="text-neutral-600 dark:text-neutral-400">
              Unable to load projects at the moment. Please try again later.
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Separate featured projects (you can add a featured field to your API)
  // const featuredProjects =
  //   projects.filter((project) => project.featured) || projects.slice(0, 2);
  const featuredProjects = projects;
  const regularProjects =
    projects.filter((project) => !project.featured) || projects.slice(2);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="font-mono text-3xl font-bold mb-6">My Work</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mb-12">
          Here's a selection of projects I've worked on. Each project represents
          different skills and technologies I've used throughout my career. I'm
          passionate about creating clean, efficient, and user-friendly
          interfaces.
        </p>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="font-mono text-2xl font-semibold mb-8">
            Featured Projects
          </h2>
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project._id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden group">
                    <Image
                      src={
                        `https://joycodes-backend.vercel.app${project.featuredImage}` ||
                        "/placeholder.svg"
                      }
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div
                  className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                >
                  <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium text-sm hover:opacity-90 transition-opacity"
                      >
                        <LucideExternalLink size={14} className="mr-2" />
                        View Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium text-sm hover:opacity-90 transition-opacity"
                      >
                        <LucideGithub size={14} className="mr-2" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {regularProjects.length > 0 && (
        <section>
          <h2 className="font-mono text-2xl font-semibold mb-8">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <div
                key={project._id}
                className="group border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                  <Image
                    src={
                      `https://joycodes-backend.vercel.app${project.featuredImage}` ||
                      "/placeholder.svg"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies
                      ?.slice(0, 3)
                      .map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    {project.technologies?.length > 3 && (
                      <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        View Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-8 md:p-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-mono text-2xl font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
