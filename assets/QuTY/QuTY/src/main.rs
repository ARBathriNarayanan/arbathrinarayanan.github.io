#![warn(clippy::all, rust_2018_idioms)]

// Desktop entry point (Linux / Fedora / Windows / macOS)
#[cfg(not(target_arch = "wasm32"))]
fn main() -> eframe::Result<()> {
    let native_options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default()
            .with_inner_size([1180.0, 760.0])
            .with_min_inner_size([740.0, 480.0])
            .with_title("QuTY - Quantum Hardware & QEC Console"),
        ..Default::default()
    };

    eframe::run_native(
        "QuTY",
        native_options,
        Box::new(|_cc| Box::new(quty_lib::TransmonApp::default())),
    )
}

// WebAssembly fallback (Browser entry point runs from src/lib.rs)
#[cfg(target_arch = "wasm32")]
fn main() {}

