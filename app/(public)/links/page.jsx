import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LucideGithub,
  LucideLinkedin,
  LucideTwitter,
  LucideMail,
  LucidePhone,
  LucideGlobe,
  LucideCode,
  LucideExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Links | Joydip Chakraborty",
  description:
    "Connect with Joydip Chakraborty on various platforms and resources.",
};

// Define your links with icons, titles, descriptions, and URLs
const links = [
  {
    title: "GitHub",
    description: "Check out my code repositories and projects",
    url: "https://github.com/XyonX",
    icon: LucideGithub,
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    url: "https://www.linkedin.com/in/joydip-chakraborty",
    icon: LucideLinkedin,
  },
  {
    title: "Twitter",
    description: "Follow me for updates and discussions",
    url: "https://x.com/__CraftedPixels",
    icon: LucideTwitter,
  },
  {
    title: "LeetCode",
    description: "Check out my coding solutions and progress",
    url: "https://leetcode.com/u/XyonX/",
    icon: LucideCode,
  },
  {
    title: "HackerRank",
    description: "View my programming challenges and skills",
    url: "https://www.hackerrank.com/profile/xyonx",
    icon: LucideCode,
  },
  {
    title: "Email",
    description: "joydip.chakraborty.cs@gmail.com",
    url: "mailto:joydip.chakraborty.cs@gmail.com",
    icon: LucideMail,
  },
  {
    title: "Phone",
    description: "9775970153",
    url: "tel:+919775970153",
    icon: LucidePhone,
  },
  {
    title: "Portfolio",
    description: "Browse my featured projects and work",
    url: "/portfolio",
    icon: LucideGlobe,
    isInternal: true,
  },
  {
    title: "Blog",
    description: "Read my latest articles and tutorials",
    url: "/blog",
    icon: LucideExternalLink,
    isInternal: true,
  },
];

export default function LinksPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-300/20 to-transparent rounded-full blur-3xl" />

        <div className="relative flex flex-col items-center text-center py-10">
          <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 animate-pulse blur-xl opacity-30" />
            <Image
              src="https://avatars.githubusercontent.com/u/33289572?v=4"
              alt="Joydip Chakraborty"
              width={96}
              height={96}
              className="object-cover rounded-full relative z-10 border-4 border-white dark:border-neutral-900"
              priority
            />
          </div>

          <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Connect With Me
          </h1>
          <p className="text-base text-neutral-700 dark:text-neutral-300 mb-6 max-w-lg">
            Find me across the web and social platforms
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section>
        <div className="max-w-md mx-auto space-y-3">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 max-w-md mx-auto text-center">
        <h2 className="text-lg font-semibold mb-3">
          Looking for collaboration?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-5">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-300 text-sm"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

function LinkCard({ link }) {
  const LinkComponent = link.isInternal ? Link : "a";
  const linkProps = link.isInternal
    ? { href: link.url }
    : { href: link.url, target: "_blank", rel: "noopener noreferrer" };

  return (
    <LinkComponent
      {...linkProps}
      className="block w-full transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="flex items-center p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-300">
        <div className="p-2 mr-3">
          <link.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-base">{link.title}</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {link.description}
          </p>
        </div>
        <div className="text-neutral-400">
          <LucideExternalLink className="w-4 h-4" />
        </div>
      </div>
    </LinkComponent>
  );
}
