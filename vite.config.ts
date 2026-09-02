import { defineConfig } from "vitest/config";

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: "src/multi-light-card.ts",
      name: "MultiLightCard",
      formats: ["es"],
      fileName: () => "multi-light-card.js"
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  test: {
    include: ["tests/**/*.test.ts"]
  }
});
