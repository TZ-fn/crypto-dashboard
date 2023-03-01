import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/globals.scss"; @import "src/styles/variables.scss"; @import "src/styles/mixins.scss";`,
      },
    },
  },
});
