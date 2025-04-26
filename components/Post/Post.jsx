import Image from "next/image";
import React from "react";

const Post = ({ post }) => {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

  const imageUrl = post.featuredImage
    ? `${API_BASE_URL}${post.featuredImage}`
    : "/placeholder.jpg";

  return (
    <div className="border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ease-out rounded-lg overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-video w-full">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Title with fixed height for 2 lines */}
        <h2 className="text-base font-semibold text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {post.title}
        </h2>

        {/* Description with fixed height for 3 lines */}
        <p className="text-xs text-gray-600 line-clamp-3 min-h-[4.5rem]">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <span>{new Date(post.publicationDate).toDateString()}</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
