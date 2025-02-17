/** @type {import('next').NextConfig} */
export default {
  images: {
    domains: ['cybers-six.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cybers-six.vercel.app',
        pathname: '/uploads/**',
      },
    ],
  },
  // Removed the appDir option since it's deprecated in Next.js 14.1.0
  pageExtensions: ['tsx', 'ts'],
};
