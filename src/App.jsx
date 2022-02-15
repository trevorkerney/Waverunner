import React from 'react'

import LibraryMenu from "./components/LibraryMenu"
import Sidebar from "./components/Sidebar"
import Library from "./components/Library"

import './App.css';

const App = () => {

  return (
    <div id="app">
      <LibraryMenu />
      <Sidebar />
      <Library />
    </div>
  )

}

export default App;
