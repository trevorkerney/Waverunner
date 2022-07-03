#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod types;
use types::{Categories, Category, Library, Media, Tag};

use tauri::Manager;
use tauri::{Wry, Window};
use std::fs::{File, read_dir, metadata};
use std::io::{Read, Seek, Write};
use dirs::home_dir;
use std::path::{Path, PathBuf};
use matroska::Matroska;
use tmdb::model::*;
use tmdb::themoviedb::*;

fn set_shadow_on_window(window: &Window<Wry>) {
  use window_shadows::set_shadow;
  match set_shadow(&window, true) {
    Ok(_) => (),
    Err(_) => println!("Unsupported platform for window shadows")
  }
}

enum MediaFormat {
  Mkv
}

/*
 * Obtains the filepath of Waverunner's config directory
 */
#[cfg(target_os = "windows")]
fn get_cfg_path() -> Result<PathBuf, &'static str> {
  let mut path: PathBuf = match home_dir() {
    Some(d) => d,
    None => return Err("Failed to locate home directory.")
  };
  let chain: [&str; 3] = ["AppData", "Local", "Waverunner"];
  for link in chain {
    path.push(Path::new(link));
  }
  return Ok(path);
}

/*
 * Opens the categories file and returns it
 */
fn open_cats_file() -> Result<File, &'static str> {
  let mut path: PathBuf = get_cfg_path()?;
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

/*
 * Opens and reads the categories file into a categories object and returns it
 */
fn read_cats_file() -> Result<Categories, &'static str> {
  let mut file = open_cats_file()?;
  let mut file_buffer: String = String::new();
  {
    let _bytes: usize = match file.read_to_string(&mut file_buffer) {
      Ok(b) => b,
      Err(_) => return Err("Failed to read post-creation library file.")
    };
  }
  let cats: Categories = match serde_json::from_str(&file_buffer) {
    Ok(v) => v,
    Err(_) => return Err("Failed to parse file as JSON")
  };
  return Ok(cats);
}

/*
 * 
 */
fn write_cats_file(categories: Categories) -> Result<(), &'static str> {
  let cats_json = match serde_json::to_vec_pretty(&categories) {
    Ok(cj) => cj,
    Err(_) => return Err("Categories to json string failed.")
  };
  let mut file = open_cats_file()?;
  match file.write_all(&cats_json) {
    Ok(()) => (),
    Err(_) => return Err("File write failed.")
  };
  return Ok(());
}

/*
 * 
 */
fn add_category(category: Category) -> Result<(), &'static str> {
  let mut current: Categories = read_cats_file()?;
  current.cats.push(category);
  write_cats_file(current)?;
  return Ok(());
}

/*
 * 
 */
fn verify_media(file: &File) -> Option<MediaFormat> {
  match Matroska::open(file) {
    Ok(_) => return Some(MediaFormat::Mkv),
    Err(_) => ()
  };
  return None;
}

/*
 * 
 */
fn get_media_title(file: &File, format: MediaFormat) -> Option<String> {
  match format {
    MediaFormat::Mkv => {
      match Matroska::open(file) {
        Ok(f) => {
          match f.info.title {
            Some(t) => return Some(t),
            None => return None
          }
        },
        Err(_) => return None
      };
    }
  };
}

/*
 * 
 */
fn tmdb_find(media: Media, keys: &Vec<String>) -> Result<Media, Media> {
  let key: &str = "24ebe2b33780e4b97a50193f592b771d";
  let tmdb = TMDb {
    api_key: key, 
    language: "en" 
  };
  let contents: SearchResult = match tmdb.search()
    .title(media.title.as_str())
    .execute() {
      Ok(m) => m,
      Err(_) => return Err(media)
  };
  if contents.results.is_empty() { return Err(media); }
  let id = contents.results[0].id;
  let content: Movie = match tmdb.fetch()
    .id(id)
    .append_credits()
    .execute() {
      Ok(m) => m,
      Err(_) => return Err(media)
  };
  let mut tmdb_media = Media {
    title: content.title,
    path: media.path.clone(),
    year: content.release_date[..4].to_string(),
    tags: vec!(),
    featurettes: vec!(),
    media: vec!()
  };
  let credits = match content.credits {
    Some(c) => c,
    None => return Ok(tmdb_media)
  };
  for key in keys {
    let mut tag = Tag { key: key.clone(), value: vec!() };
    for credit in &credits.crew { if key == &credit.job { tag.value.push(credit.name.clone()); } }
    if tag.value.len() > 0 { tmdb_media.tags.push(tag); }
  }
  return Ok(tmdb_media);
}

/*
 * Recursively 
 */
fn delve(lib: &mut Library, root: PathBuf, keys: &Vec<String>) {
  let paths_iter = match read_dir(&root) {
    Ok(r) => r,
    Err(_) => return
  };
  let mut paths: Vec<PathBuf> = vec!();
  for entry in paths_iter {
    let dir = match entry {
      Ok(e) => e,
      Err(_) => continue
    };
    paths.push(dir.path());
  }
  for path in &paths {
    let md = match metadata(&path) {
      Ok(m) => m,
      Err(_) => continue
    };
    if md.is_dir() { delve(lib, path.clone(), &keys); }
    else if md.is_file() {
      let mut file: File = match File::options()
        .read(true)
        .open(&path) {
          Ok(file) => file,
          Err(_) => continue
      };
      let format: MediaFormat = match verify_media(&file) {
        Some(mt) => mt,
        None => continue
      };
      file.rewind().unwrap();
      let mut found = false;
      let mut media = Media {
        title: match get_media_title(&file, format) {
          Some(title) => {
            found = true;
            title
          },
          None => match path.file_name() {
            Some(osn) => match osn.to_os_string().into_string() {
              Ok(s) => s,
              Err(_) => String::new()
            },
            None => String::new()
          }
        },
        path: path.clone(),
        year: String::from("0000"),
        tags: vec!(),
        featurettes: vec!(),
        media: vec!()
      };
      if found {
        media = match tmdb_find(media, keys) {
          Ok(m) => m,
          Err(m) => m
        };
      }
      lib.content.push(media);
    }
  }
}

/*
 * IPC
 * Receives the basic parameters from the frontend for a new library and passes them to new_lib()
 */
#[tauri::command]
fn ipc_new_lib(name: String, format: String, path: String/*, tags: Vec<String>*/) -> Result<Library, String> {
  match new_lib(name, format, PathBuf::from(path), vec!()) {
    Ok(l) => return Ok(l),
    Err(e) => return Err(String::from(e))
  };
}

/*
 * 
 */
fn new_lib(name: String, format: String, path: PathBuf, tags: Vec<String>) -> Result<Library, &'static str> {
  dbg!("begin new lib");

  let cats: Categories = match read_cats_file() {
    Ok(c) => c,
    Err(e) => {
      return Err(e);
    }
  };
  for category in &cats.cats {
    let curr: &String = &category.name;
    if curr.eq(&name) { return Err("Duplicate category name."); }
  }

  if !path.exists() { return Err("Given path does not exist.") }

  for t1 in 0..tags.len() {
    for t2 in t1 + 1..tags.len() {
      if tags[t1] == tags[t2] {
        return Err("Duplicate category tags.")
      }
    }
  }

  // CHECK IF LIBRARY JSON FILE ALREADY EXISTS AND IF SO, ASK IF THEY WANT TO IMPORT IT INSTEAD, OVERWRITE IT, OR CANCEL

  let mut lib = Library {
    name: name.clone(),
    format: format.clone(),
    tags: tags.clone(),
    content: vec!()
  };

  dbg!("delving");

  let md = match metadata(&path) {
    Ok(m) => m,
    Err(_) => return Err("Metadata retrieval failed.")
  };
  if md.is_dir() { delve(&mut lib, path.clone(), &tags); }
  else { return Err("Given path is not a directory"); }

  dbg!("writing index file");

  let mut index_path = path.clone();
  index_path.push(Path::new("index.json"));
  let mut index_file: File = match File::options()
    .create_new(true)
    .read(true)
    .write(true)
    .open(&index_path) {
      Ok(file) => file,
      Err(_) => return Err("There was an error creating a library index file in the given location.")
  };
  let lib_json = match serde_json::to_vec_pretty(&lib) {
    Ok(lj) => lj,
    Err(_) => return Err("Failed to convert library to json.")
  };
  match index_file.write_all(&lib_json) {
    Ok(()) => (),
    Err(_) => return Err("Writing library to file failed.")
  };

  dbg!("writing categories config file");

  add_category(Category { name, path })?;
  return Ok(lib);
}

#[tauri::command]
fn ipc_read_libs() {

}

fn read_libs() {
  
}

fn main() {
  // match new_lib(String::from("Testing"), String::from("features"), PathBuf::from("F:\\~ the sanctum ~\\Media\\Movies"), vec![String::from("Director"), String::from("Genre")]) {
  //   Ok(()) => (),
  //   Err(e) => println!("{}", e)
  // };

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
