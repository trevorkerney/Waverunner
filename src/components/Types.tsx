export type tag = {
  key: string,
  value: string,
}

export type filter = {
  name: string,
  tags: tag[],
}

export type media = {
  type: string,
  path: string,
  temp_img_path: string,
  tags: tag[],
}

export type group = {
  type: string,
  path: string,
  temp_img_path: string,
  tags: tag[],
  media: media[],
}

export type pseudo = {
  type: string
}

export type library = {
  name: string,
  full_path: string,
  media_filename: string,
  media_filename_exts: string[],
  cover_path: string,
  cover_tags: tag[],
  cover_path_exts: string[],
  default_view: string,
  library: Array<media|group>,
}

export type category = {
  name: string,
  path: string,
}
