import { useState } from 'react'

import Navbar from "./components/navbar/Navbar"
import Library from "./components/library/Library"

import { library } from './ts/types'

import { COVERS } from './img'

import './css/Waverunner.css';

const Waverunner = () => {

  const [currentLibrary, setCurrentLibrary] = useState<library>({     // completion requires rust backend
    name: "Movies",
    full_path: "E:/~ the sanctum ~/Media/Movies/",
    media_filename: "movie",
    media_filename_exts: [
      "mkv",
      "mp4",
    ],
    keys: [
      "Title",
      "Year",
      "Director",
      "Genre"
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
    default_view: "covers",
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
          },
          {
            key: 'Director',
            value: 'Martin Scorsese'
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
          },
          {
            key: "Genre",
            value: "Action",
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
          },
          {
            key: 'Director',
            value: 'Martin Scorsese'
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
            value: "National Lampoon's Christmas Vacation",
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
          },
          {
            key: "Genre",
            value: "Action",
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

  const libraryChangeHandler = (library: library) => {
    setCurrentLibrary(library);
  }

  return (
    <>
      <Navbar
        onLibraryChange={libraryChangeHandler}
      />
      <Library
        library={currentLibrary}
      />
    </>
  )
}

export default Waverunner;
