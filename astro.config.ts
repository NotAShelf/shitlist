import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lists.notashelf.dev",
  output: "static",
  build: {
    format: "directory",
  },
});
