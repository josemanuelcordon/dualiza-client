import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    base: "",
    outDir: "dist", // Directorio de salida de los archivos compilados
    assetsDir: "assets", // Directorio donde se colocarán los activos generados (imágenes, etc.)
    rollupOptions: {
      input: {
        main: "./src/main.js", // Ruta de entrada principal de tu aplicación
      },
    },
  },
});
