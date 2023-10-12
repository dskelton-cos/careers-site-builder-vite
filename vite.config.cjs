import { defineConfig } from "vite";
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({

  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
  },
  root: "src",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
});
