import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://yashpalsince2004.github.io",
  base: "/Dr.computer",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
