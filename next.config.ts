import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/drjao9yvp/**',
      },
    ],
  },
  experimental: {
  },
};

export default nextConfig;
