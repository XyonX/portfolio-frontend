// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useReducedMotion } from "framer-motion";
// import { useAppContext } from "./AppProvider";
// import FeaturedPosts from "../components/FeaturedPosts";

// export default function Home() {
//   const API_BASE_URL =
//     process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

//   const shouldReduceMotion = useReducedMotion();

//   const { portfolios, featuredPortfolios } = useAppContext();

//   return (
//     <div className="bg-primary-bg">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end overflow-hidden">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-center lg:text-left">
//               <motion.div
//                 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
//                 className="inline-flex items-center mb-6"
//               >
//                 <span className="relative flex h-3 w-3 mr-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-light opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-status-dark"></span>
//                 </span>
//                 <span className="text-sm font-medium text-secondary-text">
//                   Available for projects
//                 </span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: shouldReduceMotion ? 0 : 0.5,
//                   delay: 0.2,
//                 }}
//                 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
//               >
//                 <span className="block mb-4">Joydip Chakraborty</span>
//                 <span className="sr-only">Game and Web Developer</span>
//                 <span aria-hidden="true" className="block text-accent-text">
//                   <span className="block">Game & Web</span>
//                   <span className="block">Developer</span>
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: shouldReduceMotion ? 0 : 0.5,
//                   delay: 0.4,
//                 }}
//                 className="text-lg sm:text-xl text-secondary-text mb-8 max-w-md mx-auto lg:mx-0 px-3 sm:px-0"
//               >
//                 Hi, I'm Joydip Chakraborty, a passionate game developer and web
//                 developer skilled in Unreal Engine and the MERN stack.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: shouldReduceMotion ? 0 : 0.5,
//                   delay: 0.6,
//                 }}
//                 className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//               >
//                 <Link
//                   href="/portfolios"
//                   className="px-8 py-3 bg-primary-btn text-light-text font-semibold rounded-lg hover:bg-primary-btn-hover transition-all duration-300 shadow-md hover:shadow-lg"
//                 >
//                   Explore My Work
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="px-8 py-3 bg-transparent text-accent-text font-semibold rounded-lg border-2 border-accent-border hover:bg-secondary-btn-hover transition-all duration-300"
//                 >
//                   Get in Touch
//                 </Link>
//               </motion.div>
//             </div>

//             {/* Right Visual */}
//             <div className="relative hidden lg:block">
//               <motion.div
//                 initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
//                 className="relative w-full flex justify-end"
//               >
//                 <div className="relative w-80 h-80">
//                   <div className="absolute inset-0 bg-decor-light rounded-full opacity-20 animate-pulse-slow"></div>
//                   <div className="absolute -inset-12 animate-spin-slow">
//                     <div className="absolute w-16 h-16 top-0 left-1/2 -translate-x-1/2 -translate-y-12 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
//                       <Image
//                         src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
//                         alt="React"
//                         width={32}
//                         height={32}
//                         className="text-tech-accent"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     className="absolute -inset-12 animate-spin-slow"
//                     style={{ animationDirection: "reverse" }}
//                   >
//                     <div className="absolute w-16 h-16 bottom-0 left-1/2 -translate-x-1/2 translate-y-12 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
//                       <Image
//                         src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg"
//                         alt="Next.js"
//                         width={32}
//                         height={32}
//                         className="text-tech-dark"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     className="absolute -inset-12 animate-spin-slow"
//                     style={{ animationDelay: "-5s" }}
//                   >
//                     <div className="absolute w-16 h-16 right-0 top-1/2 translate-x-12 -translate-y-1/2 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
//                       <Image
//                         src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg"
//                         alt="Tailwind CSS"
//                         width={32}
//                         height={32}
//                         className="text-tech-blue"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     className="absolute -inset-12 animate-spin-slow"
//                     style={{ animationDelay: "-5s" }}
//                   >
//                     <div className="absolute w-16 h-16 right-0 top-1/2 translate-x-12 -translate-y-1/2 bg-primary-bg rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
//                       <Image
//                         src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/unrealengine.svg"
//                         alt="Unreal Engine"
//                         width={32}
//                         height={32}
//                         className="text-tech-dark"
//                       />
//                     </div>
//                   </div>
//                   <div className="absolute inset-4 bg-white rounded-full shadow-xl overflow-hidden border-4 border-light-border">
//                     <Image
//                       src="https://avatars.githubusercontent.com/u/33289572?v=4"
//                       alt="Joy's profile"
//                       fill
//                       className="object-cover"
//                       priority
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//               <div className="absolute bottom-0 right-0 translate-y-12 text-center">
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{
//                     duration: shouldReduceMotion ? 0 : 0.5,
//                     delay: 0.8,
//                   }}
//                   className="inline-block px-4 py-2 bg-primary-btn text-light-text text-sm font-medium rounded-full shadow-md"
//                 >
//                   Core Technologies
//                 </motion.span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-0 right-0 w-72 h-72 bg-decor-light rounded-full -z-10 opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-decor-blue rounded-full -z-10 opacity-50 transform -translate-x-1/4 translate-y-1/4 blur-2xl" />
//       </section>

//       {/* {featuredPortfolios && featuredPortfolios.length > 0 && (
//         <section className="py-16">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <motion.h2
//               initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
//               className="text-3xl font-bold text-primary-text text-center mb-8"
//             >
//               Featured Projects
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {featuredPortfolios.map((post, index) => (
//                 <Link href={`/portfolios/${post.slug}`} key={index}>
//                   <motion.div
//                     initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false }}
//                     transition={{
//                       duration: shouldReduceMotion ? 0 : 0.5,
//                       delay: index * 0.1,
//                     }}
//                     className="bg-primary-bg shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
//                   >
//                     <div className="relative w-full h-48">
//                       <Image
//                         src={`${API_BASE_URL}${post.featuredImage}`}
//                         alt={post.title}
//                         layout="fill"
//                         objectFit="cover"
//                       />
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-primary-text">
//                         {post.title}
//                       </h3>
//                       <p className="mt-2 text-secondary-text">
//                         {post.description}
//                       </p>
//                       <div className="mt-4">
//                         <Link
//                           href={`/portfolios/${post.slug}`}
//                           className="text-sm font-medium text-accent-text hover:text-primary-btn-hover transition-colors duration-200"
//                         >
//                           View Project →
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )} */}
//       <FeaturedPosts />

//       {/* Skills Section */}
//       <section className="relative py-16 bg-primary-bg overflow-hidden">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
//             className="text-3xl font-bold text-primary-text text-center mb-12"
//           >
//             Technical Expertise
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
//             {/* Game Development */}
//             <motion.div
//               initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               transition={{
//                 duration: shouldReduceMotion ? 0 : 0.5,
//                 delay: 0.1,
//               }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//                   <Image
//                     src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/unrealengine.svg"
//                     alt="Unreal Engine"
//                     width={32}
//                     height={32}
//                     className="text-accent-text"
//                     onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-accent-text mb-4">
//                   Game Development
//                 </h3>
//                 <div className="space-y-3">
//                   {["unrealengine", "blender", "cplusplus", "threedotjs"].map(
//                     (icon, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center justify-center space-x-2 group"
//                       >
//                         <span className="w-5 h-5 flex-shrink-0 text-tech-accent">
//                           <Image
//                             src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                             alt={icon}
//                             width={20}
//                             height={20}
//                             onError={(e) =>
//                               (e.target.src = "/fallback-icon.svg")
//                             }
//                           />
//                         </span>
//                         <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                           {icon
//                             .replace(/([a-z])([A-Z])/g, "$1 $2")
//                             .replace("plusplus", "++")
//                             .replace("threedotjs", "Three.js")
//                             .replace("unrealengine", "Unreal Engine")}
//                         </span>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Web Development */}
//             <motion.div
//               initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               transition={{
//                 duration: shouldReduceMotion ? 0 : 0.5,
//                 delay: 0.2,
//               }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//                   <Image
//                     src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/nextdotjs.svg"
//                     alt="Next.js"
//                     width={32}
//                     height={32}
//                     className="text-tech-dark"
//                     onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-accent-text mb-4">
//                   Web Development
//                 </h3>
//                 <div className="space-y-3">
//                   {[
//                     "react",
//                     "nextdotjs",
//                     "tailwindcss",
//                     "express",
//                     "node.js",
//                   ].map((icon, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center justify-center space-x-2 group"
//                     >
//                       <span className="w-5 h-5 flex-shrink-0 text-tech-dark">
//                         <Image
//                           src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                           alt={icon}
//                           width={20}
//                           height={20}
//                           onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                         />
//                       </span>
//                       <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                         {icon
//                           .replace(/([a-z])([A-Z])/g, "$1 $2")
//                           .replace("dotjs", ".js")
//                           .replace("css", " CSS")
//                           .replace("express", "Express.js")}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Programming Languages */}
//             <motion.div
//               initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               transition={{
//                 duration: shouldReduceMotion ? 0 : 0.5,
//                 delay: 0.3,
//               }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//                   <Image
//                     src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/cplusplus.svg"
//                     alt="C++"
//                     width={32}
//                     height={32}
//                     className="text-accent-text"
//                     onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-accent-text mb-4">
//                   Programming Languages
//                 </h3>
//                 <div className="space-y-3">
//                   {["cplusplus", "python", "javascript", "java"].map(
//                     (icon, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center justify-center space-x-2 group"
//                       >
//                         <span className="w-5 h-5 flex-shrink-0">
//                           <Image
//                             src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                             alt={icon}
//                             width={20}
//                             height={20}
//                             onError={(e) =>
//                               (e.target.src = "/fallback-icon.svg")
//                             }
//                           />
//                         </span>
//                         <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                           {icon === "cplusplus"
//                             ? "C++"
//                             : icon === "javascript"
//                             ? "JS"
//                             : icon.charAt(0).toUpperCase() + icon.slice(1)}
//                         </span>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Other Skills */}
//             <motion.div
//               initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: false }}
//               transition={{
//                 duration: shouldReduceMotion ? 0 : 0.5,
//                 delay: 0.4,
//               }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-4 w-16 h-16 rounded-full bg-primary-bg/20 backdrop-blur-sm flex items-center justify-center border border-accent-border/30 hover:bg-primary-bg/40 transition-all duration-300">
//                   <Image
//                     src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/git.svg"
//                     alt="Git"
//                     width={32}
//                     height={32}
//                     className="text-tech-blue"
//                     onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-accent-text mb-4">
//                   Other Skills
//                 </h3>
//                 <div className="space-y-3">
//                   {["git", "linux", "docker", "amazonaws"].map((icon, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center justify-center space-x-2 group"
//                     >
//                       <span className="w-5 h-5 flex-shrink-0 text-tech-blue">
//                         <Image
//                           src={`https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${icon}.svg`}
//                           alt={icon}
//                           width={20}
//                           height={20}
//                           onError={(e) => (e.target.src = "/fallback-icon.svg")}
//                         />
//                       </span>
//                       <span className="text-secondary-text group-hover:text-accent-text transition-colors duration-200">
//                         {icon
//                           .replace(/([a-z])([A-Z])/g, "$1 $2")
//                           .replace("amazonaws", "AWS")}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//           <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-decor-light rounded-full opacity-20 blur-3xl" />
//           <div className="absolute top-1/3 right-1/4 -translate-y-1/3 w-48 h-48 bg-decor-blue rounded-full opacity-30 blur-2xl" />
//         </div>
//       </section>

//       {/* Contact Section */}
//       <motion.section
//         initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false }}
//         transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
//         className="py-16"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900">
//             Let's Work Together!
//           </h2>
//           <p className="mt-4 text-lg text-secondary-text">
//             Have a project in mind? Reach out to me via email or connect on
//             social media.
//           </p>
//           <div className="mt-8">
//             <Link
//               href="/contact"
//               className="inline-block px-6 py-3 text-base font-medium text-light-text bg-dark-btn rounded-md hover:bg-dark-btn-hover transition-colors duration-200"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { LucideArrowRight } from "lucide-react";
// // import fs from "fs";
// // import path from "path";
// import { GallerySlider } from "../components/GallerySlider";
// import { useAppContext } from "./AppProvider";

// // Utility functions
// function parseFrontmatter(fileContent) {
//   const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
//   const match = frontmatterRegex.exec(fileContent);
//   if (!match) return { metadata: {}, content: fileContent };

//   const frontMatterBlock = match[1];
//   const content = fileContent.replace(frontmatterRegex, "").trim();
//   const frontMatterLines = frontMatterBlock.trim().split("\n");
//   const metadata = {};

//   frontMatterLines.forEach((line) => {
//     const [key, ...valueArr] = line.split(": ");
//     let value = valueArr.join(": ").trim();
//     value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
//     metadata[key.trim()] = value;
//   });

//   return { metadata, content };
// }

// // function getMDXFiles(dir) {
// //   try {
// //     return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
// //   } catch (error) {
// //     console.error("Error reading directory:", error);
// //     return [];
// //   }
// // }

// // function readMDXFile(filePath) {
// //   try {
// //     const rawContent = fs.readFileSync(filePath, "utf-8");
// //     return parseFrontmatter(rawContent);
// //   } catch (error) {
// //     console.error("Error reading file:", error);
// //     return { metadata: {}, content: "" };
// //   }
// // }

// // function getBlogPosts() {
// //   try {
// //     const postsDirectory = path.join(process.cwd(), "app", "blog", "posts");
// //     const mdxFiles = getMDXFiles(postsDirectory);

// //     return mdxFiles.map((file) => {
// //       const { metadata, content } = readMDXFile(
// //         path.join(postsDirectory, file)
// //       );
// //       const slug = path.basename(file, path.extname(file));

// //       return {
// //         metadata,
// //         slug,
// //         content,
// //       };
// //     });
// //   } catch (error) {
// //     console.error("Error getting blog posts:", error);
// //     return [];
// //   }
// // }

// function formatDate(date) {
//   if (!date || !date.includes) return "No date";

//   if (!date.includes("T")) {
//     date = `${date}T00:00:00`;
//   }
//   const targetDate = new Date(date);

//   return targetDate.toLocaleString("en-us", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// export default function Page() {
//   const API_BASE_URL =
//     process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

//   const { portfolios, featuredPortfolios } = useAppContext();
//   // // Get the latest 3 blog posts for featured section
//   // let featuredPosts = [];
//   // try {
//   //   featuredPosts = getBlogPosts()
//   //     .sort((a, b) => {
//   //       if (
//   //         new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
//   //       ) {
//   //         return -1;
//   //       }
//   //       return 1;
//   //     })
//   //     .slice(0, 3);
//   // } catch (error) {
//   //   console.error("Error sorting blog posts:", error);
//   // }

//   return (
//     <div className="space-y-24">
//       {/* Hero Section */}
//       <section className="relative">
//         <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-300/20 to-transparent rounded-full blur-3xl" />

//         <div className="relative flex flex-col items-center text-center py-12 md:py-20">
//           <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 animate-pulse blur-xl opacity-30" />
//             <Image
//               src="/placeholder.svg?height=128&width=128"
//               alt="John Doe"
//               width={128}
//               height={128}
//               className="object-cover rounded-full relative z-10 border-4 border-white dark:border-neutral-900"
//               priority
//             />
//           </div>

//           <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-4">
//             John Doe
//           </h1>
//           <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl">
//             Software developer & writer crafting minimal, accessible digital
//             experiences
//           </p>

//           <div className="flex flex-wrap justify-center gap-3">
//             <Link
//               href="/portfolio"
//               className="inline-flex items-center px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
//             >
//               View my work
//               <LucideArrowRight size={16} className="ml-2" />
//             </Link>
//             <Link
//               href="/about"
//               className="inline-flex items-center px-5 py-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium hover:opacity-90 transition-opacity"
//             >
//               About me
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts Section */}
//       {featuredPortfolios.length > 0 && (
//         <section>
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="font-mono text-2xl font-semibold">Latest Writing</h2>
//             <Link
//               href="/blog"
//               className="text-sm font-medium flex items-center hover:underline"
//             >
//               View all
//               <LucideArrowRight size={14} className="ml-1" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {featuredPortfolios.map((post) => (
//               <Link
//                 key={post.slug}
//                 href={`/blog/${post.slug}`}
//                 className="group"
//               >
//                 <article className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all hover:shadow-md">
//                   <div className="relative h-40 w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-purple-500/10" />
//                     <Image
//                       src={`/placeholder.svg?height=160&width=320&text=${encodeURIComponent(
//                         post.metadata.title || "Blog Post"
//                       )}`}
//                       alt={post.metadata.title || "Blog Post"}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="flex-1 p-5 flex flex-col">
//                     <time className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
//                       {formatDate(post.metadata.publishedAt)}
//                     </time>
//                     <h3 className="font-medium text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
//                       {post.metadata.title || "Untitled Post"}
//                     </h3>
//                     <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
//                       {post.metadata.summary || "No summary available"}
//                     </p>
//                     <span className="text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
//                       Read article
//                     </span>
//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Gallery Showcase */}
//       <section>
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="font-mono text-2xl font-semibold">Visual Creations</h2>
//           <Link
//             href="/gallery"
//             className="text-sm font-medium flex items-center hover:underline"
//           >
//             View all
//             <LucideArrowRight size={14} className="ml-1" />
//           </Link>
//         </div>

//         <GallerySlider
//           items={[
//             {
//               id: "unreal-forest",
//               title: "Forest Environment",
//               description:
//                 "A detailed forest environment created in Unreal Engine 5 with custom assets and lighting.",
//               category: "Level Design",
//               imageUrl:
//                 "/placeholder.svg?height=600&width=1200&text=Forest%20Environment",
//             },
//             {
//               id: "character-model",
//               title: "Character Model",
//               description:
//                 "3D character model created for a game project, with detailed texturing and rigging.",
//               category: "3D Modeling",
//               imageUrl:
//                 "/placeholder.svg?height=600&width=1200&text=Character%20Model",
//             },
//             {
//               id: "sci-fi-interior",
//               title: "Sci-Fi Interior",
//               description:
//                 "Futuristic interior space designed for a sci-fi game level.",
//               category: "Level Design",
//               imageUrl:
//                 "/placeholder.svg?height=600&width=1200&text=Sci-Fi%20Interior",
//             },
//           ]}
//         />
//       </section>

//       {/* Selected Work */}
//       <section>
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="font-mono text-2xl font-semibold">Selected Work</h2>
//           <Link
//             href="/portfolio"
//             className="text-sm font-medium flex items-center hover:underline"
//           >
//             View all
//             <LucideArrowRight size={14} className="ml-1" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <Link href="/portfolio" className="group">
//             <div className="relative h-64 rounded-xl overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-purple-500/10" />
//               <Image
//                 src="/placeholder.svg?height=256&width=512&text=E-commerce%20Platform"
//                 alt="E-commerce Platform"
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
//                 <h3 className="text-white text-xl font-medium mb-2">
//                   E-commerce Platform
//                 </h3>
//                 <p className="text-white/80 text-sm mb-3">
//                   A modern e-commerce solution with Next.js and Tailwind CSS
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
//                     Next.js
//                   </span>
//                   <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
//                     React
//                   </span>
//                   <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
//                     Tailwind
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>

//           <Link href="/portfolio" className="group">
//             <div className="relative h-64 rounded-xl overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-purple-500/10" />
//               <Image
//                 src="/placeholder.svg?height=256&width=512&text=Dashboard%20UI"
//                 alt="Dashboard UI"
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
//                 <h3 className="text-white text-xl font-medium mb-2">
//                   Dashboard UI
//                 </h3>
//                 <p className="text-white/80 text-sm mb-3">
//                   An analytics dashboard with responsive design and dark mode
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
//                     React
//                   </span>
//                   <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
//                     TypeScript
//                   </span>
//                   <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
//                     Chart.js
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import Hero from "../components/new/Hero";
import fs from "fs";
import path from "path";
import { Suspense } from "react";
import { SkillsSection } from "../components/new/SkillSection";
import { FeaturedProjects } from "../components/new/FeaturedProjects";
import { FeaturedBlogs } from "../components/new/FeaturesBlogs";
import { ContactSection } from "../components/new/contact-section";
import { FeaturedProjectsSkeleton } from "../components/new/skeletons/featured-projects-skeleton";
import { FeaturedBlogsSkeleton } from "../components/new/skeletons/featured-blogs-skeleton";

const page = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Hero />
      {/* Selected Work */}
      <Suspense fallback={<FeaturedProjectsSkeleton />}>
        <FeaturedProjects />
      </Suspense>
      {/* Featured Blogs Section */}
      <Suspense fallback={<FeaturedBlogsSkeleton />}>
        <FeaturedBlogs />
      </Suspense>
      {/* Technical Expertise Section */}
      <SkillsSection />
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default page;
