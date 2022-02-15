import { useState } from 'react'

import '../css/LibraryMenu.css'

const LibraryMenu = () => {

  const [libraries, setLibraries] = useState([
    {
      "name": "Movies",
      "target": "#"
    },
    {
      "name": "TV",
      "target": "#"
    },
    {
      "name": "Music",
      "target": "#"
    }
  ]);

  return (
    <header>
      <div id="logoBox">
        <h1 id="logo">W</h1>
      </div>
      <nav id="libraryMenu">
        <ul id="libraryMenuList">
          {libraries.map(paragraph => 
            <li className="libraryMenuListItem">
              <button className="libraryMenuListButton">
                <span className="linkText">
                  {paragraph.name}
                </span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default LibraryMenu;
