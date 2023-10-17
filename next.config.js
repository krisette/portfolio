/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
