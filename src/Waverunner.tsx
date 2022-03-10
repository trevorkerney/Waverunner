import { useState } from 'react'

import Navbar from "./components/navbar/Navbar"
import Library from "./components/library/Library"

import { library } from './ts/types'
import { moviesLibTest } from './ts/library'

import './css/Waverunner.css';

const Waverunner = () => {

  const [currentLibrary, setCurrentLibrary] = useState<library>(moviesLibTest);      // completion requires rust backend

  const libraryChangeHandler = (library: library) => {
    setCurrentLibrary(library);
  }

  return (
    <>
      <Navbar
        onLibraryChange={libraryChangeHandler}
      />
      <Library
        library={currentLibrary}
      />
    </>
  )
}

export default Waverunner;
