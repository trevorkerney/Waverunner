import { ICONS } from '../../../img';

import '../../../css/Breadcrumbs.css';

const Breadcrumbs = (props: {root: string, breadcrumbs: string[]}) => {
  return (
    <div id='breadcrumbs'>
    <button className='crumbButton'>
      <p className='crumb'>{props.root}</p>
    </button>
    {
      props.breadcrumbs.map((crumb) => {
        return (
        <>
          <img
            src={ICONS.arrow}
            alt="arrow"
            className='arrow'
          />
          <button className='crumbButton'>
            <p className='crumb'>{crumb}</p>
          </button>
        </>
        )
      })
    }
    </div>
  )
}

export default Breadcrumbs;
