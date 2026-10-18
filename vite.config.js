import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  plugins: [tailwindcss()],
});
