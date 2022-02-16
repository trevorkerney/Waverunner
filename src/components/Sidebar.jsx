import { useState } from 'react'

import '../scss/css/Sidebar.css'

const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState([]);

  const sidebarHandler = () => {
    setIsSidebarOpen( (prevVal) => {return(!prevVal)});
  }

  return (
    <nav 
      id="sidebar" 
      style={isSidebarOpen ? {
        width: "25vw"
      } : {
        width: "1vw"
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
          <svg 
            id="sidebarHandle"
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Sidebar;
