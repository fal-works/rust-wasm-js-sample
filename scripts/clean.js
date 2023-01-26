// @ts-check

import fs from "fs";

const [, , ...args] = process.argv;

const publicFilesToPreserve = ["index.html", "favicon.ico"];

if (args.length === 0) console.log("No arguments passed.");

for (const arg of args) {
  switch (arg) {
    case "--wasm-node":
      await fs.promises.rm("lib/wasm-sample/node", { recursive: true });
      break;

    case "--wasm-web":
      await fs.promises.rm("lib/wasm-sample/web", { recursive: true });
      break;

    case "--js-web":
      const files = await fs.promises.readdir("public");
      for (const file of files.filter(
        (s) => !publicFilesToPreserve.includes(s)
      )) {
        await fs.promises.rm(`public/${file}`, { recursive: true });
      }
      break;

    default:
      throw `Invalid argument: ${arg}`;
  }
}
