"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideExternalLink,
} from "lucide-react";

export function GallerySlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = (useRef < NodeJS.Timeout) | (null > null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Reset autoplay when manually changing slides
  const handleManualNavigation = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    callback();

    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Set up autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause autoplay when hovering
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isAutoPlaying && !autoPlayRef.current) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main slider */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mb-4 max-w-lg line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                  {item.category}
                </span>

                {item.externalUrl && (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                  >
                    <LucideExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => handleManualNavigation(prevSlide)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <LucideArrowLeft size={20} />
      </button>

      <button
        onClick={() => handleManualNavigation(nextSlide)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <LucideArrowRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => goToSlide(index))}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
