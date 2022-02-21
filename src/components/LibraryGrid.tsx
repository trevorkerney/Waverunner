import { useState } from 'react'

import {tag, filter, media, group, library} from './Types'
import Viewbar from './Viewbar'

import '../scss/css/LibraryGrid.css'

import {COVERS} from '../img'

const LibraryGrid = () => {

  const [currentLibrary, setCurrentLibrary] = useState<library>({
    name: "Movies",
    full_path: "E:/~ the sanctum ~/Media/Movies/",
    media_filename: "movie",
    media_filename_exts: [
      "mkv",
      "mp4",
    ],
    cover_path: "/~covers",
    cover_tags: [
      {
        key: "Fullres",
        value: "fullres"
      },
      {
        key: "Textless",
        value: "textless"
      },
      {
        key: "Alternate",
        value: "alt[1-9]"
      }
    ],
    cover_path_exts: [
      "jpg",
      "jpeg",
      "png"
    ],
    library: [
      {
        type: "media",
        path: "0001",
        temp_img_path: COVERS.pulp,
        tags: [
          {
            key: "Title",
            value: "Pulp Fiction",
          }
        ],
      },
      {
        type: "media",
        path: "0002",
        temp_img_path: COVERS.wolf,
        tags: [
          {
            key: "Title",
            value: "The Wolf of Wall Street",
          }
        ],
      },
      {
        type: "media",
        path: "0003",
        temp_img_path: COVERS.knight,
        tags: [
          {
            key: "Title",
            value: "The Dark Knight",
          }
        ],
      },
      {
        type: "media",
        path: "0004",
        temp_img_path: COVERS.fellas,
        tags: [
          {
            key: "Title",
            value: "Goodfellas",
          }
        ],
      },
      {
        type: "media",
        path: "0005",
        temp_img_path: COVERS.lampoon,
        tags: [
          {
            key: "Title",
            value: "Nation Lampoon's Christmas Vacation",
          }
        ],
      },
      {
        type: "media",
        path: "0006",
        temp_img_path: COVERS.sponge,
        tags: [
          {
            key: "Title",
            value: "The Spongebob Squarepants Movie",
          }
        ],
      },
      {
        type: "media",
        path: "0007",
        temp_img_path: COVERS.shank,
        tags: [
          {
            key: "Title",
            value: "The Shawshank Redemption",
          }
        ],
      },
      {
        type: "media",
        path: "0008",
        temp_img_path: COVERS.walle,
        tags: [
          {
            key: "Title",
            value: "WALL-E",
          }
        ],
      },
      {
        type: "media",
        path: "0009",
        temp_img_path: COVERS.blood,
        tags: [
          {
            key: "Title",
            value: "First Blood",
          }
        ],
      },
      {
        type: "group",
        path: "0010",
        temp_img_path: COVERS.potter,
        tags: [
          {
            key: "Title",
            value: "Harry Potter",
          }
        ],
        media: [
          {
            type: "media",
            path: "0001",
            temp_img_path: COVERS.stone,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Sorcerer's Stone",
              }
            ],
          },
          {
            type: "media",
            path: "0002",
            temp_img_path: COVERS.secrets,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Chamber of Secrets",
              }
            ],
          },
          {
            type: "media",
            path: "0003",
            temp_img_path: COVERS.prisoner,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Prisoner of Azkaban",
              }
            ],
          },
          {
            type: "media",
            path: "0004",
            temp_img_path: COVERS.goblet,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Goblet of Fire",
              }
            ],
          },
          {
            type: "media",
            path: "0005",
            temp_img_path: COVERS.phoenix,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Order of the Phoenix",
              }
            ],
          },
          {
            type: "media",
            path: "0006",
            temp_img_path: COVERS.prince,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Half-Blood Prince",
              }
            ],
          },
          {
            type: "media",
            path: "0007",
            temp_img_path: COVERS.deathly,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Deathly Hallows Part 1",
              }
            ],
          },
          {
            type: "media",
            path: "0008",
            temp_img_path: COVERS.hallows,
            tags: [
              {
                key: "Title",
                value: "Harry Potter and the Deathly Hallows Part 2",
              }
            ],
          }
        ]
      }
    ]
  });
  const [currentFilters, setCurrentFilter] = useState<filter[]>([/*
    {
      name: "Harry Potter Movies",
      tags: [
        {
          key: "Title",
          value: "Harry"
        },
        {
          key: "Title",
          value: "Deathly"
        },
        {
          key: "hahahaaa",
          value: "bwahahahah"
        }
      ]
    }
  */]);
  const [sortBy, setSortBy] = useState<string>(
    "Title"
  );
  const [coverWidth, setCoverWidth] = useState<string>('300');

  const lex = (a: media | group, b: media | group) => {
    let aSorter: string;
    let bSorter: string;

    let aTag: tag | undefined = a.tags.find((pair: tag) => (
      pair.key === sortBy
    ));
    let bTag: tag | undefined = b.tags.find((pair: tag) => (
      pair.key === sortBy
    ));

    if (aTag === undefined) {
      aSorter = "~~~~~~~~";
    } else {
      aSorter = (aTag as tag).value.toLowerCase();
    }
    
    if (bTag === undefined) {
      bSorter = "~~~~~~~~";
    } else {
      bSorter = (bTag as tag).value.toLowerCase();
    }

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

  const findTag = (item: media | group, key: string) =>  {
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
    for (let _i = 0; _i < currentFilters.length; _i++) {

      let filter: filter = currentFilters[_i];
      for (let _j = 0; _j < filter.tags.length; _j++) {

        let tag: tag = filter.tags[_j];
        let itemTag : tag | undefined = findTag(item, tag.key);
        if (itemTag === undefined) {
          return false;
        } else {
          if (!(itemTag as tag).value.includes(tag.value)) {
            return false;
          } else {
            return true;
          }
        }
      }
    }
    return true;
  }

  const coverWidthHandler = (width: string) => {
    setCoverWidth(width);
  }

  return (
    <div id="library">
      <Viewbar onWidthChange={coverWidthHandler} />
        <ul id="libraryList">
          {currentLibrary.library
            .concat((currentLibrary.library[9] as group).media)                             // hard code to include harry potter series
            .sort(lex)                                                       // sort alphabetically
            .filter(applyFilters)                                                           // filter out currentFilters state
            .filter((index: media | group) => ((index.type === "media") ? true : false))    // filter out groups
            .map(index => (
              <li 
                className="libraryListItem" 
                style={{
                  width: `${coverWidth}px`
                }}
              >
                <ul className="itemContents">
                  <img 
                    className="itemCover" 
                    src={index.temp_img_path}
                  />
                  <p className="itemTitle">
                    {(index.tags.find((pair: tag) => pair.key === "Title"))?.value}
                  </p>
                </ul>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default LibraryGrid;
