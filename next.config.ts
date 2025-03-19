import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/web-calculator',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
