import { ICONS } from '../../img'
import './Sidebar.css';

const Sidebar = (props: { isSidebarOpen: boolean, handleSidebarChange: () => void }) => {
  return (
    <nav
      id='sidebar'
      style={
        props.isSidebarOpen ? {
          width: '15rem'
        } : {
          width: '3rem'
        }
      }
    >
      <div id='logo-box'>
        <img
          src={ICONS.logo}
          alt='Waverunner'
          id='logo'
        />
      </div>
      <div id='sb-bottom'>
        <div
          id='sb-contents'
          style={props.isSidebarOpen ? {
            display: 'block'
          } : {
            display: 'none'
          }}
        >
          <div id='sb-categories'>
          { /* MAP HERE */ }
            <ul id='cats-list'>
              <li className='sb-item'>
                <button className='item-btn'>
                  <img
                    className='new-item-plus'
                    src={ICONS.circlePlus}
                    alt='new item'
                  />
                  <p className='sb-item-text'>new library</p>
                </button>
              </li>
            </ul>
          </div>
          <div id='sb-filters'>
            { /* MAP HERE */ }
            <ul id='filters-list'>
              <li className='sb-item'>
                <button className='item-btn'>
                  <img
                    className='new-item-plus'
                    src={ICONS.circlePlus}
                    alt='new item'
                  />
                  <p className='sb-item-text'>new filter</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div id='sb-button-box'>
          <button
            id='sb-button'
            onClick={props.handleSidebarChange}
          >
            <img
              id='sb-button-img'
              src={ICONS.sidebarHandleIcon}
              alt='open/close sidebar'
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar;
