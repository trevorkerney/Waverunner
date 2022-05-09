import { dialog, invoke } from '@tauri-apps/api'
import { useState } from 'react'

import { filter, defaultFilter, category } from '../../../ts/types'

import { ICONS } from '../../../img'

import '../../../css/Sidebar.css'

const Sidebar = (props: { onSidebarChange: () => void, isSidebarOpen: boolean, onCategoryChange: (category: category) => void , onFilterChange: (filter: filter) => void }) => {

  const [categories, setCategories] = useState<category[]>([
    {
      name: 'Films',
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

  const getPath = async () => {
    const path = await dialog.open({directory: true});
    invoke('import_from_path', {path: path});
  }

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
                    className='sidebarButton'
                    onClick={() => {props.onCategoryChange(category)}}
                  >
                    <p className='filterText'>{category.name}</p>
                  </button>
                </li>
              )
            })
          }
            <li key="new">
              <button
                className='sidebarButton'
                onClick={() => {}}
              >
                <img
                  src={ICONS.plus}
                  alt="plus"
                  id="newCategoryLogo"
                />
                <p id="newCategoryText">create category</p>
              </button>
            </li>
          </ol>
          <hr id="divider" />
          <ol id='filters'>
            <li className='filter' key='default'>
              <button
                className='sidebarButton'
                onClick={() => {props.onFilterChange(defaultFilter)}}
              >
                <p className='filterText'><span id="bold">All</span></p>
              </button>
            </li>
            {
              filters.map((filter) => {
                return (
                  <li className='filter' key={filter.name}>
                    <button
                      className='sidebarButton'
                      onClick={() => {props.onFilterChange(filter)}}
                    >
                      <p className='filterText'>{filter.name}</p>
                    </button>
                  </li>
                )
              })
            }
            <li key="new">
              <button
                className='sidebarButton'
                onClick={() => {}}
              >
                <img
                  src={ICONS.plus}
                  alt="plus"
                  id="newCategoryLogo"
                />
                <p id="newCategoryText">create filter</p>
              </button>
            </li>
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
    </nav>
  )
}

export default Sidebar;
