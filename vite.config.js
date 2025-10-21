import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",
  base: "/yuliya.bergamo/",
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
