import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    assetsDir: "assets",

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {

          const name = assetInfo.names?.[0] ?? "";

          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name)) {
            return "assets/common/[name]-[hash][extname]";
          }

          if (/\.css$/i.test(name)) {
            return "assets/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
    server: {
    host: true,
  },
});
