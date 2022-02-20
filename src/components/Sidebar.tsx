import { useState } from 'react'

import {ICONS} from '../img'

import {filter} from './Types'

import '../scss/css/Sidebar.css'

const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<filter[]>([
    {
      name: "Action",
      //genre: "Action",
      tags: []
    },
    {
      name: "Scorsese",
      //artist: "Martin Scorsese",
      tags: []
    },
    {
      name: "Hairy movies",
      //title: "Harry",
      tags: []
    }
  ]);

  const sidebarHandler = () => {
    setIsSidebarOpen( (prevVal) => {return(!prevVal)});
  }

  return (
    <nav 
      id="sidebar" 
      style={isSidebarOpen ? {
        width: "20%"
      } : {
        width: "20px"
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
        <button id="sidebarHandleButton" onClick={sidebarHandler}  >
          <img id="sidebarHandleIcon" src={ICONS.sidebarHandleIcon} />
        </button>
      </div>
    </nav>
  )
}

export default Sidebar;
