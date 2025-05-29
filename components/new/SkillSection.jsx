export function SkillsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-mono text-2xl font-semibold">
          Technical Expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Game Development */}
        <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-4">Game Development</h3>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div>Unreal Engine</div>
            <div>Blender</div>
            <div>C++</div>
            <div>Three.js</div>
          </div>
        </div>

        {/* Web Development */}
        <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-purple-600 dark:text-purple-400"
              fill="currentColor"
            >
              <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44 8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56-1.83-.63-3.37-1.91-4.32-3.56M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-4">Web Development</h3>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div>React</div>
            <div>Next.js</div>
            <div>Tailwind CSS</div>
            <div>Express.js</div>
            <div>Node.js</div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-blue-600 dark:text-blue-400"
              fill="currentColor"
            >
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-4">Programming Languages</h3>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div>C++</div>
            <div>Python</div>
            <div>JavaScript</div>
            <div>Java</div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-amber-600 dark:text-amber-400"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-4">Other Skills</h3>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div>Git</div>
            <div>Linux</div>
            <div>Docker</div>
            <div>AWS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
