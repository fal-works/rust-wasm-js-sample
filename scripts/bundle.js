import { build } from "esbuild";
import { wasmLoader } from "esbuild-plugin-wasm";

build({
  entryPoints: ["src/js/index.js"],
  outfile: "public/main.js",
  bundle: true,
  plugins: [wasmLoader()],
  format: "esm",
  sourcemap: true,
});
