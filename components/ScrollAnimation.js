"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ScrollAnimation = ({
  children,
  className,
  delay = 0,
  animationClass = "scroll-animation",
}) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px",
  });

  return (
    <div
      ref={ref}
      className={`${className} ${animationClass} ${isVisible ? "active" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
