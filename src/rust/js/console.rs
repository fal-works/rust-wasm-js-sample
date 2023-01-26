//! Externs for JavaScript `console` methods.

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    /// Extern for JavaScript `console.log`.
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}
