import { useState } from 'react'

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
      <Library
        library={currentLibrary}
      />
    </>
  )
}

export default Waverunner;
