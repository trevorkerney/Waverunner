import { useState } from 'react'
import { ICONS } from '../img';

import '../scss/css/Viewbar.css';

const Viewbar = () => {

  const [viewSize, setViewSize] = useState<number>(0.5);

  return (
    <div id="viewbar">
      <ul id="viewOptionList">
        <li className="viewbarLeft">
          <ul id="leftList">
            <li className="sizeSliderItem">
              <input
                id='sizeSlider' 
                type='range' 
                min='0' 
                max='1' 
                step='0.01'
              />
            </li>
          </ul>
        </li>
        <li className="viewbarRight">
          <ul id="rightList">
            <li className="searchbarItem">
                <div id="searchContainer">
                  <img 
                    id="searchIcon" 
                    src={ICONS.searchIcon} />
                  <input 
                    id="searchbar" 
                    type="text" />
                </div>
              </li>
          </ul>
        </li>
      </ul>
    </div>
  )

}

export default Viewbar;
