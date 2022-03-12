import { useLocation, useNavigate } from 'react-router-dom';

import { ICONS } from '../../../img';

import { tag, bundle, findTag, media, group } from '../../../ts/types'

import '../../../css/Breadcrumbs.css';

const Breadcrumbs = (props: {root: string, library: (media|group)[]}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dir: number[] = (
    (location.pathname === '/')
    ? []
    : location.pathname.replace('/', ' ').trim().split('/').slice(1)[0].split('-').map(index => parseInt(index) - 1)
  )

  return (
    <div id='breadcrumbs'>
      <button
        className='crumbButton'
        onClick={() => {
          navigate('/');
        }}
      >
        <p className='crumb'>{props.root}</p>
      </button>
      {/* {
        props.breadcrumbs.map((crumb, index) => {
          const titleTag: tag|bundle|undefined  = findTag(crumb, 'Title');
          const title: string = ((titleTag) ? titleTag.value : 'Title') as string;
          return (
          <>
            <img
              src={ICONS.arrow}
              alt="arrow"
              className='arrow'
            />
            <button
              className='crumbButton'
              onClick={() => {
                props.onRmCrumbs(index + 1);
                navigate(
                  '/'
                  + `${props.breadcrumbs[index].path}`
                  + (
                    (props.breadcrumbs[index].type === 'media')
                    ? '/content'
                    : ''
                  )
                )
              }}
            >
              <p className='crumb'>{title}</p>
            </button>
          </>
          )
        })
      } */}
    </div>
  )
}

export default Breadcrumbs;
