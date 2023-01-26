//! Example structs to be compiled into WASM.

use wasm_bindgen::prelude::*;
use crate::console_log;

/// Struct for allocating memory to be shared among JavaScript and WASM.
#[wasm_bindgen]
pub struct SharedData {
    array: js_sys::Int32Array,
}

#[wasm_bindgen]
impl SharedData {
    #[wasm_bindgen(constructor)]
    pub fn new(array: js_sys::Int32Array) -> SharedData {
        SharedData { array }
    }

    pub fn get(&self, index: u32) -> i32 {
        self.array.get_index(index)
    }

    pub fn set(&mut self, index: u32, value: i32) {
        self.array.set_index(index, value);
    }

    pub fn print(&self, index: u32) {
        console_log!("{}", self.get(index));
    }
}
