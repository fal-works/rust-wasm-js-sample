# rust-wasm-js-sample

## Prerequisites

- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js](https://nodejs.org/)
- Any web browser

## Install wasm-pack

```
cargo install wasm-pack
```

Try `--no-default-features` option if you have OpenSSL issues.

## Build WASM

Run the below, which compiles `src/rust` and builds a WASM package `lib/wasm-sample`.

```
npm run build:wasm
```

Then run the below to deploy the WASM package into `node_modules` so that you can import it in `src/js`.

```
npm install
```

It also installs other devDependencies necessary for subsequent steps.

## Run Node.js example

To run `src/js` on Node.js environment:

```
npm run start:node
```

## Build & run web example

To bundle `src/js` and deploy an web app into `public`:

```
npm run build:js:web
```

To run the bundled web app on `public/index.html`:

```
npm run start:web
```

then open the localhost.
