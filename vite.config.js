import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryBase = "/itz-fizz-scroll-hero/";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? repositoryBase : "/",
  server: { host: "0.0.0.0", port: 3000, strictPort: true },
  preview: { host: "0.0.0.0", port: 4173, strictPort: true },
}));
