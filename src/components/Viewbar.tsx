import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ICONS } from '../img';

import '../scss/css/Viewbar.css';

const Viewbar = (props: {onWidthChange: (width: string) => void}) => {

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onWidthChange(event.target.value);
  }

  return (
    <div id="viewbar">
      <ul id="viewOptionList">
        <li className="viewbarLeft">
          <ul id="leftList">
            <li className="sizeSliderItem">
              <input
                id='sizeSlider' 
                type='range' 
                min='100' 
                max='500' 
                defaultValue='300'
                step='3' 
                onChange={handleWidthChange}
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
