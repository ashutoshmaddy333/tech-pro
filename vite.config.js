import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-router-dom", "react-scroll", "react-router-hash-link", "lucide-react"],
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
