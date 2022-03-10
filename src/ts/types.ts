export type tag = {
  key: string,
  value: string,
}

export type bundle = {
  key: string,
  value: string[],
}

export const valAsTag = (bundle: tag|bundle) => {
  return (
    (typeof bundle.value === 'string')
    ? bundle.value
    : (bundle.value[0])
      ? bundle.value[0]
      : ''
  )
}

export type filter = {
  name: string,
  logic: '|'|'&'
  tags: tag[],
}

export const defaultFilter: filter = {
  name: 'DEFAULT',
  logic: '|',
  tags: [],
}

export type media = {
  type: 'media',
  path: string,
  temp_img_path: string,
  tags: (tag|bundle)[],
}

export type group = {
  type: 'group',
  path: string,
  temp_img_path: string,
  tags: (tag|bundle)[],
  media: (media|group)[],
}

/** Searches a media or group's tags for a given key value and returns the tag with said key.
 * Returns undefined if key not found.
 * 
 * @param {media | group} item item to search
 * @param {string} key tag key to search for
 * 
 * @returns {tag | undefined} searched tag, or undefined if not found
 */
export const findTag = (item: media|group, key: string): tag|bundle|undefined => {
  let tags: (tag|bundle)[] = item.tags;
  for (let _i = 0; _i < tags.length; _i++) {
    let tag: tag|bundle = tags[_i];
    if (tag.key.toLowerCase() === key.toLowerCase()) {
      return tag;
    }
  }
  return undefined;
}

export type library = {
  name: string,
  full_path: string,
  media_filename: string,
  media_filename_exts: string[],
  keys: string[],
  cover_path: string,
  cover_tags: tag[],
  cover_path_exts: string[],
  default_view: string,
  media: (media|group)[],
}

export type category = {
  name: string,
  path: string,
}
