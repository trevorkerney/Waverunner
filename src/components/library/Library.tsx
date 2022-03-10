import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sidebar from './sidebar/Sidebar'
import Breadcrumbs from './breadcrumbs/Breadcrumbs'
import Media from './media/Media'
import Content from './content/Content'

import { media, group, filter, defaultFilter, library } from '../../ts/types'

import '../../css/Library.css'

const Library = (props: {library: library}) => {



  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarChangeHandler = (): void => { setIsSidebarOpen(prev => !prev); }

  const [currentCrumbs, setCurrentCrumbs] = useState<(media|group)[]>([]);
  const addCrumb = (crumb: media|group) => { setCurrentCrumbs(prev => prev.concat(crumb)); }
  const rmCrumbs = (keep: number) => { setCurrentCrumbs(prev => prev.slice(0, keep)); }
  
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
            breadcrumbs={currentCrumbs}
            onRmCrumbs={rmCrumbs}
          />
          <Routes>
            <Route
              path='/'
              element={
                <Media
                  library={props.library.media}
                  filter={currentFilters}
                  onAddCrumb={addCrumb}
                /> 
              }
            />
            <Route
              path='/content/:path'
              element={
                <Content 
                  library={props.library.media}
                  keys={props.library.keys}
                />
              }
            />
            <Route
              path='/group/:path'
              element={
                <Media
                  library={props.library.media}
                  filter={defaultFilter}
                  onAddCrumb={addCrumb}
                /> 
              }
            />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default Library;
