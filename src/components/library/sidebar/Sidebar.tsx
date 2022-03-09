import { useState } from 'react'
import { ICONS } from '../../../img'
import { filter, defaultFilter } from '../../../ts/types'

import '../../../css/Sidebar.css'

const Sidebar = (props: { onSidebarChange: () => void, isSidebarOpen: boolean, onFilterChange: (filter: filter) => void }) => {

  const [allFilters, setAllFilters] = useState<filter[]>([        // completion requires rust backend
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
  const filtersChangeHandler = (filters: filter[]): void => {
    setAllFilters(filters);
  }

  return (
    <nav 
      id="sidebar" 
      style={props.isSidebarOpen ? {
        width: "12rem"
      } : {
        width: "1rem"
      }}
    >
      <div 
        id="sidebarViews" 
        style={props.isSidebarOpen ? {
          display: "block"
        } : {
          display: "none"
        }}
      >
        <ol id='filterList'>
          <li className='filter' key='default'>
            <button
              className='filterButton'
              onClick={() => {props.onFilterChange(defaultFilter)}}
            >
              <p className='filterText'>All</p>
            </button>
          </li>
          {
            allFilters.map((filter) => {
              return (
                <li className='filter' key={filter.name}>
                  <button
                    className='filterButton'
                    onClick={() => {props.onFilterChange(filter)}}
                  >
                    <p className='filterText'>{filter.name}</p>
                  </button>
                </li>
              )
            })
          }
        </ol>
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
    </nav>
  )
}

export default Sidebar;
