/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'], // Allow localhost as a domain
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '3001', // Specify the correct port
          pathname: '/uploads/**', // Allow images from /uploads/ path
        },
      ],
    },
  };
  
  export default nextConfig;
  