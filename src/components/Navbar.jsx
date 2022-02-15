import { useState } from 'react'

import '../scss/css/Navbar.css'

const Navbar = () => {

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
      <nav id="navbar">
        <ul id="navbarList">
          {libraries.map(paragraph => 
            <li className="navbarListItem">
              <button className="navbarListButton">
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

export default Navbar;
