import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "favicon.ico",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "apple-touch-icon.png",
        "maskable-icon.png"
      ],
      manifest: {
        name: "MQTT Live Data",
        short_name: "MQTT",
        description:
          "MQTT Live Data Viewing and exporting in Excell Application",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "/maskable-icon.png",
            sizes: "225x225",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
        theme_color: "#171717",
        background_color: "#e8ebf2",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "landscape"
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024 // Increase cache size limit to 3 MB
      }
    })
  ],
  server: {
    host: "172.168.0.81",
    port: 3001
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  }
});
