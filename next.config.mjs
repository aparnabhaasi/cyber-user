/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['cybers-six.vercel.app'],  // Only the hostname
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cybers-six.vercel.app',
        port: '',
        pathname: '/uploads/**',  // Should match the image path
      },
    ],
  },
  experimental: {
    appDir: true
  }
};
