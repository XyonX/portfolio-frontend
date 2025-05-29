import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-300/20 to-transparent rounded-full blur-3xl" />

      <div className="relative flex flex-col items-center text-center py-12 md:py-20">
        <div className="inline-flex items-center mb-6">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Available for projects
          </span>
        </div>

        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 animate-pulse blur-xl opacity-30" />
          <Image
            src="https://avatars.githubusercontent.com/u/33289572?v=4"
            alt="Joydip Chakraborty"
            width={128}
            height={128}
            className="object-cover rounded-full relative z-10 border-4 border-white dark:border-neutral-900"
            priority
          />
        </div>

        <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Joydip Chakraborty
        </h1>
        <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl">
          Game & Web Developer crafting immersive experiences with Unreal Engine
          and modern web technologies
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
          >
            Explore My Work
            <LucideArrowRight size={16} className="ml-2" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
