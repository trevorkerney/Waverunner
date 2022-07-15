export type Tag = {
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

export type Media = {
  title: string,
  path: string,
  year: string,
  tags: Tag[],
  featurettes: Media[],
  media: Media[]
}

/** Searches a media or group's tags for a given key value and returns the tag with said key.
 * Returns undefined if key not found.
 * 
 * @param {Media} item item to search
 * @param {string} key tag key to search for
 * 
 * @returns {Tag|undefined} searched tag, or undefined if not found
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

export type Library = {
  name: string,
  path: string,
  keys: string[],
  media: (Media)[],
}

/** Takes a library and finds a specific media|group list by following given indexes.
 * 
 * @param {Library} media the library to start the search with
 * @param {number[]} indexes the path of indexes; if empty, media list of media parameter is returned
 * 
 * @returns {(Media)[]} the searched media list
 */
// export const direct = (media: (media|group)[], indexes: number[]): (media|group)[] => {
//   let dir: (media|group)[] = media;
//   indexes.forEach((index) => {
//     dir = (dir[index] as group).media
//   });
//   return dir;
// }
