import Image from "next/image";
import React from "react";

const Post = ({ post }) => {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev
  console.log(JSON.stringify(post));
  return (
    <div className="border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ease-out">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={`${API_BASE_URL}${post.featuredImage}`}
          fill
          className="object-cover"
          alt={post.title}
        />
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{new Date(post.publicationDate).toDateString()}</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
