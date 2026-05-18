/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", // خروجی استاتیک HTML
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;