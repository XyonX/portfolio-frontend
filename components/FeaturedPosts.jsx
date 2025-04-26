import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Tag, ArrowRight, AlertTriangle, Section } from "lucide-react";

// Animation variants for Framer Motion
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// API base URL (replace with your actual API endpoint)
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

// Fallback data in case API fetch fails
// const fallbackPosts = [
//   {
//     id: 1,
//     title: "Building Responsive Web Applications",
//     slug: "building-responsive-web-applications",
//     description:
//       "Learn how to create web applications that work seamlessly across all devices.",
//     featuredImage: "/placeholder.svg?height=400&width=600",
//     publicationDate: "2023-01-15",
//     readTime: 5,
//     categories: ["Web Development", "Responsive Design"],
//     type: "blog",
//   },
//   {
//     id: 2,
//     title: "Getting Started with Unreal Engine",
//     slug: "getting-started-with-unreal-engine",
//     description:
//       "A beginner's guide to creating your first game with Unreal Engine.",
//     featuredImage: "/placeholder.svg?height=400&width=600",
//     publicationDate: "2023-02-20",
//     readTime: 8,
//     categories: ["Game Development", "Unreal Engine"],
//     type: "blog",
//   },
//   {
//     id: 3,
//     title: "E-commerce Platform",
//     slug: "e-commerce-platform",
//     description: "A full-stack online store built with Next.js and Stripe.",
//     featuredImage: "/placeholder.svg?height=400&width=600",
//     publicationDate: "2023-03-10",
//     readTime: 3,
//     categories: ["Web Development", "E-commerce"],
//     type: "portfolio",
//   },
//   {
//     id: 4,
//     title: "3D Adventure Game",
//     slug: "3d-adventure-game",
//     description:
//       "An immersive 3D adventure game developed using Unreal Engine.",
//     featuredImage: "/placeholder.svg?height=400&width=600",
//     publicationDate: "2023-03-05",
//     readTime: 6,
//     categories: ["Game Development", "Unreal Engine"],
//     type: "portfolio",
//   },
//   {
//     id: 5,
//     title: "Modern UI Design Principles",
//     slug: "modern-ui-design-principles",
//     description:
//       "Exploring the latest trends and best practices in UI/UX design.",
//     featuredImage: "/placeholder.svg?height=400&width=600",
//     publicationDate: "2023-04-12",
//     readTime: 4,
//     categories: ["Design", "UI/UX"],
//     type: "blog",
//   },
//   {
//     id: 6,
//     title: "Portfolio Website",
//     slug: "portfolio-website",
//     description:
//       "A responsive portfolio website showcasing my work and skills.",
//     featuredImage: "/placeholder.svg?height=400&width=600",
//     publicationDate: "2023-05-18",
//     readTime: 2,
//     categories: ["Web Development", "Portfolio"],
//     type: "portfolio",
//   },
// ];
const fallbackPosts = [
  {
    id: 1,
    title: "Aiverse",
    slug: "building-responsive-web-applications",
    description:
      "Learn how to create web applications that work seamlessly across all devices.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publicationDate: "2023-01-15",
    readTime: 5,
    categories: ["Web Development", "Responsive Design"],
    type: "blog",
  },
  {
    id: 2,
    title: "Slice Vault",
    slug: "getting-started-with-unreal-engine",
    description:
      "A beginner's guide to creating your first game with Unreal Engine.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    publicationDate: "2023-02-20",
    readTime: 8,
    categories: ["Game Development", "Unreal Engine"],
    type: "blog",
  },
];

// Skeleton component for loading state
const SkeletonPost = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col animate-pulse">
    <div className="relative h-48 bg-gray-200" />
    <div className="p-5 flex-grow flex flex-col">
      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
        <div className="flex items-center">
          <div className="w-14 h-4 bg-gray-200 rounded" />
        </div>
        <div className="flex items-center">
          <div className="w-20 h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-full mb-1" />
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-20 mt-auto" />
    </div>
  </div>
);

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${API_BASE_URL}/api/portfolios`);
        //console.log(await response.json());
        if (!response.ok) {
          throw new Error("Failed to fetch features posts");
        }

        const { data } = await response.json();
        console.log(data);
        setPosts(data.slice(0, 6));
        setUsingFallbackData(false);
      } catch (err) {
        console.error("Error fetching post :", err);
        setPosts(fallbackPosts);
        setUsingFallbackData(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  //TODO IMPLEMENT ACTUAL FEATURED POST BASED ON CONDIOON AND FILTERED FROM DATA

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="text-3xl font-bold text-primary-text text-center mb-12"
          >
            Featured Projects
          </motion.h2>
        </div>

        {usingFallbackData && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  {error ||
                    "Using sample content as we couldn't connect to the API."}
                </p>
              </div>
            </div>
          </div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
          key="featured-posts"
        >
          {isLoading ? (
            // Render skeleton screen for 6 posts
            Array(6)
              .fill()
              .map((_, index) => (
                <motion.div key={`skeleton-${index}`} variants={item}>
                  <SkeletonPost />
                </motion.div>
              ))
          ) : posts.length > 0 ? (
            posts.map((post, index) => (
              <motion.div
                key={`${post.type}-${post.id}-${index}`}
                variants={item}
              >
                <Link
                  href={`/${post.type === "blog" ? "blogs" : "portfolios"}/${
                    post.slug
                  }`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col transform group-hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={
                          post.featuredImage &&
                          !post.featuredImage.startsWith("/placeholder")
                            ? `${API_BASE_URL}${post.featuredImage}`
                            : "/placeholder.svg?height=400&width=600"
                        }
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          const target = e.target;
                          target.src = "/placeholder.svg?height=400&width=600";
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            post.type === "blog"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {post.type === "blog" ? "Blog" : "Project"}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime} min read</span>
                        </div>
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex items-center">
                            <Tag size={14} className="mr-1" />
                            <span>{post.categories[0]}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent-text transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {post.description}
                      </p>

                      <div className="flex items-center text-accent-text font-medium text-sm mt-auto">
                        <span>Read more</span>
                        <ArrowRight
                          size={16}
                          className="ml-1 transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500">No posts found.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
