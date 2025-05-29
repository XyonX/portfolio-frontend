import Image from "next/image";
import {
  LucideCode,
  LucideGamepad2,
  LucideDatabase,
  LucideGlobe,
} from "lucide-react";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Joydip Chakraborty's background, skills, and interests.",
};

const skills = [
  { name: "Unreal Engine", category: "Game Development", level: 90 },
  { name: "Blender", category: "Game Development", level: 85 },
  { name: "C++", category: "Programming", level: 80 },
  { name: "Three.js", category: "Game Development", level: 10 },
  { name: "React", category: "Web Development", level: 60 },
  { name: "Next.js", category: "Web Development", level: 80 },
  { name: "Tailwind CSS", category: "Web Development", level: 70 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express.js", category: "Backend", level: 75 },
  { name: "MongoDB", category: "Database", level: 75 },
  { name: "JavaScript", category: "Programming", level: 70 },
  { name: "Python", category: "Programming", level: 70 },
  { name: "Java", category: "Programming", level: 30 },
  { name: "Git", category: "Tools", level: 85 },
  { name: "Linux", category: "Tools", level: 70 },
  { name: "Docker", category: "Tools", level: 30 },
  { name: "AWS", category: "Tools", level: 30 },
];

export default function AboutPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="space-y-16">
      <section className="relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="sticky top-10">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                <Image
                  src="https://avatars.githubusercontent.com/u/33289572?v=4"
                  alt="Joydip Chakraborty"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Available for projects</span>
                </div>

                <div className="flex space-x-3">
                  <a
                    href="https://github.com/joydipchakraborty08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/joydipchakraborty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <div>
              <h1 className="font-mono text-3xl font-bold mb-6">About Me</h1>
              <div className="prose prose-neutral dark:prose-invert">
                <p>
                  Hi, I'm Joydip Chakraborty, a passionate game developer and
                  web developer with expertise in Unreal Engine and the MERN
                  stack. I specialize in creating immersive gaming experiences
                  and modern web applications that combine creativity with
                  cutting-edge technology.
                </p>
                <p>
                  My journey in software development spans across multiple
                  domains - from crafting detailed 3D environments and game
                  mechanics in Unreal Engine to building scalable web
                  applications using React, Node.js, and MongoDB. I'm proficient
                  in C++, JavaScript, Python, and Java, allowing me to tackle
                  complex challenges across different platforms.
                </p>
                <p>
                  In game development, I work extensively with Unreal Engine,
                  Blender for 3D modeling, and Three.js for web-based 3D
                  experiences. On the web development side, I leverage modern
                  frameworks like React and Next.js, combined with Tailwind CSS
                  for responsive design and Express.js for robust backend
                  solutions.
                </p>
                <p>
                  When I'm not coding or designing game levels, you can find me
                  exploring new technologies, contributing to open-source
                  projects, or experimenting with the latest game development
                  techniques. I'm always excited to collaborate on innovative
                  projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-mono text-2xl font-semibold mb-6">
                What I Do
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                    <LucideGamepad2
                      className="text-emerald-600 dark:text-emerald-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Game Development</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Creating immersive 3D games and interactive experiences
                    using Unreal Engine, with custom assets and mechanics.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <LucideCode
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Web Development</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Building modern, responsive web applications using the MERN
                    stack with focus on user experience.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <LucideDatabase
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    3D Modeling & Animation
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Creating detailed 3D models, environments, and animations
                    using Blender and industry-standard tools.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                    <LucideGlobe
                      className="text-amber-600 dark:text-amber-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    Full-Stack Development
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    End-to-end application development from database design to
                    frontend implementation and deployment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-mono text-2xl font-semibold mb-6">Skills</h2>
              <div className="space-y-8">
                {Object.entries(skillsByCategory).map(
                  ([category, categorySkills]) => (
                    <div key={category}>
                      <h3 className="text-lg font-medium mb-4">{category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {categorySkills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">
                                {skill.name}
                              </span>
                              <span className="text-xs text-neutral-500">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h2 className="font-mono text-2xl font-semibold mb-6">
                Experience
              </h2>
              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l border-neutral-200 dark:border-neutral-800">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-emerald-500"></div>
                  <div>
                    <h3 className="text-lg font-medium">
                      Game & Web Developer
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                      Freelance • 2020 - Present
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Developing immersive games using Unreal Engine and
                      creating modern web applications with the MERN stack.
                      Specialized in 3D modeling, game mechanics, and responsive
                      web design.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l border-neutral-200 dark:border-neutral-800">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-purple-500"></div>
                  <div>
                    <h3 className="text-lg font-medium">Software Developer</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                      Various Projects • 2018 - 2020
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Worked on multiple software development projects, gaining
                      experience in C++, Python, and JavaScript. Contributed to
                      both desktop applications and web-based solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
                Education
              </h2>
              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l border-neutral-300 dark:border-neutral-700">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rotate-45 bg-blue-500"></div>
                  <div>
                    <h3 className="text-lg font-medium">
                      Computer Science & Engineering
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                      Heritage Institute of Technology • 2022 - 2026
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Focused on software engineering, game development, and web
                      technologies. Specialized in computer graphics,
                      algorithms, and modern programming paradigms.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l border-neutral-300 dark:border-neutral-700">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rotate-45 bg-emerald-500"></div>
                  <div>
                    <h3 className="text-lg font-medium">
                      Diploma in Electrical Engineering
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                      Gaighata government polytechnic • 2019 - 2021
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Gained in-depth knowledge of circuit theory, DC machines,
                      and electronics, along with practical experience in
                      electrical systems and components.
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
