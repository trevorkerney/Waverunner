use std::path::PathBuf;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Tag {
  pub key: String,
  pub value: Vec<String>
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Media {
  pub title: String,
  pub path: PathBuf,
  pub year: String,
  pub tags: Vec<Tag>,
  pub featurettes: Vec<Media>,
  pub media: Vec<Media>
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Library {
  pub name: String,
  pub format: String,
  pub tags: Vec<String>,
  pub content: Vec<Media>
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Category {
  pub name: String,
  pub path: PathBuf
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Categories {
  pub cats: Vec<Category>
}
