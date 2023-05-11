import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: "short",
});
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["ve"],
  images: {
    domains: ["fastly.picsum.photos"],
  },
};

export default withVanillaExtract(withBundleAnalyzer(nextConfig));
