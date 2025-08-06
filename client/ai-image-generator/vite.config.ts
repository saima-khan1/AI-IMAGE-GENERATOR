import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: require.resolve("crypto-browserify"),
    },
  },
});
