"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      description:
        "A responsive e-commerce platform built with Next.js and Tailwind CSS.",
      imageUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      fallbackUrl: "/images/project1.jpg",
      link: "/projects/project-1",
    },
    {
      title: "Project 2",
      description:
        "A full-stack blog application using Node.js, Express, and MongoDB.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      fallbackUrl: "/images/project2.jpg",
      link: "/projects/project-2",
    },
    {
      title: "Project 3",
      description:
        "A real-time chat application powered by WebSocket and React.",
      imageUrl:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      fallbackUrl: "/images/project3.jpg",
      link: "/projects/project-3",
    },
  ];

  return (
    <div className="bg-primary-bg">
      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content (Unchanged) */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center mb-6">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-status-dark"></span>
                </span>
                <span className="text-sm font-medium text-secondary-text">
                  Available for projects
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Crafting Digital
                <span className="block text-accent-text">Excellence</span>
              </h1>

              <p className="text-lg sm:text-xl text-secondary-text mb-8 max-w-md mx-auto lg:mx-0">
                Hi, I'm Joy - a Full-Stack Developer passionate about creating
                innovative web solutions that drive impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/portfolios"
                  className="px-8 py-3 bg-primary-btn text-light-text font-semibold rounded-lg hover:bg-primary-btn-hover transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-transparent text-accent-text font-semibold rounded-lg border-2 border-accent-border hover:bg-secondary-btn-hover transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Updated Right Visual - Aligned to Right */}
            <div className="relative hidden lg:block">
              <div className="relative w-full flex justify-end">
                <div className="relative w-80 h-80">
                  {/* Reduced size to fit better */}
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-decor-light rounded-full opacity-20 animate-pulse-slow"></div>
                  {/* Tech Icons (Extending Beyond Boundaries) */}
                  <div className="absolute -inset-12 animate-spin-slow">
                    <div className="absolute w-16 h-16 top-0 left-1/2 -translate-x-1/2 -translate-y-12 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Image
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
                        alt="React"
                        width={32}
                        height={32}
                        className="text-tech-accent"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute -inset-12 animate-spin-slow"
                    style={{ animationDirection: "reverse" }}
                  >
                    <div className="absolute w-16 h-16 bottom-0 left-1/2 -translate-x-1/2 translate-y-12 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Image
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg"
                        alt="Next.js"
                        width={32}
                        height={32}
                        className="text-tech-dark"
                      />
                    </div>
                  </div>
                  {/* Additional Tech Icon Example */}
                  <div
                    className="absolute -inset-12 animate-spin-slow"
                    style={{ animationDelay: "-5s" }}
                  >
                    <div className="absolute w-16 h-16 right-0 top-1/2 translate-x-12 -translate-y-1/2 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Image
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg"
                        alt="Tailwind CSS"
                        width={32}
                        height={32}
                        className="text-tech-blue"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute -inset-12 animate-spin-slow"
                    style={{ animationDelay: "-5s" }}
                  >
                    <div className="absolute w-16 h-16 right-0 top-1/2 translate-x-12 -translate-y-1/2 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Image
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/unrealengine.svg"
                        alt="Tailwind CSS"
                        width={32}
                        height={32}
                        className="text-tech-dark"
                      />
                    </div>
                  </div>
                  {/* Center Profile Image - Aligned Right */}
                  <div className="absolute inset-4 bg-white rounded-full shadow-xl overflow-hidden border-4 border-light-border">
                    <Image
                      src="https://avatars.githubusercontent.com/u/33289572?v=4"
                      alt="Joy's profile"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating Text - Adjusted Position */}
              <div className="absolute bottom-0 right-0 translate-y-12 text-center">
                <span className="inline-block px-4 py-2 bg-primary-btn text-light-text text-sm font-medium rounded-full shadow-md">
                  Core Technologies
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
      </section>
      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-text text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-primary-bg shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    onError={(e) => (e.target.src = project.fallbackUrl)}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-secondary-text">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={project.link}
                      className="text-sm font-medium text-accent-text hover:text-primary-btn-hover transition-colors duration-200"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* Option 1: Diagonal Gradient Mesh
      <section className="relative py-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gradient-start/30 via-gradient-mid/20 to-gradient-end/30 overflow-hidden"> */}
      <section className="relative py-16 bg-primary-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-text text-center mb-12 animate-fade-in">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {/* Game Development Column */}
            <div className="animate-fade-in-up">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/unrealengine.svg"
                    alt="Unreal Engine"
                    width={32}
                    height={32}
                    className="text-accent-text"
                    onError={(e) => (e.target.src = "/fallback-icon.svg")}
                  />
                </div>
                <h3 className="text-xl font-semibold text-accent-text mb-4">
                  Game Development
                </h3>
                <div className="space-y-3">
                  {[
                    "unrealengine",
                    "blender",
                    "cplusplus",
                    "threedotjs",
                    "opengl",
                    "unity",
                  ].map((icon, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-2 group"
                    >
                      <span className="w-5 h-5 flex-shrink-0 text-tech-accent">
                        <Image
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
                          alt={icon}
                          width={20}
                          height={20}
                          onError={(e) => (e.target.src = "/fallback-icon.svg")}
                        />
                      </span>
                      <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
                        {icon
                          .replace(/([a-z])([A-Z])/g, "$1 $2")
                          .replace("plusplus", "++")
                          .replace("threedotjs", "Three.js")
                          .replace("unrealengine", "Unreal Engine")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Web Development Column */}
            <div className="animate-fade-in-up delay-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/nextdotjs.svg"
                    alt="Next.js"
                    width={32}
                    height={32}
                    className="text-tech-dark"
                    onError={(e) => (e.target.src = "/fallback-icon.svg")}
                  />
                </div>
                <h3 className="text-xl font-semibold text-accent-text mb-4">
                  Web Development
                </h3>
                <div className="space-y-3">
                  {[
                    "react",
                    "nextdotjs",
                    "tailwindcss",
                    "express",
                    "typescript",
                    "node.js",
                  ].map((icon, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-2 group"
                    >
                      <span className="w-5 h-5 flex-shrink-0 text-tech-dark">
                        <Image
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
                          alt={icon}
                          width={20}
                          height={20}
                          onError={(e) => (e.target.src = "/fallback-icon.svg")}
                        />
                      </span>
                      <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
                        {icon
                          .replace(/([a-z])([A-Z])/g, "$1 $2")
                          .replace("dotjs", ".js")
                          .replace("css", " CSS")
                          .replace("express", "Express.js")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Skills Column */}
            <div className="animate-fade-in-up delay-200">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/git.svg"
                    alt="Git"
                    width={32}
                    height={32}
                    className="text-tech-blue"
                    onError={(e) => (e.target.src = "/fallback-icon.svg")}
                  />
                </div>
                <h3 className="text-xl font-semibold text-accent-text mb-4">
                  Other Skills
                </h3>
                <div className="space-y-3">
                  {[
                    "git",
                    "linux",
                    "docker",
                    "jenkins",
                    "amazonaws",
                    "nginx",
                  ].map((icon, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-2 group"
                    >
                      <span className="w-5 h-5 flex-shrink-0 text-tech-blue">
                        <Image
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
                          alt={icon}
                          width={20}
                          height={20}
                          onError={(e) => (e.target.src = "/fallback-icon.svg")}
                        />
                      </span>
                      <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
                        {icon
                          .replace(/([a-z])([A-Z])/g, "$1 $2")
                          .replace("amazonaws", "AWS")
                          .replace("nginx", "NGINX")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-decor-light rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 -translate-y-1/3 w-48 h-48 bg-decor-blue rounded-full opacity-30 blur-2xl" />
        </div>
      </section>

      {/* Articles
      <section className="py-16 bg-primary-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-text text-center mb-12">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mastering Next.js: Tips for Scalable Apps",
                excerpt:
                  "Learn how to structure your Next.js projects for performance and scalability.",
                date: "Feb 10, 2025",
                link: "/blog/nextjs-tips",
              },
              {
                title: "GraphQL vs REST: A Developer’s Perspective",
                excerpt:
                  "Breaking down the pros and cons of GraphQL and REST APIs in real-world scenarios.",
                date: "Jan 25, 2025",
                link: "/blog/graphql-vs-rest",
              },
              {
                title: "Building Responsive UI with Tailwind CSS",
                excerpt:
                  "A guide to creating beautiful, responsive designs with Tailwind CSS.",
                date: "Jan 15, 2025",
                link: "/blog/tailwind-responsive",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-secondary-bg rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
              >
                <h3 className="text-xl font-semibold text-primary-text mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-secondary-text mb-4">
                  {article.date}
                </p>
                <p className="text-secondary-text mb-4">{article.excerpt}</p>
                <Link
                  href={article.link}
                  className="text-sm font-medium text-accent-text hover:text-primary-btn-hover transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 text-base font-medium text-light-text bg-dark-btn rounded-md hover:bg-dark-btn-hover transition-colors duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Let's Work Together!
          </h2>
          <p className="mt-4 text-lg text-secondary-text">
            Have a project in mind? Reach out to me via email or connect on
            social media.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-base font-medium text-light-text bg-dark-btn rounded-md hover:bg-dark-btn-hover transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
