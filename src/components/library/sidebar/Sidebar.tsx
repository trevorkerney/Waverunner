import { useState } from 'react'
import { ICONS } from '../../../img'
import { filter } from '../../../ts/types'

import '../../../css/Sidebar.css'

const Sidebar = (props: {onFilterChange: (filters: filter[]) => void}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
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

  const sidebarHandler = (): void => {
    setIsSidebarOpen((prevVal) => {return(!prevVal)});
  }

  const filtersChangeHandler = (filters: filter[]): void => {
    setAllFilters(filters);
  }

  return (
    <nav 
      id="sidebar" 
      style={isSidebarOpen ? {
        width: "12rem"
      } : {
        width: "1rem"
      }}
    >
      <div 
        id="sidebarViews" 
        style={isSidebarOpen ? {
          display: "block"
        } : {
          display: "none"
        }}
      >

      </div>
      <div id="sidebarHandleBox">
        <button 
          id="sidebarHandleButton" 
          onClick={sidebarHandler} 
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
