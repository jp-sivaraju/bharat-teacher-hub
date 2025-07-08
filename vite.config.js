
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
  // Completely bypass TypeScript
  build: {
    target: 'esnext',
    rollupOptions: {
      external: [],
    },
  },
  // Force esbuild to treat everything as JSX
  esbuild: {
    loader: 'jsx',
    include: /\.(jsx|js)$/,
    exclude: /\.(ts|tsx)$/,
  },
  // Override any TypeScript configuration
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  // Disable TypeScript completely
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
      },
    },
  },
}));
