import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sidebar from './sidebar/Sidebar'
import Breadcrumbs from './breadcrumbs/Breadcrumbs'
import Media from './media/Media'
import Content from './content/Content'

import { filter, defaultFilter, library } from '../../ts/types'

import '../../css/Library.css'

const Library = (props: {library: library}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarChangeHandler = (): void => { setIsSidebarOpen(prev => !prev); }
  
  const [currentFilters, setCurrentFilter] = useState<filter>(defaultFilter);
  const filterChangeHandler = (filter: filter): void => { setCurrentFilter(filter); }

  return (
    <Router>
      <main>
        <Sidebar
          onSidebarChange={sidebarChangeHandler}
          isSidebarOpen={isSidebarOpen}
          onFilterChange={filterChangeHandler}
        />
        <div id='media'>
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
              path='/group/*'
              element={
                <Media
                  library={props.library.media}
                  filter={defaultFilter}
                />
              }
            />
            <Route
              path="/content/*"
              element={
                <Content 
                  library={props.library.media}
                  keys={props.library.keys}
                />
                //<Test />
              }
            />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default Library;
