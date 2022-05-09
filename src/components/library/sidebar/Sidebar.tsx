import { useState } from 'react'
import { ICONS } from '../../../img'
import { filter, defaultFilter, category } from '../../../ts/types'

import '../../../css/Sidebar.css'

const Sidebar = (props: { onSidebarChange: () => void, isSidebarOpen: boolean, onCategoryChange: (category: category) => void , onFilterChange: (filter: filter) => void }) => {

  const [categories, setCategories] = useState<category[]>([
    {
      name: 'Movies',
      path: '#'
    },
    {
      name: 'TV',
      path: '#'
    },
    {
      name: 'Documentaries',
      path: '#'
    },
    {
      name: 'Music',
      path: '#'
    }
  ]);
  const categoryChangeHandler = (categories: category[]): void => { setCategories(categories); }

  const [filters, setFilters] = useState<filter[]>([
    {
      name: "Action",
      logic: '|',
      tags: [
        {
          key: "Genre",
          value: "Action"
        }
      ],
    },
    {
      name: "Scorsese",
      logic: '|',
      tags: [
        {
          key: "Director",
          value: "Martin Scorsese"
        }
      ],
    },
    {
      name: "Hairy movies",
      logic: '|',
      tags: [
        {
          key: "Title",
          value: "Harry"
        }
      ],
    }
  ]);
  const filtersChangeHandler = (filters: filter[]): void => { setFilters(filters); }

  return (
    <nav 
      id="sidebar" 
      style={props.isSidebarOpen ? {
        width: "12rem"
      } : {
        width: "3rem"
      }}
    >
      <div id="logo-box">
        <img
          src={ICONS.logo}
          alt='Waverunner'
          id='logo'
        />
      </div>
      <div id="sidebar-box">
        <div 
          id="views" 
          style={props.isSidebarOpen ? {
            display: "block"
          } : {
            display: "none"
          }}
        >
          <ol id="categories">
          {
            categories.map((category) => {
              return (
                <li className='filter' key={category.name}>
                  <button
                    className='filterButton'
                    onClick={() => {props.onCategoryChange(category)}}
                  >
                    <p className='filterText'>{category.name}</p>
                  </button>
                </li>
              )
            })
          }
          </ol>
          <hr id="divider" />
          <ol id='filters'>
            <li className='filter' key='default'>
              <button
                className='filterButton'
                onClick={() => {props.onFilterChange(defaultFilter)}}
              >
                <p className='filterText'>All</p>
              </button>
            </li>
            {
              filters.map((filter) => {
                return (
                  <li className='filter' key={filter.name}>
                    <button
                      className='filterButton'
                      onClick={() => {props.onFilterChange(filter)}}
                    >
                      <p className='filterText'>{filter.name}</p>
                    </button>
                  </li>
                )
              })
            }
          </ol>
        </div>
        <div id="sidebarHandleBox">
          <button 
            id="sidebarHandleButton" 
            onClick={props.onSidebarChange} 
          >
            <img 
            id="sidebarHandleIcon" 
            alt="sidebar handle"
            src={ICONS.sidebarHandleIcon} 
            />
          </button>
        </div>
      </div>
      {/* <div id="sidebar-box">
        <div id="logo-box">
          <img
            src={ICONS.logo}
            alt='Waverunner'
            id='logo'
          />
        </div>
        <div 
          id="sidebarViews" 
          style={props.isSidebarOpen ? {
            display: "block"
          } : {
            display: "none"
          }}
        >
          <ol id='filterList'>
            <li className='filter' key='default'>
              <button
                className='filterButton'
                onClick={() => {props.onFilterChange(defaultFilter)}}
              >
                <p className='filterText'>All</p>
              </button>
            </li>
            {
              filters.map((filter) => {
                return (
                  <li className='filter' key={filter.name}>
                    <button
                      className='filterButton'
                      onClick={() => {props.onFilterChange(filter)}}
                    >
                      <p className='filterText'>{filter.name}</p>
                    </button>
                  </li>
                )
              })
            }
          </ol>
        </div>
        <div id="sidebarHandleBox">
          <button 
            id="sidebarHandleButton" 
            onClick={props.onSidebarChange} 
          >
            <img 
            id="sidebarHandleIcon" 
            alt="sidebar handle"
            src={ICONS.sidebarHandleIcon} 
            />
          </button>
        </div>
        <div id="logo-align" />
      </div> */}
    </nav>
  )
}

export default Sidebar;
