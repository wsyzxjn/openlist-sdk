// tsup.config.ts
import { defineConfig, type Options } from "tsup";

const DEFAULT_CONFIG: Options = {
  entry: ["src"],
  dts: true,
  clean: true,
  outDir: "dist",
  skipNodeModulesBundle: true,
  bundle: false,
  sourcemap: process.env.NODE_ENV === "production" ? false : true,
};

export default defineConfig([
  {
    ...DEFAULT_CONFIG,
    format: "esm",
  },
]);
