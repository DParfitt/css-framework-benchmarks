import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createBundleAnalyzer from "@next/bundle-analyzer";
import withLinaria from "next-with-linaria";

const withVanillaExtract = createVanillaExtractPlugin();
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fastly.picsum.photos"],
  },
};

export default withVanillaExtract(withLinaria(withBundleAnalyzer(nextConfig)));
