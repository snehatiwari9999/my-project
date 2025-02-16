import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".", // Explicitly set the root directory
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html", // Use a relative path
    },
  },
});
