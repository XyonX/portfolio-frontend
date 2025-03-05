/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "avatars.githubusercontent.com",
      "cdn.jsdelivr.net",
      "unpkg.com",
      "example.com",
      "localhost",
    ], // Allow Unsplash images
  },
};

export default nextConfig;
