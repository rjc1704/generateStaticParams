/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn2.thecatapi.com",
      },
    ],
  },
};

export default nextConfig;
