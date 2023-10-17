import vituum from "vituum";
import postcss from '@vituum/vite-plugin-postcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import tailwindcss from '@vituum/vite-plugin-tailwindcss';

export default {
  build: {
    outDir: "./dist",
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    vituum(),
    tailwindcss(),
    postcss(),
    posthtml({
      root: "./src",
    }),
  ],
};
