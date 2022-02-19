import { useState } from 'react'

import {filter, media, group, library} from './Types'
import Viewbar from './Viewbar'

import '../scss/css/LibraryGrid.css'

import COVERS from '../img'

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
        name: "Fullres",
        tag: "fullres"
      },
      {
        name: "Textless",
        tag: "textless"
      },
      {
        name: "Alternate",
        tag: "alt[1-9]"
      }
    ],
    cover_path_exts: [
      "jpg",
      "jpeg",
      "png"
    ],
    library: [
      {
        name: "Pulp Fiction",
        path: "0001",
        temp_img_path: COVERS.pulp
      },
      {
        name: "The Wolf of Wall Street",
        path: "0002",
        temp_img_path: COVERS.wolf
      },
      {
        name: "The Dark Knight",
        path: "0003",
        temp_img_path: COVERS.knight
      },
      {
        name: "Goodfellas",
        path: "0004",
        temp_img_path: COVERS.fellas
      },
      {
        name: "Nation Lampoon's Christmas Vacation",
        path: "0005",
        temp_img_path: COVERS.lampoon
      },
      {
        name: "The Spongebob Squarepants Movie",
        path: "0006",
        temp_img_path: COVERS.sponge
      },
      {
        name: "The Shawshank Redemption",
        path: "0007",
        temp_img_path: COVERS.shank
      },
      {
        name: "WALL-E",
        path: "0008",
        temp_img_path: COVERS.walle
      },
      {
        name: "First Blood",
        path: "0009",
        temp_img_path: COVERS.blood
      },
      {
        name: "Harry Potter",
        path: "0010",
        temp_img_path: COVERS.potter,
        media: [
          {
            name: "Harry Potter and the Sorcerer's Stone",
            path: "0001",
            temp_img_path: COVERS.stone
          },
          {
            name: "Harry Potter and the Chamber of Secrets",
            path: "0002",
            temp_img_path: COVERS.secrets
          },
          {
            name: "Harry Potter and the Prisoner of Azkaban",
            path: "0003",
            temp_img_path: COVERS.prisoner
          },
          {
            name: "Harry Potter and the Goblet of Fire",
            path: "0004",
            temp_img_path: COVERS.goblet
          },
          {
            name: "Harry Potter and the Order of the Phoenix",
            path: "0005",
            temp_img_path: COVERS.phoenix
          },
          {
            name: "Harry Potter and the Half-Blood Prince",
            path: "0006",
            temp_img_path: COVERS.prince
          },
          {
            name: "Harry Potter and the Deathly Hallows Part 1",
            path: "0007",
            temp_img_path: COVERS.deathly
          },
          {
            name: "Harry Potter and the Deathly Hallows Part 2",
            path: "0008",
            temp_img_path: COVERS.hallows
          }
        ]
      }
    ]
  });
  const [currentFilter, setCurrentFilter] = useState<filter>({
    name: "Scorsese",
    title: "",
    year: "",
    artist: "",
    album: "",
    director: "",
    composer: "",
    genre: "Action",
    tags: []
  });

  const sortByName = (a: media | group, b: media | group) => {
    console.log(a);
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  return (
    <div id="library">
      <Viewbar />
      <ul id="libraryList">
        {currentLibrary.library
          .concat((currentLibrary.library[9] as group).media) // hard code to include harry potter series
          .sort(sortByName)
          .map(index =>
          <li className="libraryListItem">
            <ul className="itemContents">
              <img 
                className="itemCover" 
                src={index.temp_img_path} 
                alt={index.name} />
              <p className="itemTitle">
                {index.name}
              </p>
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}

export default LibraryGrid;
