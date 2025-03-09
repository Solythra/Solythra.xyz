import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Allow Cloudinary-hosted images and videos
  },
  experimental: {
    optimizeCss: true, // Optimize CSS for faster loads
    scrollRestoration: true, // Improve user experience on page reload
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      type: 'asset/resource', // Ensures videos are properly handled
    });
    return config;
  },
};

export default nextConfig;
