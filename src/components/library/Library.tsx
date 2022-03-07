import { useState, useEffect, useRef } from 'react'

import Sidebar from "./sidebar/Sidebar"
import Viewbar from './viewbar/Viewbar'
import Media from './media/Media'

import { filter, library } from '../../ts/types'

import '../../css/Library.css'

const Library = (props: {library: library}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarChangeHandler = (): void => { setIsSidebarOpen(prev => !prev); }

  const [currentFilters, setCurrentFilter] = useState<filter[]>([]);
  const filterChangeHandler = (filters: filter[]): void => { setCurrentFilter(filters); }

  const [currentSearch, setCurrentSearch] = useState<string>("");
  const searchInputHandler = (search: string): void => { setCurrentSearch(search); }

  const [coverWidth, setCoverWidth] = useState<number>(20);
  const coverWidthHandler = (width: string): void => { setCoverWidth(parseInt(width)); }

  const [sortBy, setSortBy] = useState<string>("Title");
  const sortChangeHandler = (sort: string): void => { setSortBy(sort); }

  return (
    <main>
      <Sidebar
        onSidebarChange={sidebarChangeHandler}
        isSidebarOpen={isSidebarOpen}
        onFilterChange={filterChangeHandler}
      />
      <div id="media">
        <Viewbar
          onWidthChange={coverWidthHandler} 
          onSortChange={sortChangeHandler}
          onInputSearch={searchInputHandler} 
        />
        <Media
          library={props.library}
          filters={currentFilters} 
          search={currentSearch} 
          sort={sortBy} 
          coverWidth={coverWidth}
        />
      </div>
    </main>
  )
}

export default Library;
