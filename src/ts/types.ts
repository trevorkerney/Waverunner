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

/** Searches a media or group's tags for a given key value and returns it.
 * Returns undefined if key not found.
 * 
 * @param {media | group} item item to search
 * @param {string} key tag key to search for
 * 
 * @returns {tag} searched tag, or undefined if not found
 */
export const findTag = (item: media|group, key: string): tag|undefined => {
  let tags: tag[] = item.tags;
  for (let _i = 0; _i < tags.length; _i++) {
    let tag: tag = tags[_i];
    if (tag.key.toLowerCase() === key.toLowerCase()) {
      return tag;
    }
  }
  return undefined;
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
