import { dialog, invoke } from '@tauri-apps/api'
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

  const getPath = async () => {
    const path = await dialog.open({directory: true});
    invoke('import_from_path', {path: path});
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
        <li
          className='navbarListItem'
          key='add'
        >
          <button 
            className='navbarListButton'
            onClick={getPath}
          >
            <span className='linkText'>
              +
            </span>
          </button>
        </li>
      </ul>
      <div id='empty' />
    </header>
  )
}

export default Navbar;
