import { useState } from 'react'

import '../scss/css/Sidebar.css'

const Sidebar = () => {

  const [views, setViews] = useState([]);

  return (
    <nav id="sidebar">
      <div id="sidebarViews">

      </div>
      <div id="sidebarHandleBox">
        <svg 
          id="sidebarHandle"
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </div>
    </nav>
  )

}

export default Sidebar;
