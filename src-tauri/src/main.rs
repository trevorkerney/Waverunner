#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;
use tauri::{Wry, Window};
use std::fs::File;
use std::io::Read;
use dirs::home_dir;
use std::path::{Path, PathBuf};
use serde::{Deserialize, Serialize};
// use serde_json::from_str;
//use serde_json::Value;

#[cfg(not(target_os = "windows"))]
fn set_shadow_on_window(_window: &Window<Wry>) 
{
  println!("Window shadows currently only supported on Windows");
}

#[cfg(target_os = "windows")]
fn set_shadow_on_window(window: &Window<Wry>) 
{
  use window_shadows::set_shadow;
  set_shadow(&window, true)
    .expect("Unsupported platform!");
}

#[derive(Serialize, Deserialize)]
struct Library {
  name: String,
  path: String,
}

#[derive(Serialize, Deserialize)]
struct Libraries {
  libraries: Vec<Library>,
}

fn get_cfg_path() -> Result<PathBuf, &'static str> {
  let mut path: PathBuf = match home_dir() {
    Some(d) => d,
    None => return Err("Failed to locate home directory.")
  };
  {
    let chain: [&str; 3] = ["AppData", "Local", "Waverunner"];
    for link in chain {
        path.push(Path::new(link));
    }
  }
  return Ok(path);
}

fn open_libs_file() -> Result<File, &'static str> {
  let mut path: PathBuf = match get_cfg_path() {
    Ok(p) => p,
    Err(e) => return Err(e)
  };
  path.push("categories.json");
  let file: File = if path.is_file() {
    match File::options()
      .read(true)
      .write(true)
      .open(&path) {
        Ok(file) => file,
        Err(_) => return Err("There was an error opening the categories file.")
      }
  } else {
    match File::options()
      .create_new(true)
      .read(true)
      .write(true)
      .open(&path) {
        Ok(file) => file,
        Err(_) => return Err("There was an error creating the categories file.")
      }
  };
  return Ok(file);
}

fn read_libs_file(libs_file: &mut File) -> Result<Libraries, &'static str> {
  let mut libs = Libraries {
    libraries: vec!()
  };
  let mut file_buffer: String = String::new();
  {
    let _bytes: usize = match libs_file.read_to_string(&mut file_buffer) {
      Ok(b) => b,
      Err(_) => return Err("Failed to read post-creation library file.")
    };
  }
  libs = match serde_json::from_str(&file_buffer) {
    Ok(v) => v,
    Err(_) => return Err("Failed to parse file as JSON")
  };
  println!("{}", libs.libraries[0].name);
  return Ok(libs);
}

#[tauri::command]
fn ipc_new_lib(name: String, path: String, tags: String) -> bool {
  println!("{} {} {}", name, path, tags);
  return true;
}

#[tauri::command]
fn ipc_read_libs() {

}

fn main() {
  let mut libs_file: File = match open_libs_file() {
    Ok(file) => file,
    Err(e) => {
      println!("{}", e);
      return;
    }
  };
  let _libs_cfg = match read_libs_file(&mut libs_file) {
    Ok(c) => c,
    Err(e) => {
      println!("{}", e);
      return;
    }
  };

  tauri::Builder::default()
    .setup(|app| {
      let window = app.get_window("main").unwrap();
      set_shadow_on_window(&window);
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![ipc_new_lib, ipc_read_libs])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

// let mut categories = Catgeories {
//   categories: vec!(),
// };

// categories.categories.push(Category {name: String::from("Films"), path: String::from("E:/path/to/films")});

// let categories_json: String = match serde_json::to_string(&categories) {
//   Ok(cj) => cj,
//   Err(_e) => {
//     println!("Error converting categories object to json.");
//     return false;
//   }
// };

// // let mut contents = String::new();
// // match file.read_to_string(&mut contents) {
// //   Ok(val) => {
// //     println!("{}", contents);
// //     ()
// //   },
// //   Err(_e) => {
// //     println!("failed read from file");
// //     return false;
// //   }
// // }

// let res: Value = match serde_json::from_str(&categories_json) {
//   Ok(r) => r,
//   Err(_e) => {
//     println!("Conversion from string to json value failed.");
//     return false;
//   }
// };

// // THIS INFINITELY LOOPS
// // let v: Value = loop {
// //   match serde_json::from_str(&contents) {
// //     Ok(val) => break val,
// //     Err(err) => {
// //       let categories_json = match serde_json::to_string(&categories) {
// //         Ok(cj) => cj,
// //         Err(err) => {
// //           println!("new cat json failed");
// //           return false;
// //         }
// //       };
// //       file.write(categories_json.as_bytes());
// //     },
// //   }
// // };

// if name.len() < 1 {
//   return false;
// }

// // if duplicate tags return false

// return true;