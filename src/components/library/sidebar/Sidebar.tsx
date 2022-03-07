import { useState } from 'react'
import { ICONS } from '../../../img'
import { filter } from '../../../ts/types'

import '../../../css/Sidebar.css'

const Sidebar = (props: {onSidebarChange: () => void, isSidebarOpen: boolean, onFilterChange: (filters: filter[]) => void}) => {

  const [allFilters, setAllFilters] = useState<filter[]>([        // completion requires rust backend
    {
      name: "Action",
      tags: [
        {
          key: "Genre",
          value: "Action"
        }
      ]
    },
    {
      name: "Scorsese",
      tags: [
        {
          key: "Director",
          value: "Martin Scorsese"
        }
      ]
    },
    {
      name: "Hairy movies",
      tags: [
        {
          key: "Title",
          value: "Harry"
        }
      ]
    }
  ]);
  const filtersChangeHandler = (filters: filter[]): void => {
    setAllFilters(filters);
  }

  return (
    <nav 
      id="sidebar" 
      style={props.isSidebarOpen ? {
        width: "10rem"
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
