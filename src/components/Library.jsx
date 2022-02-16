import { useState } from 'react'

import Sidebar from "./Sidebar"
import LibraryGrid from './LibraryGrid';

import '../scss/css/Library.css'

const Library = () => {

  const [library, setLibrary] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const sidebarChangeHandler = (currentSidebar) => {
    setIsSidebarOpen(!currentSidebar)
  }
  
  return (
    <main>
        <Sidebar />
        <LibraryGrid />
    </main>
  )

}

export default Library;
