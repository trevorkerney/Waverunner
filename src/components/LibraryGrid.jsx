import { useState } from 'react'

import '../scss/css/LibraryGrid.css'

const LibraryGrid = () => {

  const [library, setLibrary] = useState({
    name: "Movies",
    full_path: "E:/~ the sanctum ~/Media/Movies/",
    movie_filename: "movie",
    cover_path: "/~covers",
    cover_filenames: [
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
        path: "0001"
      },
      {
        name: "The Wolf of Wall Street",
        path: "0002"
      },
      {
        name: "The Dark Knight",
        path: "0003"
      },
      {
        name: "Goodfellas",
        path: "0004"
      },
      {
        name: "Nation Lampoon's Christmas Vacation",
        path: "0005"
      },
      {
        name: "The Spongebob Squarepants Movie",
        path: "0006"
      },
      {
        name: "The Shawshank Redemption",
        path: "0007"
      },
      {
        name: "WALL-E",
        path: "0008"
      }
    ]
  });

  return (
    <div id="library">
      <ul id="libraryList">
        {library.list.map(index => 
          <li id="libraryListItem">
            <p>
              {index.name}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default LibraryGrid;
