import { useState } from 'react'

import Sidebar from "./sidebar/Sidebar"
import Viewbar from './viewbar/Viewbar'
import Media from './media/Media'

import { filter, library } from '../../ts/types'

import '../../css/Library.css'

const Library = (props: {library: library}) => {

  const [currentFilters, setCurrentFilter] = useState<filter[]>([]);
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [coverWidth, setCoverWidth] = useState<number>(200);
  const [sortBy, setSortBy] = useState<string>("Title");
  
  const filterChangeHandler = (filters: filter[]): void => {
    setCurrentFilter(filters);
  }
  
  const coverWidthHandler = (width: string): void => {
    setCoverWidth(parseInt(width));
  }

  const sortChangeHandler = (sort: string): void => {
    setSortBy(sort);
  }
  
  const searchInputHandler = (search: string): void => {
    setCurrentSearch(search);
  }

  return (
    <main>
      <Sidebar
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
