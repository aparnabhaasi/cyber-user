/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['https://cybers-six.vercel.app/'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://cybers-six.vercel.app/',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    appDir: true
  }
};
