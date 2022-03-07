import { useState, useEffect, useRef } from 'react'

import { tag, findTag, filter, media, group, pseudo, library } from '../../../ts/types'

import Cover from './cover/Cover'

import '../../../css/Media.css'

const Media = (props: { library: library, filters: filter[], search: string, sort: string, coverWidth: number }) => {

  const libraryContainer = useRef<any>();

  const [libraryWidth, setLibraryWidth] = useState<number>(1904);

  /** Coverts rem to pixels
   * 
   * @param {number} rem Number of rem units to convert to pixels
   * 
   * @returns {number}
   */
  const remToPx = (rem: number): number => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  /** Removes 'the ', 'an ', or 'a' from the beginning of a string.
   * 
   * @param {string} name: The string to check and potentially remove a prefix from
   * 
   * @returns {string} The same string, but with 'the ', 'an ', 'a ' removed from the beginning.
   */
  const rmPrefix = (name: string): string => {
    if (name.startsWith('the ')) {
      return name.slice(4);
    }
    if (name.startsWith('an ')) {
      return name.slice(3);
    }
    if (name.startsWith('a ')) {
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
        ? '~~~~~~~~'
        : rmPrefix(aTag!.value.toLowerCase()))

    let bSorter: string = (
      (bTag === undefined)
        ? '~~~~~~~~'
        : rmPrefix(bTag!.value.toLowerCase())
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
          if (!itemTag!.value.toLowerCase().includes(filterTag.value.toLowerCase())) {
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
    console.log(`librarywidth: ${libraryWidth}`)
    const numRowCovers: number = Math.floor(libraryWidth / (props.coverWidth + remToPx(1))); // .5rem margin on both sides = 1rem
    console.log(`numrowcovers: ${numRowCovers}`);
    let lastRowCovers: number = totalCovers % numRowCovers;
    if (lastRowCovers === 0) lastRowCovers = numRowCovers;
    console.log(`lastrowcovers: ${lastRowCovers}`);
    const numPseudoCovers: number = numRowCovers - lastRowCovers;
    console.log(`numpseudocovers: ${numPseudoCovers}`);
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
    console.log("RESIZE");
  }, [libraryWidth]);

  useEffect((): void => {
    window.addEventListener("resize", windowResizeHandler);
  }, []);

  return (
    <ol
      id='mediaBox'
      ref={libraryContainer}
    >
      {
        getFilteredLibrary().map((index: media|group|pseudo) => {
          return (
            <Cover
              index={index}
              coverWidth={props.coverWidth}
            />
          )
        })
      }
    </ol>
  )
}

export default Media;