import { LibraryLocation } from '../../ts/types';

import './Sidebar.css'

const lls: LibraryLocation[] = [
  {
    name: 'Films',
    path: 'pathtofilms',
    type: 'movie'
  },
  {
    name: 'Television',
    path: 'pathtotv',
    type: 'tv'
  }
]

const ffs: LibraryLocation[] = [
  {
    name: 'Comedy',
    path: 'pathtofilms',
    type: 'movie'
  },
  {
    name: 'Scorsese',
    path: 'pathtotv',
    type: 'tv'
  }
]

const Sidebar = (props: {
  isSidebarOpen: boolean,
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  libLocations: LibraryLocation[]
}) => {
  return (
    <nav
      id='sidebar'
      style={
        (!props.isSidebarOpen)
        ? { width: '3rem' }
        : { width: '15rem' }
      }
    >
      <div id='logo-box'>
        <img src='/icons/logo256.png' alt='Waverunner' />
      </div>

      <div id='sb-bottom'>
        
        <div
          id='sb-cont'
          style={
            (props.isSidebarOpen)
            ? { display: 'block' }
            : { display: 'none' }
          }
        >
          <ul>
            {
              lls.map(loc => {
                return (
                  <li key={loc.path}>
                    <button>
                      <p>{loc.name}</p>
                    </button>
                  </li>
                );
              })
            }
            <li id='new-lib-flt'>
              <button>
                <img src='/icons/circlePlus.png' alt='new library' />
                <p>new library</p>
              </button>
            </li>
          </ul>

          <hr />

          <ul>
            {
              ffs.map(loc => {
                return (
                  <li key={loc.path}>
                    <button>
                      <p>{loc.name}</p>
                    </button>
                  </li>
                );
              })
            }
            <li id='new-lib-flt'>
              <button>
                <img src='/icons/circlePlus.png' alt='new filter' />
                <p>new filter</p>
              </button>
            </li>
          </ul>

        </div>

        <div id='sb-btn-box'>
          <button onClick={() => {props.setIsSidebarOpen(prev => !prev)}}>
            <img src='/icons/handle.png' alt='open/close sidebar' />
          </button>
        </div>

      </div>
    </nav>
  )
};

export default Sidebar;
