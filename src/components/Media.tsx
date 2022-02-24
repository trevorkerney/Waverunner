import { tag, filter, media, group, pseudo, library } from './Types'
import { useState, useEffect, useRef } from 'react'
import '../scss/css/Media.css'

const Media = (props: { library: library, filters: filter[], search: string, sort: string, coverWidth: string }) => {

  const [libraryWidth, setLibraryWidth] = useState<number>(1900);

  const libraryContainer = useRef<any>();

  /*
   * Removes "the ", "an ", or "at" from the beginning of a string
   * 
   * @param string
   * @returns string
   * 
   */
  const rmPrefix = (name: string) => {
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

  /*
   * Searches an object's tags for a given key value
   * 
   * @param media | group
   * @returns tag
   * 
   */
  const findTag = (item: media|group, key: string): tag|undefined => {
    let tags: tag[] = item.tags;
    for (let _i = 0; _i < tags.length; _i++) {
      let tag: tag = tags[_i];
      if (tag.key.toLowerCase() === key.toLowerCase()) {
        return tag;
      }
    }
    return undefined;
  }

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

  const applySearch = (item: media|group): boolean => {
    for (let _i = 0; _i < item.tags.length; _i++) {
      let tag: tag = item.tags[_i];
      if (tag.value.toLowerCase().includes(props.search.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  const getPseudoCovers = (totalCovers: number): Array<pseudo> => {
    const cWidth: number = parseFloat(props.coverWidth) + 20; // 10px margin on both sides make 20px
    const numRowCovers: number = Math.floor(libraryWidth / cWidth);
    let lastRowCovers: number = totalCovers % numRowCovers;
    if (lastRowCovers === 0) lastRowCovers = numRowCovers;
    const numPseudoCovers: number = numRowCovers - lastRowCovers;
    return new Array<pseudo>(numPseudoCovers).fill({
      type: "pseudo"
    });
  }

  const getFilteredLibrary = (): Array<media|group|pseudo> => {
    let noPseudo: Array<media|group|pseudo> = (
      props.library.library
        .filter(applyFilters)     // filter out currentFilters state
        .filter(applySearch)      // filter out currentSearch state
        .sort(lex)                // sort alphabetically
    )
    return noPseudo.concat(getPseudoCovers(noPseudo.length));
  }

  const windowResizeHandler = () => {
    setLibraryWidth((libraryContainer.current as HTMLUListElement).clientWidth)
  }

  useEffect(() => {
    windowResizeHandler();
  }, [libraryWidth]);

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
  }, []);

  return (
    <div id="library">
      <ul 
        id="libraryList"
        ref={libraryContainer}
      >
        {
          getFilteredLibrary().map((index: media|group|pseudo) => (
            <li
              className="libraryListItem"
              style={{
                width: `${props.coverWidth}px`
              }}
            >
              <button id="itemButton">
                {
                  (index.type !== "pseudo")
                    ? (
                      <ul className="itemContents">
                        <img
                          className="itemCover"
                          src={(index as media|group).temp_img_path}
                          alt={
                            (findTag((index as media|group), "Title") === undefined)
                              ? "Title"
                              : (findTag((index as media|group), "Title") as tag).value
                          }
                        />
                        <p className="itemTitle">
                          {((index as media|group).tags.find((pair: tag) => pair.key === "Title"))?.value}
                        </p>
                      </ul>
                    )
                    : (
                      <ul className="itemContents"></ul>
                    )
                }
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Media;
