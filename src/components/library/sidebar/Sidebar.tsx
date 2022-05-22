import { dialog, invoke } from '@tauri-apps/api'
import { useState } from 'react'

import NewLibrary from './newLibrary/NewLibrary'

import { filter, defaultFilter } from '../../../ts/types'

import { ICONS } from '../../../img'

import '../../../css/Sidebar.css'

const Sidebar = (props: { onSidebarChange: () => void, isSidebarOpen: boolean, onLibraryChange: (library: string) => void, onFilterChange: (filter: filter) => void }) => {

  const [libraries, setLibraries] = useState<string[]>([
    "Films",
    "TV",
    "Documentaries",
    "Music"
  ]);
  const librariesChangeHandler = (libraries: string[]): void => { setLibraries(libraries); }

  const [filters, setFilters] = useState<filter[]>([
    {
      name: "Action",
      logic: '|',
      tags: [
        {
          key: "Genre",
          value: "Action"
        }
      ],
    },
    {
      name: "Scorsese",
      logic: '|',
      tags: [
        {
          key: "Director",
          value: "Martin Scorsese"
        }
      ],
    },
    {
      name: "Hairy movies",
      logic: '|',
      tags: [
        {
          key: "Title",
          value: "Harry"
        }
      ],
    }
  ]);
  const filtersChangeHandler = (filters: filter[]): void => { setFilters(filters); }

  const [isNewLibOpen, setIsNewLibOpen] = useState<boolean>(false);
  const [isNewFilterOpen, setIsNewFilterOpen] = useState<boolean>(false);

  return (
    <nav 
      id="sidebar"
      style={props.isSidebarOpen ? {
        width: "12rem"
      } : {
        width: "3rem"
      }}
    >
      <div id="logo-box">
        <img
          data-tauri-drag-region
          src={ICONS.logo}
          alt='Waverunner'
          id='logo'
        />
      </div>
      <div id="sidebar-box">
        <div 
          id="views" 
          style={props.isSidebarOpen ? {
            display: "block"
          } : {
            display: "none"
          }}
        >
          <ol id="categories">
          {
            libraries.map((library) => {
              return (
                <li className='filter' key={library}>
                  <button
                    className='sidebarButton'
                    onClick={() => {
                      
                    }}
                  >
                    <p className='filterText'>{library}</p>
                  </button>
                </li>
              )
            })
          }
            <li key="new">
              <button
                className='sidebarButton'
                onClick={() => {
                  setIsNewFilterOpen(false);
                  setIsNewLibOpen(true);
                }}
              >
                <img
                  src={ICONS.plus}
                  alt="plus"
                  id="newCategoryLogo"
                />
                <p id="newCategoryText">new library</p>
              </button>
            </li>
          </ol>
          <NewLibrary isNewLibOpen={isNewLibOpen} setIsNewLibOpen={setIsNewLibOpen} />
          <hr id="divider" />
          <ol id='filters'>
            <li className='filter' key='default'>
              <button
                className='sidebarButton'
                onClick={() => {props.onFilterChange(defaultFilter)}}
              >
                <p className='filterText'><span id="bold">All</span></p>
              </button>
            </li>
            {
              filters.map((filter) => {
                return (
                  <li className='filter' key={filter.name}>
                    <button
                      className='sidebarButton'
                      onClick={() => {props.onFilterChange(filter)}}
                    >
                      <p className='filterText'>{filter.name}</p>
                    </button>
                  </li>
                )
              })
            }
            <li key="new">
              <button
                className='sidebarButton'
                onClick={() => {}}
              >
                <img
                  src={ICONS.plus}
                  alt="plus"
                  id="newCategoryLogo"
                />
                <p id="newCategoryText">new filter</p>
              </button>
            </li>
          </ol>
          <div id="newFilterBox">

          </div>
        </div>
        <div id="sidebarHandleBox">
          <button 
            id="sidebarHandleButton" 
            onClick={props.onSidebarChange} 
          >
            <img 
              id="sidebarHandleIcon" 
              alt="sidebar handle"
              src={ICONS.sidebarHandleIcon}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar;
