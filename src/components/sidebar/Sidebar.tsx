import { ICONS } from '../../img'
import './Sidebar.css';

const Sidebar = (props: { isSidebarOpen: boolean, handleSidebarChange: () => void }) => {
  return (
    <nav
      id="sidebar"
      style={
        props.isSidebarOpen ? {
          width: "15rem"
        } : {
          width: "3rem"
        }
      }
    >
      <div id="logo-box">
        <img
          src={ICONS.logo}
          alt='Waverunner'
          id='logo'
        />
      </div>
    </nav>
  )
}

export default Sidebar;
