/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['cybers-six.vercel.app'],  // Only the hostname
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cybers-six.vercel.app',
        pathname: '/uploads/**',  // Match the image path
      },
    ],
  },
  experimental: {
    appDir: true
  }
};
