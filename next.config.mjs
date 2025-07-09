/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

export default {
  ...nextConfig,
  assetPrefix: isExport ? '/' : undefined,
  trailingSlash: true,
};
