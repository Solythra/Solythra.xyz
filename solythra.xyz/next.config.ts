import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      enabled: false, // Correct way to disable Turbopack in Next.js 15.2.1+
    },
  },
};

export default nextConfig;
