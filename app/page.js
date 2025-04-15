"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useAppContext } from "./AppProvider";

export default function Home() {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

  const shouldReduceMotion = useReducedMotion();

  const { portfolios, featuredPortfolios } = useAppContext();

  return (
    <div className="bg-primary-bg">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                className="inline-flex items-center mb-6"
              >
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-status-dark"></span>
                </span>
                <span className="text-sm font-medium text-secondary-text">
                  Available for projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: 0.2,
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              >
                <span className="block mb-4">Joydip Chakraborty</span>
                <span className="sr-only">Game and Web Developer</span>
                <span aria-hidden="true" className="block text-accent-text">
                  <span className="block">Game & Web</span>
                  <span className="block">Developer</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: 0.4,
                }}
                className="text-lg sm:text-xl text-secondary-text mb-8 max-w-md mx-auto lg:mx-0 px-3 sm:px-0"
              >
                Hi, I'm Joydip Chakraborty, a passionate game developer and web
                developer skilled in Unreal Engine and the MERN stack.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: 0.6,
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
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
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                className="relative w-full flex justify-end"
              >
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-decor-light rounded-full opacity-20 animate-pulse-slow"></div>
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
                        alt="Unreal Engine"
                        width={32}
                        height={32}
                        className="text-tech-dark"
                      />
                    </div>
                  </div>
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
              </motion.div>
              <div className="absolute bottom-0 right-0 translate-y-12 text-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: 0.8,
                  }}
                  className="inline-block px-4 py-2 bg-primary-btn text-light-text text-sm font-medium rounded-full shadow-md"
                >
                  Core Technologies
                </motion.span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="text-3xl font-bold text-primary-text text-center mb-8"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPortfolios.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: index * 0.1,
                }}
                className="bg-primary-bg shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={`${API_BASE_URL}${post.featuredImage}`}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    // onError={(e) => (e.target.src = project.fallbackUrl)}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-text">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-secondary-text">{post.description}</p>
                  <div className="mt-4">
                    <Link
                      href={`/portfolios/${post.slug}`}
                      className="text-sm font-medium text-accent-text hover:text-primary-btn-hover transition-colors duration-200"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-16 bg-primary-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="text-3xl font-bold text-primary-text text-center mb-12"
          >
            Technical Expertise
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {/* Game Development */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: 0.1,
              }}
            >
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
                  {["unrealengine", "blender", "cplusplus", "threedotjs"].map(
                    (icon, i) => (
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
                            onError={(e) =>
                              (e.target.src = "/fallback-icon.svg")
                            }
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
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: 0.2,
              }}
            >
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
            </motion.div>

            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: 0.3,
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/cplusplus.svg"
                    alt="C++"
                    width={32}
                    height={32}
                    className="text-accent-text"
                    onError={(e) => (e.target.src = "/fallback-icon.svg")}
                  />
                </div>
                <h3 className="text-xl font-semibold text-accent-text mb-4">
                  Programming Languages
                </h3>
                <div className="space-y-3">
                  {["cplusplus", "python", "javascript", "java"].map(
                    (icon, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center space-x-2 group"
                      >
                        <span className="w-5 h-5 flex-shrink-0">
                          <Image
                            src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
                            alt={icon}
                            width={20}
                            height={20}
                            onError={(e) =>
                              (e.target.src = "/fallback-icon.svg")
                            }
                          />
                        </span>
                        <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
                          {icon === "cplusplus"
                            ? "C++"
                            : icon === "javascript"
                            ? "JS"
                            : icon.charAt(0).toUpperCase() + icon.slice(1)}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Other Skills */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: 0.4,
              }}
            >
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
                  {["git", "linux", "docker", "amazonaws"].map((icon, i) => (
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
                          .replace("amazonaws", "AWS")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-decor-light rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 -translate-y-1/3 w-48 h-48 bg-decor-blue rounded-full opacity-30 blur-2xl" />
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        className="py-16"
      >
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
      </motion.section>
    </div>
  );
}
