import { useState } from 'react'
import { ICONS } from '../img'
import { tag, filter } from './Types'
import '../scss/css/Sidebar.css'

const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<filter[]>([        // completion requires rust backend
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

  const sidebarHandler = () => {
    setIsSidebarOpen( (prevVal) => {return(!prevVal)});
  }

  return (
    <nav 
      id="sidebar" 
      style={isSidebarOpen ? {
        width: "200px"
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
        <button 
          id="sidebarHandleButton" 
          onClick={sidebarHandler} 
        >
          <img 
           id="sidebarHandleIcon" 
           src={ICONS.sidebarHandleIcon} 
          />
        </button>
      </div>
    </nav>
  )
}

export default Sidebar;
