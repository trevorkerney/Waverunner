export type tag = {
  key: string,
  value: string,
}

export type bundle = {
  key: string,
  value: string[],
}

export const valAsTag = (bundle: tag|bundle) => { // problematic if bundle has no values
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
  keys: string[],
  media: (media|group)[],
}

/** Takes a library or group and finds a specific media|group list by following given indexes.
 * 
 * @param {library|group} media the library or group to start the search with
 * @param {number[]} indexes the path of indexes; if empty, media|group list of media parameter is returned
 * 
 * @returns {(media|group)[]} the searched media|group list
 */
export const direct = (media: (media|group)[], indexes: number[]): (media|group)[] => {
  let dir: (media|group)[] = media;
  indexes.forEach((index) => {
    dir = (dir[index] as group).media
  });
  return dir;
}
