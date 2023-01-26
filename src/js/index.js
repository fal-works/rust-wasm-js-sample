// @ts-check

import { factorial, SharedData } from "wasm-sample";

// Run function
console.log("Should print '24':");
console.log(factorial(4));

// Create instance
const array = new Int32Array(new SharedArrayBuffer(4));
array[0] = 16;
const data = new SharedData(array);
console.log("Should print '16':");
console.log(data.get(0)); // 16

// JavaScript -> Rust
array[0] = 32;
console.log("Should print '32':");
data.print(0); // 32

// Rust -> JavaScript
data.set(0, 64);
console.log("Should print '64':");
console.log(array[0]); // 64
