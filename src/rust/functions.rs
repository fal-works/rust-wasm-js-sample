//! Example functions to be compiled into WASM.

use wasm_bindgen::prelude::*;

/// Calculates factorial of `num`.
#[wasm_bindgen]
pub fn factorial(num: i32) -> i32 {
    (1..=num).product()
}
