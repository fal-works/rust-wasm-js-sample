//! Collection of internal items.

/// Alternative to `println!` using JavaScript `console.log`.
#[macro_export]
macro_rules! console_log {
    ($($t:tt)*) => (crate::js::console::log(&format_args!($($t)*).to_string()))
}
