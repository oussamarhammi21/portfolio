import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    // Pre-transform the home page as soon as `npm run dev` starts
    warmup: {
      clientFiles: ["./src/main.tsx", "./src/pages/Home.tsx"],
    },
  },
});