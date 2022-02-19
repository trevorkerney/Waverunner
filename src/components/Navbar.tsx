import { useState } from 'react'

import {category} from './Types'

import '../scss/css/Navbar.css'

const Navbar = () => {

  const [categories, setCategories] = useState<category[]>([
    {
      name: "Movies",
      path: "#"
    },
    {
      name: "TV",
      path: "#"
    },
    {
      name: "Documentaries",
      path: "#"
    },
    {
      name: "Music",
      path: "#"
    }
  ]);

  return (
    <header>
      <nav id="navbar">
        <ul id="navbarList">
          {categories.map(index => 
            <li className="navbarListItem">
              <button className="navbarListButton">
                <span className="linkText">
                  {index.name}
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
