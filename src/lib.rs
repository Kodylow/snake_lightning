use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) {
    println!("Yo {}", name);
}