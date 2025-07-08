
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
  // Configure for JavaScript only
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      external: [],
    },
  },
  // Configure esbuild to handle JSX in JavaScript mode
  esbuild: {
    jsxInject: `import React from 'react'`,
    loader: 'jsx',
    include: /\.(jsx?)$/,
    exclude: /\.(ts|tsx)$/,
  },
  // Disable TypeScript checking completely
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));
