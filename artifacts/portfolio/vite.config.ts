import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { compression } from "vite-plugin-compression2";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

const basePath = process.env.BASE_PATH ?? "/";
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(isProd
      ? [
          compression({ algorithm: "brotliCompress", exclude: [/\.(png|jpg|webp|gif|ico|woff2?)$/] }),
          compression({ algorithm: "gzip", exclude: [/\.(png|jpg|webp|gif|ico|woff2?)$/] }),
        ]
      : []),
    ...(!isProd && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: true,
    target: "es2020",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.warn"],
        passes: 2,
      },
      mangle: { toplevel: true },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("react-dom") || id.includes("react/")) return "vendor-react";
            if (id.includes("lucide-react") || id.includes("react-icons")) return "vendor-icons";
            if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("wouter")) return "vendor-router";
            if (id.includes("react-helmet-async")) return "vendor-helmet";
            if (id.includes("embla-carousel")) return "vendor-carousel";
            if (id.includes("sonner") || id.includes("vaul") || id.includes("cmdk")) return "vendor-ui-extra";
            return "vendor";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
