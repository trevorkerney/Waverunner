#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use serde;

#[tauri::command]
fn import_from_path(path: String) -> bool {
  println!("{}", path);
  return true;
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![import_from_path])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
