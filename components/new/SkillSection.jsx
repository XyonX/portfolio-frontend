// import React from "react";

// export function SkillSection() {
//   return (
//     <section className="relative py-16 bg-primary-bg overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         Technical Expertise
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
//           {/* Game Development */}

//           <div className="flex flex-col items-center text-center">
//             <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//               <Image
//                 src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/unrealengine.svg"
//                 alt="Unreal Engine"
//                 width={32}
//                 height={32}
//                 className="text-accent-text"
//                 onError={(e) => (e.target.src = "/fallback-icon.svg")}
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-accent-text mb-4">
//               Game Development
//             </h3>
//             <div className="space-y-3">
//               {["unrealengine", "blender", "cplusplus", "threedotjs"].map(
//                 (icon, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-center space-x-2 group"
//                   >
//                     <span className="w-5 h-5 flex-shrink-0 text-tech-accent">
//                       <Image
//                         src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                         alt={icon}
//                         width={20}
//                         height={20}
//                         onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                       />
//                     </span>
//                     <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                       {icon
//                         .replace(/([a-z])([A-Z])/g, "$1 $2")
//                         .replace("plusplus", "++")
//                         .replace("threedotjs", "Three.js")
//                         .replace("unrealengine", "Unreal Engine")}
//                     </span>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Web Development */}

//           <div className="flex flex-col items-center text-center">
//             <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//               <Image
//                 src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/nextdotjs.svg"
//                 alt="Next.js"
//                 width={32}
//                 height={32}
//                 className="text-tech-dark"
//                 onError={(e) => (e.target.src = "/fallback-icon.svg")}
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-accent-text mb-4">
//               Web Development
//             </h3>
//             <div className="space-y-3">
//               {["react", "nextdotjs", "tailwindcss", "express", "node.js"].map(
//                 (icon, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-center space-x-2 group"
//                   >
//                     <span className="w-5 h-5 flex-shrink-0 text-tech-dark">
//                       <Image
//                         src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                         alt={icon}
//                         width={20}
//                         height={20}
//                         onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                       />
//                     </span>
//                     <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                       {icon
//                         .replace(/([a-z])([A-Z])/g, "$1 $2")
//                         .replace("dotjs", ".js")
//                         .replace("css", " CSS")
//                         .replace("express", "Express.js")}
//                     </span>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Programming Languages */}

//           <div className="flex flex-col items-center text-center">
//             <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//               <Image
//                 src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/cplusplus.svg"
//                 alt="C++"
//                 width={32}
//                 height={32}
//                 className="text-accent-text"
//                 onError={(e) => (e.target.src = "/fallback-icon.svg")}
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-accent-text mb-4">
//               Programming Languages
//             </h3>
//             <div className="space-y-3">
//               {["cplusplus", "python", "javascript", "java"].map((icon, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-center space-x-2 group"
//                 >
//                   <span className="w-5 h-5 flex-shrink-0">
//                     <Image
//                       src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                       alt={icon}
//                       width={20}
//                       height={20}
//                       onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                     />
//                   </span>
//                   <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                     {icon === "cplusplus"
//                       ? "C++"
//                       : icon === "javascript"
//                       ? "JS"
//                       : icon.charAt(0).toUpperCase() + icon.slice(1)}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Other Skills */}

//           <div className="flex flex-col items-center text-center">
//             <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//               <Image
//                 src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/git.svg"
//                 alt="Git"
//                 width={32}
//                 height={32}
//                 className="text-tech-blue"
//                 onError={(e) => (e.target.src = "/fallback-icon.svg")}
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-accent-text mb-4">
//               Other Skills
//             </h3>
//             <div className="space-y-3">
//               {["git", "linux", "docker", "amazonaws"].map((icon, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-center space-x-2 group"
//                 >
//                   <span className="w-5 h-5 flex-shrink-0 text-tech-blue">
//                     <Image
//                       src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                       alt={icon}
//                       width={20}
//                       height={20}
//                       onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                     />
//                   </span>
//                   <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                     {icon
//                       .replace(/([a-z])([A-Z])/g, "$1 $2")
//                       .replace("amazonaws", "AWS")}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-decor-light rounded-full opacity-20 blur-3xl" />
//         <div className="absolute top-1/3 right-1/4 -translate-y-1/3 w-48 h-48 bg-decor-blue rounded-full opacity-30 blur-2xl" />
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export function SkillsSection() {
  return (
    <section className="relative py-16 bg-primary-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
          {/* Game Development */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
              <span className="inline-block dark:invert">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/unrealengine.svg"
                  alt="Unreal Engine"
                  width={32}
                  height={32}
                  onError={(e) => (e.target.src = "/fallback-icon.svg")}
                />
              </span>
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
                    <span className="w-5 h-5 flex-shrink-0 inline-block dark:invert">
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
                )
              )}
            </div>
          </div>

          {/* Web Development */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
              <span className="inline-block dark:invert">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/nextdotjs.svg"
                  alt="Next.js"
                  width={32}
                  height={32}
                  onError={(e) => (e.target.src = "/fallback-icon.svg")}
                />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-accent-text mb-4">
              Web Development
            </h3>
            <div className="space-y-3">
              {["react", "nextdotjs", "tailwindcss", "express", "node.js"].map(
                (icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center space-x-2 group"
                  >
                    <span className="w-5 h-5 flex-shrink-0 inline-block dark:invert">
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
                )
              )}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
              <span className="inline-block dark:invert">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/cplusplus.svg"
                  alt="C++"
                  width={32}
                  height={32}
                  onError={(e) => (e.target.src = "/fallback-icon.svg")}
                />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-accent-text mb-4">
              Programming Languages
            </h3>
            <div className="space-y-3">
              {["cplusplus", "python", "javascript", "java"].map((icon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-2 group"
                >
                  <span className="w-5 h-5 flex-shrink-0 inline-block dark:invert">
                    <Image
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
                      alt={icon}
                      width={20}
                      height={20}
                      onError={(e) => (e.target.src = "/fallback-icon.svg")}
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
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
              <span className="inline-block dark:invert">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/git.svg"
                  alt="Git"
                  width={32}
                  height={32}
                  onError={(e) => (e.target.src = "/fallback-icon.svg")}
                />
              </span>
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
                  <span className="w-5 h-5 flex-shrink-0 inline-block dark:invert">
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
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-decor-light rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/3 w-48 h-48 bg-decor-blue rounded-full opacity-30 blur-2xl" />
      </div>
    </section>
  );
}
