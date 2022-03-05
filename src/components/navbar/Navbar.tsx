import { useState } from 'react'

import { library, category } from '../../ts/types'

import '../../css/Navbar.css'
import { ICONS } from '../../img';

const Navbar = (props: {onLibraryChange: (library: library) => void}) => {

  const [categories, setCategories] = useState<category[]>([        // completion requires rust backend
    {
      name: 'Movies',
      path: '#'
    },
    {
      name: 'TV',
      path: '#'
    },
    {
      name: 'Documentaries',
      path: '#'
    },
    {
      name: 'Music',
      path: '#'
    }
  ]);

  const categoryChangeHandler = (categories: category[]): void => {
    setCategories(categories);
  }

  return (
    <header>
      <img
        src={ICONS.logo}
        alt='Waverunner'
        id='logo'
      />
      <ul id='navbar'>
        {categories.map(index => 
          <li
            className='navbarListItem'
            key={index.name}
          >
            <button className='navbarListButton'>
              <span className='linkText'>
                {index.name}
              </span>
            </button>
          </li>
        )}
      </ul>
      <div id='empty' />
    </header>
  )
}

export default Navbar;
