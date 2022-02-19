import { useState } from 'react'

import '../scss/css/Viewbar.css';

const Viewbar = () => {

  const [viewSize, setViewSize] = useState<number>();
  
  return (
    <div id="viewbar">
      <input type="range" />
    </div>
  )

}

export default Viewbar;
