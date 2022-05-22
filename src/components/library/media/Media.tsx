import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Viewbar from './viewbar/Viewbar'
import Cover from './cover/Cover'

import { tag, bundle, valAsTag, findTag, filter, media, group, direct } from '../../../ts/types'

import '../../../css/Media.css'

const Media = (props: { library: (media|group)[], filter: filter }) => {

  const { path } = useParams();
  const dir: number[] = (
    (path)
    ? path.split('-').map(index => parseInt(index) - 1)
    : []
  )
  const library: (media|group)[] = direct(props.library, dir);

  const [currentSearch, setCurrentSearch] = useState<string>('');
  const searchInputHandler = (search: string): void => { setCurrentSearch(search); }

  const [coverWidth, setCoverWidth] = useState<number>(12.5);
  const coverWidthHandler = (width: string): void => { setCoverWidth(parseInt(width)); }

  const [sortBy, setSortBy] = useState<string>('Title');
  const sortChangeHandler = (sort: string): void => { setSortBy(sort); }

  /** Takes two objects and returns how the first object lexicographically compares to the second.
   *
   * @param {media|group} a an object
   * @param {media|group} b another object
   * 
   * @returns {number} -1 if lesser, 0 if equal, or 1 if greater
   */
  const lex = (a: media|group, b: media|group): number => {

    /** Removes 'the ', 'an ', or 'a' from the beginning of a string.
     * 
     * @param {string} name: The string to check and potentially remove a prefix from
     * 
     * @returns {string} The same string, but with 'the ', 'an ', 'a ' removed from the beginning.
     */
    const rmPrefix = (name: string): string => {
      const lower = name.toLowerCase();
      if (lower.startsWith('the ')) {
        return name.slice(4);
      }
      if (lower.startsWith('an ')) {
        return name.slice(3);
      }
      if (lower.startsWith('a ')) {
        return name.slice(2);
      }
      return name;
    }

    const aTag: tag|bundle|undefined = findTag(a, sortBy);
    const bTag: tag|bundle|undefined = findTag(b, sortBy);

    const aSorter: string = (
      (aTag === undefined)
        ? '~~~~~~~~'
        : rmPrefix(valAsTag(aTag)).toLowerCase()
    );

    const bSorter: string = (
      (bTag === undefined)
        ? '~~~~~~~~'
        : rmPrefix(valAsTag(bTag)).toLowerCase()
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
   * Only one filter must pass to return true.
   *
   * @param {media|group} item the object in question
   * 
   * @returns {boolean} whether or not an object is accepted by the current filter state
   */
  const applyFilters = (item: media|group): boolean => {
    const tags: tag[] = props.filter.tags;
    if (tags.length === 0) return true;
    
    if (props.filter.logic === '&') {
      for (let _i = 0; _i < tags.length; _i++) {
        const filterTag: tag = tags[_i];
        const itemTag: tag|bundle|undefined = findTag(item, tags[_i].key);
        if (!itemTag) return false;
        if (!(valAsTag(itemTag).toLowerCase().includes(filterTag.value.toLowerCase()))) {
          return false;
        }
      }
      return true;
    } else {
      for (let _i = 0; _i < tags.length; _i++) {
        const filterTag: tag = tags[_i];
        const itemTag: tag|bundle|undefined = findTag(item, tags[_i].key);
        if (itemTag) {
          if (valAsTag(itemTag).toLowerCase().includes(filterTag.value.toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    }
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
    if (currentSearch.length > 0) {
      for (let _i = 0; _i < item.tags.length; _i++) {
        const tag: tag|bundle = item.tags[_i];
        if (valAsTag(tag).toLowerCase().includes(currentSearch.toLowerCase())) {
          return true;
        }
      }
      return false;
    }
    return true;
  }

  /** Obtains the filtered, sorted, and aligned library using lex, applyFilters, and applySearch
   * on the stateful library.
   * 
   * @returns {Array<media|group>} the filtered, sorted, and aligned list of covers
   */
  const getFilteredLibrary = (): Array<media|group> => {
    return (
      (dir.length === 0)
      ? library
        .filter(applyFilters)     // filter out filters state
        .filter(applySearch)      // filter out search state
        .sort(lex)                // sort alphabetically
      : library
        .filter(applySearch)      // filter out search state
    );
  }

  return (
    <>
      <Viewbar
        coverWidth={coverWidth}
        onWidthChange={coverWidthHandler} 
        onSortChange={sortChangeHandler}
        onInputSearch={searchInputHandler} 
      />
      <ol id='mediaBox'>
        {
          getFilteredLibrary().map((index: media|group) => {
            return (
              <Cover
                index={index}
                coverWidth={coverWidth}
              />
            )
          })
        }
      </ol>
    </>
  )
}

export default Media;