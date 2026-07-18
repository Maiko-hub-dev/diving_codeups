
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
   base: "./",
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "src/sass"),
      "@images": path.resolve(__dirname, "src/images"),
    },
  },
    build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
   server: {
    host: true,
  },
});

