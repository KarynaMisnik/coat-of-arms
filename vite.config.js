import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/coat-of-arms/",
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
});
