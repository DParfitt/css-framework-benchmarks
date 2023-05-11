/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

export default defineConfig({
  // example
  site: "https://css-framework-benchmarks.vercel.app",
  scanner: {
    // samples: 3,
    device: "desktop",
    throttle: true,
  },
});
