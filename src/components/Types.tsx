
export type tag = {
  name: string,
  tag: string,
}

export type filter = {
  name: string,
  title: string,
  artist: string,
  year: string,
  album: string,
  director: string,
  composer: string,
  genre: string,
  tags: tag[],
}

export type media = {
  name: string,
  path: string,
  temp_img_path: string,
}

export type group = {
  name: string,
  path: string,
  temp_img_path: string,
  media: media[],
}

export type library = {
  name: string,
  full_path: string,
  media_filename: string,
  media_filename_exts: string[],
  cover_path: string,
  cover_tags: tag[],
  cover_path_exts: string[],
  library: Array<media|group>,
}

export type category = {
  name: string,
  path: string,
}
