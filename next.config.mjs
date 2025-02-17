/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'localhost:3001'], // Include both
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001', 
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    appDir: true  // Enable App Router support
  }
};

export default nextConfig;
