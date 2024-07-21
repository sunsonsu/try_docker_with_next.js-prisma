/** @type {import('next').NextConfig} */
const nextConfig = {
    // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
    //help you develop more safer
    reactStrictMode: true,
    output: 'standalone',
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  };
  
  export default nextConfig;
  