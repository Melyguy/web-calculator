import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Changed from 'standalone' to 'export'
  basePath: '/web-calculator',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
