import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tstu.uz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
