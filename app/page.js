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
    <div className="bg-white">
      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center md:text-left">
            <div className="max-w-3xl mx-auto md:mx-0 md:max-w-2xl lg:max-w-4xl">
              <div className="mb-8 inline-block rounded-full p-1 bg-gradient-to-r from-black to-gray-800 animate-gradient-x">
                <div className="relative h-24 w-24 rounded-full border-4 border-white overflow-hidden">
                  <Image
                    src="https://avatars.githubusercontent.com/u/33289572?v=4"
                    alt="Jace's profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Hi, I'm Joy
                <span className="block mt-3 text-2xl sm:text-3xl text-gray-600 font-medium">
                  Full-Stack Developer
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Building beautiful, performant web experiences with modern
                technologies.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
                >
                  About Me
                </Link>
                <Link
                  href="/portfolios"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  View Projects
                </Link>
              </div>

              {/* Social Links (optional) */}
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                {/* Add your social media icons/links here */}
              </div>
            </div>
          </div>
        </div>

        {/* Optional decorative elements */}
        <div className="absolute inset-0 -z-10 opacity-10 pattern-dots pattern-gray-400 pattern-size-4" />
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg overflow-hidden"
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
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4">
                    <Link
                      href={project.link}
                      className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-200"
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
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Unreal Engine",
              "JavaScript",
              "React",
              "Node.js",
              "Next.js",
              "Tailwind CSS",
              "Express",
              "Git",
            ].map((skill, index) => (
              <div
                key={index}
                className=" bg-black shadow-sm rounded-lg p-4 text-center"
              >
                <span className="text-lg font-medium text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Let's Work Together!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind? Reach out to me via email or connect on
            social media.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
