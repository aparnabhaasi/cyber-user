/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['https://cyber-user.vercel.app/'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://cyber-user.vercel.app/',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    appDir: true
  }
};
