import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sidebar from './sidebar/Sidebar'
import Breadcrumbs from './breadcrumbs/Breadcrumbs'
import Media from './media/Media'
import Content from './content/Content'

import { filter, defaultFilter, library } from '../../ts/types'

import '../../css/Library.css'

const Library = (props: {library: library}) => {

  const [currentLibrary, setCurrentLibrary] = useState<string|null>(null);
  const libraryChangeHandler = (library: string): void => { setCurrentLibrary(library); }
  
  const [currentFilters, setCurrentFilter] = useState<filter>(defaultFilter);
  const filterChangeHandler = (filter: filter): void => { setCurrentFilter(filter); }

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const sidebarChangeHandler = (): void => { setIsSidebarOpen(prev => !prev); }

  return (
    <main>
      <Sidebar
        onSidebarChange={sidebarChangeHandler}
        isSidebarOpen={isSidebarOpen}
        onLibraryChange={libraryChangeHandler}
        onFilterChange={filterChangeHandler}
      />
      <div id='media'>
        <Router>
          <Breadcrumbs 
            root={props.library.name}
            library={props.library.media}
          />
          <Routes>
            <Route
              path='/'
              element={
                <Media
                  library={props.library.media}
                  filter={currentFilters}
                /> 
              }
            />
            <Route
              path='/group/:path'
              element={
                <Media
                  library={props.library.media}
                  filter={defaultFilter}
                />
              }
            />
            <Route
              path="/content/:path"
              element={
                <Content 
                  library={props.library.media}
                  keys={props.library.keys}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </main>
  )
}

export default Library;
