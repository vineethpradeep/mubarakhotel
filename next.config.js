/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
