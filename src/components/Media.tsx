import {tag, filter, media, group, library} from './Types'

import '../scss/css/Media.css'

const Media = (props: {library: library, filters: filter[], search: string, sort: string, coverWidth: string}) => {

  
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

  const lex = (a: media | group, b: media | group) => {
    let aSorter: string;
    let bSorter: string;

    let aTag: tag | undefined = a.tags.find((pair: tag) => (
      pair.key === props.sort
    ));
    let bTag: tag | undefined = b.tags.find((pair: tag) => (
      pair.key === props.sort
    ));

    if (aTag === undefined) {
      aSorter = "~~~~~~~~";
    } else {
      aSorter = rmPrefix((aTag as tag).value.toLowerCase());
    }
    
    if (bTag === undefined) {
      bSorter = "~~~~~~~~";
    } else {
      bSorter = rmPrefix((bTag as tag).value.toLowerCase());
    }

    console.log(aSorter);
    console.log(bSorter);

    if (aSorter > bSorter) {
      return 1;
    } else {
      if (aSorter < bSorter) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  const findTag = (item: media | group, key: string) => {
    let tags: tag[] = item.tags;
    for (let _i = 0; _i < tags.length; _i++) {
      let tag: tag = tags[_i];
      if (tag.key.toLowerCase() === key.toLowerCase()) {
        return tag;
      }
    }
    return undefined;
  }

  const applyFilters = (item: media | group) => {
    let filterNum: number = props.filters.length;
    if (filterNum === 0) return true;
    for (let _i = 0; _i < props.filters.length; _i++) {

      let filter: filter = props.filters[_i];
      let trueFilter = true;
      for (let _j = 0; _j < filter.tags.length; _j++) {

        let filterTag: tag = filter.tags[_j];
        let itemTag : tag | undefined = findTag(item, filterTag.key);
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

  const applySearch = (item: media | group) => {
    for (let _i = 0; _i < item.tags.length; _i++) {
      let tag: tag = item.tags[_i];
      if (tag.value.toLowerCase().includes(props.search.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  return (
    <div id="library">
        <ul id="libraryList">
          {props.library.library
            .concat((props.library.library[9] as group).media)                             // hard code to include harry potter series
            .filter((index: media | group) => ((index.type === "media") ? true : false))    // filter out groups

            .filter(applyFilters)                                                           // filter out currentFilters state
            .filter(applySearch)                                                            // filter out currentSearch state

            .sort(lex)                                                                      // sort alphabetically

            .map(index => (
              <li 
                className="libraryListItem" 
                style={{
                  width: `${props.coverWidth}px`
                }}
              >
                <button id="itemButton">
                  <ul className="itemContents">
                    <img 
                      className="itemCover" 
                      src={index.temp_img_path} 
                      alt={
                        (findTag(index, "Title") === undefined)
                        ? "Title"
                        : (findTag(index, "Title") as tag).value
                      }
                    />
                    <p className="itemTitle">
                      {(index.tags.find((pair: tag) => pair.key === "Title"))?.value}
                    </p>
                  </ul>
                </button>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Media;
