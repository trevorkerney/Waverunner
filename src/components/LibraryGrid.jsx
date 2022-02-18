import { useState } from 'react'

import '../scss/css/LibraryGrid.css'

import {
  pulp,
  wolf,
  knight,
  fellas,
  lampoon,
  sponge,
  shank,
  walle,
  blood,
  potter,
  stone,
  secrets,
  prisoner,
  goblet,
  phoenix,
  prince,
  deathly,
  hallows
} from '../img'

const LibraryGrid = () => {

  const [library, setLibrary] = useState({
    name: "Movies",
    full_path: "E:/~ the sanctum ~/Media/Movies/",
    movie_filename: "movie",
    movie_filename_exts: [
      "mkv",
      "mp4",
    ],
    cover_path: "/~covers",
    cover_path_exts: [
      "jpg",
      "jpeg",
      "png"
    ],
    cover_tags: [
      {
        name: "fullres",
        tag: "fullres"
      },
      {
        name: "textless",
        tag: "textless"
      },
      {
        name: "alternate",
        tag: "alt[1-9]"
      }
    ],
    list: [
      {
        name: "Pulp Fiction",
        type: "media",
        path: "0001",
        temp_img_path: pulp
      },
      {
        name: "The Wolf of Wall Street",
        type: "media",
        path: "0002",
        temp_img_path: wolf
      },
      {
        name: "The Dark Knight",
        type: "media",
        path: "0003",
        temp_img_path: knight
      },
      {
        name: "Goodfellas",
        type: "media",
        path: "0004",
        temp_img_path: fellas
      },
      {
        name: "Nation Lampoon's Christmas Vacation",
        type: "media",
        path: "0005",
        temp_img_path: lampoon
      },
      {
        name: "The Spongebob Squarepants Movie",
        type: "media",
        path: "0006",
        temp_img_path: sponge
      },
      {
        name: "The Shawshank Redemption",
        type: "media",
        path: "0007",
        temp_img_path: shank
      },
      {
        name: "WALL-E",
        type: "media",
        path: "0008",
        temp_img_path: walle
      },
      {
        name: "First Blood",
        type: "media",
        path: "0009",
        temp_img_path: blood
      },
      {
        name: "Harry Potter",
        type: "group",
        path: "0010",
        temp_img_path: potter,
        media: [
          {
            name: "Harry Potter and the Sorcerer's Stone",
            type: "media",
            path: "0001",
            temp_img_path: stone
          },
          {
            name: "Harry Potter and the Chamber of Secrets",
            type: "media",
            path: "0002",
            temp_img_path: secrets
          },
          {
            name: "Harry Potter and the Prisoner of Azkaban",
            type: "media",
            path: "0003",
            temp_img_path: prisoner
          },
          {
            name: "Harry Potter and the Goblet of Fire",
            type: "media",
            path: "0004",
            temp_img_path: goblet
          },
          {
            name: "Harry Potter and the Order of the Phoenix",
            type: "media",
            path: "0005",
            temp_img_path: phoenix
          },
          {
            name: "Harry Potter and the Half-Blood Prince",
            type: "media",
            path: "0006",
            temp_img_path: prince
          },
          {
            name: "Harry Potter and the Deathly Hallows Part 1",
            type: "media",
            path: "0007",
            temp_img_path: deathly
          },
          {
            name: "Harry Potter and the Deathly Hallows Part 2",
            type: "media",
            path: "0008",
            temp_img_path: hallows
          }
        ]
      }
    ]
  });



  return (
    <div id="library">
      <ul id="libraryList">
        {library.list
          .concat(library.list[9].media)
          .sort( (a,b) => (
            (a.name > b.name) 
              ? 1
              : ((a.name < b.name)
                ? -1
                : 0
            )
          ))
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
