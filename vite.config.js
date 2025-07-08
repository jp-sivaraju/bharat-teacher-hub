
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Explicitly disable TypeScript checking in Vite
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      // Ensure we're not trying to process TypeScript files
      external: [],
    },
  },
  // Configure esbuild to handle JSX without TypeScript
  esbuild: {
    jsxInject: `import React from 'react'`,
    loader: 'jsx',
    include: /\.(jsx?|tsx?)$/,
    exclude: [],
  },
  // Ensure we're working with JavaScript only
  define: {
    // Remove any TypeScript-specific definitions
  },
}));
