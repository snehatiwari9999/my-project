import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // Ensure this matches Netlify's publish directory
  },
});
