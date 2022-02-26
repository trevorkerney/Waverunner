import { ICONS } from '../../img';

import '../../css/Viewbar.css';

const Viewbar = (props: {onWidthChange: (width: string) => void, onSortChange: (sort: string) => void, onInputSearch: (search: string) => void} ) => {

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onWidthChange(event.target.value);
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onInputSearch(event.target.value);
  }

  // This nesting nightmare makes a lot more sense when you look at it with f12 dev tools
  return (
    <div id="viewbar">
      <ul id="viewbarList">
        <li id="viewbarLeft">
          <ul id="leftList">
            <li id="sliderItem">
              <ul id="sliderList">
                <li id="sliderSmallEndItem">
                  <img
                    id="smallerIcon"
                    src={ICONS.coverViewIcon} 
                    alt="smaller" 
                  />
                </li>
                <li id="sizeSliderItem">
                  <input
                    id='sizeSlider' 
                    type='range' 
                    min='100' 
                    max='500' 
                    defaultValue='300'
                    step='4' 
                    onChange={handleWidthChange}
                  />
                </li>
                <li id="sliderBigEndItem">
                  <img
                    id="biggerIcon"
                    src={ICONS.bigCoverViewIcon} 
                    alt="bigger" 
                  />
                </li>
              </ul>
            </li>
            <li id="displayTypeItem">
              <ul id="displayTypeList">
                <li id="coversButtonItem">
                  <button id="coversButton">
                    <img 
                      id="searchIcon" 
                      alt="search"
                      src={ICONS.coverViewIcon} 
                    />
                  </button>
                </li>
                <li id="detailsButtonItem">
                  <button id="detailsButton">
                    <img 
                      id="detailsIcon" 
                      alt="details"
                      src={ICONS.detailsViewIcon} 
                    />
                  </button>
                </li>
              </ul>
            </li>
            <li id="coverConfigItem">
              <ul id="coverConfigList">
                <li id="openConfigButtonItem">
                  <button id="openConfigButton">
                  <img 
                      id="openConfigIcon" 
                      alt="open"
                      src={ICONS.openIcon} 
                    />
                  </button>
                </li>
                <li id="saveConfigButtonItem">
                  <button id="saveConfigButton">
                  <img 
                      id="saveConfigIcon" 
                      alt="save"
                      src={ICONS.saveIcon} 
                    />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li id="viewbarRight">
          <ul id="rightList">
            <li id="searchbarItem">
                <div id="searchContainer">
                  <img 
                    id="searchIcon" 
                    alt="search icon"
                    src={ICONS.searchIcon} 
                  />
                  <input 
                    type="search" 
                    id="searchbar" 
                    onChange={handleSearchChange}
                  />
                </div>
              </li>
          </ul>
        </li>
      </ul>
    </div>
  )

}

export default Viewbar;
