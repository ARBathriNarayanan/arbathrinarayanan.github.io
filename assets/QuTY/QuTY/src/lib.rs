#![warn(clippy::all, rust_2018_idioms)]

pub mod app;
pub mod circuit_grid;
pub mod emitters;
pub mod physical_specs;
pub mod postprocessing;
pub mod qasm;

pub use app::TransmonApp;

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    console_error_panic_hook::set_once();

    let web_options = eframe::WebOptions::default();

    wasm_bindgen_futures::spawn_local(async {
        eframe::WebRunner::new()
            .start(
                "the_canvas_id",
                web_options,
                Box::new(|_cc| Box::new(TransmonApp::default())),
            )
            .await
            .expect("failed to start eframe");
    });

    Ok(())
}


