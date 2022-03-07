import { ICONS } from '../../../img';

import '../../../css/Viewbar.css';

const Viewbar = (props: {onWidthChange: (width: string) => void, onSortChange: (sort: string) => void, onInputSearch: (search: string) => void} ) => {

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
  { props.onWidthChange(event.target.value); }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
  { props.onInputSearch(event.target.value); }

  return (
    <div id='viewbar'>

      {/* VIEWBAR LEFT */ }
      <div id='viewbarLeft'>

        {/* SLIDER BOX */}
        <div id='sliderBox'>
          <img
            src={ICONS.coverViewIcon}
            alt='smaller'
          />
          <input
            id='slider' 
            type='range' 
            min={
              (window.innerWidth < 1280)
              ? 12.5
              : 7.5
            }
            max='50'
            defaultValue='20'
            step='.5' 
            onChange={handleWidthChange}
            
          />
          <img
            src={ICONS.bigCoverViewIcon}
            alt='bigger'
            id=''
          />
        </div>

        {/* DISPLAY BOX */}
        <div id='displayBox'>
          <button id='coversButton'>
            <img
              src={ICONS.coverViewIcon}
              alt='cover view'
            />
          </button>
          <button id='detailsButton'>
            <img
              src={ICONS.detailsViewIcon}
              alt='details view'
            />
          </button>
        </div>

        {/* CONFIG BOX */}
        <div id='configBox'>
          <button id='openButton'>
            <img 
              src={ICONS.openIcon} 
              alt="open config" 
            />
          </button>
          <button id='saveButton'>
            <img
              src={ICONS.saveIcon}
              alt="save config" 
            />
          </button>
        </div>
      </div>

      {/* VIEWBAR RIGHT */}
      <div id='viewbarRight'>
        <div id='searchBox'>
          <img
            src={ICONS.searchIcon} 
            alt='search icon'
          />
          <input 
            type='search' 
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  )

}

export default Viewbar;
