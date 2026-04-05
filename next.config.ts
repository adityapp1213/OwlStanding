import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.shadcnspace.com",
      },
    ],
  },
};

export default nextConfig;
