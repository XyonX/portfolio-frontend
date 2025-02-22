import Image from "next/image";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ease-out">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={post.coverImage}
          fill
          className="object-cover"
          alt={post.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        {post.category && (
          <span className="absolute top-2 right-2 bg-black/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {post.category}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{post.date}</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
