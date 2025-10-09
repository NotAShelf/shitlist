import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lists.notashelf.dev",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
