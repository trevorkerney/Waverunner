import { useState, useEffect, useRef, ReactElement } from 'react'

import Cover from "./cover/Cover"

import { tag, findTag, filter, media, group, pseudo, library } from '../../../ts/types'

import '../../css/OldMedia.css'

const Media = (props: { library: library, filters: filter[], search: string, sort: string, coverWidth: number }) => {

  const [libraryWidth, setLibraryWidth] = useState<number>(1900);

  const libraryContainer = useRef<any>();

  /** Removes "the ", "an ", or "at" from the beginning of a string.
   * 
   * @param {string} name: The name to check and potentially remove a prefix from
   * 
   * @returns {string}
   */
  const rmPrefix = (name: string): string => {
    if (name.startsWith("the ")) {
      return name.slice(4);
    }
    if (name.startsWith("an ")) {
      return name.slice(3);
    }
    if (name.startsWith("a ")) {
      return name.slice(2);
    }
    return name;
  }

  /** Takes two objects and returns how the first object lexicographically compares to the second.
   *
   * @param {media|group} a an object
   * @param {media|group} b another object
   * 
   * @returns {number} -1 if lesser, 0 if equal, or 1 if greater
   */
  const lex = (a: media|group, b: media|group): number => {
    let aTag: tag|undefined = findTag(a, props.sort);
    let bTag: tag|undefined = findTag(b, props.sort)

    let aSorter: string = (
      (aTag === undefined)
        ? "~~~~~~~~"
        : rmPrefix((aTag as tag).value.toLowerCase()))

    let bSorter: string = (
      (bTag === undefined)
        ? "~~~~~~~~"
        : rmPrefix((bTag as tag).value.toLowerCase())
    );

    return (
      (aSorter > bSorter)
        ? 1
        : (aSorter < bSorter)
          ? -1
          : 0
    )
  }

  /** Returns whether or not an object is accepted by the current filter state.
   * Designed for use with .filter().
   * For a filter to pass, every tag in it must match a tag in the item in question.
   * Only one filter in stateful filters must pass to return true.
   *
   * @param {media|group} item the object in question
   * 
   * @returns {boolean} whether or not an object is accepted by the current filter state
   */
  const applyFilters = (item: media|group): boolean => {
    let filterNum: number = props.filters.length;
    if (filterNum === 0) return true;
    for (let _i = 0; _i < props.filters.length; _i++) {
      let filter: filter = props.filters[_i];
      let trueFilter = true;
      for (let _j = 0; _j < filter.tags.length; _j++) {
        let filterTag: tag = filter.tags[_j];
        let itemTag: tag | undefined = findTag(item, filterTag.key);
        if (itemTag === undefined) {
          return false;
        } else {
          if (!(itemTag as tag).value.toLowerCase().includes(filterTag.value.toLowerCase())) {
            trueFilter = false;
          }
        }
      }
      if (trueFilter) {
        return true;
      }
    }
    return false;
  }

  /** Returns whether or not an object is accepted by the current search state.
   * Designed for use with .filter().
   * The searched string should be compared with the value of every tag in the object in question
   * 
   * @param {media|group} item the object in question
   * 
   * @returns {boolean} whether or not an object is accepted by the current search state
   */
  const applySearch = (item: media|group): boolean => {
    for (let _i = 0; _i < item.tags.length; _i++) {
      let tag: tag = item.tags[_i];
      if (tag.value.toLowerCase().includes(props.search.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  /** Uses stateful measurements and the total number of covers to determine how many pseudo covers
   * are neccessary to align the bottom row, and returns a list of them.
   * 
   * @param {number} totalCovers the total number of covers in the filtered library
   * 
   * @returns {Array<pseudo>} the array of pseudo covers neccessary to align the bottom row
   */
  const getPseudo = (totalCovers: number): Array<pseudo> => {
    const numRowCovers: number = Math.floor(libraryWidth / (props.coverWidth + 20)); // 10px margin on both sides = 20px
    let lastRowCovers: number = totalCovers % numRowCovers;
    if (lastRowCovers === 0) lastRowCovers = numRowCovers;
    const numPseudoCovers: number = numRowCovers - lastRowCovers;
    return new Array<pseudo>(numPseudoCovers).fill({
      type: "pseudo"
    });
  }

  /** Obtains the filtered, sorted, and aligned library using lex, applyFilters, applySearch, and
   * getPseudo on the stateful library.
   * 
   * @returns {Array<media|group|pseudo>} the filtered, sorted, and aligned list of covers
   */
  const getFilteredLibrary = (): Array<media|group|pseudo> => {
    let noPseudo: Array<media|group|pseudo> = (
      props.library.library
        .filter(applyFilters)     // filter out filters state
        .filter(applySearch)      // filter out search state
        .sort(lex)                // sort alphabetically
    )
    return noPseudo.concat(getPseudo(noPseudo.length));
  }

  const windowResizeHandler = (): void => {
    setLibraryWidth((libraryContainer.current as HTMLUListElement).clientWidth)
  }

  useEffect((): void => {
    windowResizeHandler();
  }, [libraryWidth]);

  useEffect((): void => {
    window.addEventListener("resize", windowResizeHandler);
  }, []);

  return (
    <div id="library">
      
    </div>
  )
}

export default Media;
