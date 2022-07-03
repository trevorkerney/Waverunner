export type tag = {
  key: string,
  value: string[],
}

// export type filter = {
//   name: string,
//   logic: '|'|'&'
//   tags: tag[],
// }

// export const defaultFilter: filter = {
//   name: 'DEFAULT',
//   logic: '|',
//   tags: [],
// }

export type media = {
  title: string,
  path: string,
  year: string,
  tags: tag[],
  featurettes: media[],
  media: media[]
}

/** Searches a media or group's tags for a given key value and returns the tag with said key.
 * Returns undefined if key not found.
 * 
 * @param {media} item item to search
 * @param {string} key tag key to search for
 * 
 * @returns {tag|undefined} searched tag, or undefined if not found
 */
// export const findTag = (item: media, key: string): tag|undefined => {
//   let tags: (tag)[] = item.tags;
//   for (let _i = 0; _i < tags.length; _i++) {
//     let tag: tag = tags[_i];
//     if (tag.key.toLowerCase() === key.toLowerCase()) {
//       return tag;
//     }
//   }
//   return undefined;
// }

export type library = {
  name: string,
  full_path: string,
  keys: string[],
  media: (media)[],
}

/** Takes a library and finds a specific media|group list by following given indexes.
 * 
 * @param {library} media the library to start the search with
 * @param {number[]} indexes the path of indexes; if empty, media list of media parameter is returned
 * 
 * @returns {(media)[]} the searched media list
 */
// export const direct = (media: (media|group)[], indexes: number[]): (media|group)[] => {
//   let dir: (media|group)[] = media;
//   indexes.forEach((index) => {
//     dir = (dir[index] as group).media
//   });
//   return dir;
// }
