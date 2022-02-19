import { useState } from 'react'

import Sidebar from "./Sidebar"
import LibraryGrid from './LibraryGrid';

import '../scss/css/Library.css'

const Library = () => {
  
  return (
    <main>
        <Sidebar />
        <LibraryGrid />
    </main>
  )

}

export default Library;
