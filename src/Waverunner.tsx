import { useState } from 'react'

import Sidebar from './components/sidebar/Sidebar'
import Content from './components/content/Content'
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';

import './Waverunner.css';

const Waverunner = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const handleSidebarChange = (): void => { setIsSidebarOpen(prev => !prev); }

  return (
    <>
      <div data-tauri-drag-region id="titlebar" />
      <div id="app-wrapper">
        <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarChange={handleSidebarChange} />
        <div id="content-wrapper">
          <Breadcrumbs />
          <Content />
        </div>
      </div>
    </>
  )
}

export default Waverunner;
