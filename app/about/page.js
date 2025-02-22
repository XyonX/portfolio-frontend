"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="mb-8 inline-block rounded-full p-1 bg-gradient-to-r from-black to-gray-800 animate-gradient-x">
              <div className="relative h-32 w-32 rounded-full border-4 border-white overflow-hidden mx-auto">
                <Image
                  src="https://avatars.githubusercontent.com/u/33289572?v=4"
                  alt="Joy's profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm Joy—a full-stack and game developer with a passion for
              building interactive digital experiences. Whether I'm crafting
              responsive web apps or designing immersive game worlds, I blend
              creativity with technology to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-10 pattern-dots pattern-gray-400 pattern-size-4" />
      </section>

      {/* My Journey Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            My Journey
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              My adventure in tech started with a curiosity for how things work.
              I began coding as a hobby and quickly realized the potential to
              create interactive experiences. This spark led me into the world
              of web development and, eventually, game design.
            </p>
            <p>
              Over the years, I've dived deep into modern frameworks like React,
              Next.js, Node.js, and Tailwind CSS, crafting applications that are
              as efficient as they are elegant. Simultaneously, my passion for
              storytelling guided me into game development—experimenting with
              engines such as Unity and exploring creative mechanics that
              captivate players.
            </p>
            <p>
              Every project I undertake is a fusion of art and technology, where
              innovation meets meticulous design.
            </p>
          </div>
        </div>
      </section>

      {/* What I Believe In Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            What I Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                I strive to push the boundaries of what's possible, constantly
                exploring new technologies and creative ideas to elevate every
                project.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600">
                I believe that great ideas flourish when diverse minds come
                together. Sharing knowledge and working collectively fuels
                progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills & Tools Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Technical Skills & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Unreal Engine",
              "JavaScript",
              "React",
              "Node.js",
              "Next.js",
              "Tailwind CSS",
              "C#",
              "Blender",
            ].map((tech, index) => (
              <div
                key={index}
                className=" bg-black shadow-sm rounded-lg p-4 text-center"
              >
                <span className="text-lg font-medium text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Interests Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not immersed in code or designing game worlds, I love
            exploring nature, capturing moments through photography, and diving
            into a good book. I believe that a balanced life is key to nurturing
            creativity and innovation.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're looking to collaborate on a web project or bring a
            game idea to life, I'd love to chat.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
