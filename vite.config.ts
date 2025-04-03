import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import crypto from "crypto";
import getRandom from "./src/utils/getRandom";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/template_vite_react_ts/",
  server: {
    port: 4200,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@pages": path.resolve(__dirname, "./src/"),
      "@ui": path.resolve(__dirname, "./src/ui/"),
      "@redux": path.resolve(__dirname, "./src/redux/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@img": path.resolve(__dirname, "src/assets/img/"),
      "@style": path.resolve(__dirname, "src/assets/style/"),
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },

    // More flexible config css modules
    modules: {
      localsConvention: "camelCase",
      generateScopedName: (name, filename, css) => {
        const componentName = filename.slice(filename.lastIndexOf("/") + 1, filename.indexOf("."));

        // Generate hash
        const hash = crypto.createHash("md5").update(css).digest("base64url").substring(0, 2);

        return `${componentName}__${name}-${hash}${getRandom.numberInRange(10, 100)}`;
      },
    },
  },
});
