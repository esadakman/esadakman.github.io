import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root user-site (esadakman.github.io) is served from "/".
  base: "/",
  build: {
    // Keep the CRA output dir so `gh-pages -d build` (deploy script) keeps working.
    outDir: "build",
  },
});
