/** @type {import('next').NextConfig} */
const isPagesExport = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: isPagesExport ? "export" : undefined,
  basePath: isPagesExport ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "",
  trailingSlash: isPagesExport ? true : false,
  images: {
    unoptimized: isPagesExport ? true : false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
