/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (basePath is injected by actions/configure-pages).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
