import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/cli/index.ts'],
  sourcemap: true,
  splitting: true,
  format: "cjs",
  clean: true,
  dts: true,
  treeshake: true,
  minify: true,
});
