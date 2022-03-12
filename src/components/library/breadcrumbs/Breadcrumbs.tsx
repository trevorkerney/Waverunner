import { useLocation, useNavigate } from 'react-router-dom';

import { ICONS } from '../../../img';

import { tag, bundle, findTag, media, group, direct } from '../../../ts/types'

import '../../../css/Breadcrumbs.css';

const Breadcrumbs = (props: {root: string, library: (media|group)[]}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dir: number[] = (
    (location.pathname === '/')
    ? []
    : location.pathname.replace('/', ' ').trim().split('/').slice(1)[0].split('-').map(index => parseInt(index) - 1) // does what useparams does in context and media
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
      {
        dir.map((_, index) => {
          const library: (media|group)[] = direct(props.library, dir.slice(0, index));
          console.log(library)
          const item: media|group = library[dir[index]];
          const titleTag: tag|bundle|undefined  = findTag(item, 'Title');
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
                  navigate(
                    (
                      (item.type === 'media')
                      ? '/content/'
                      : '/group/'
                    )
                    + dir.slice(0, index + 1).map(index => (index + 1).toString().padStart(4, '0')).join('-')
                  )
                }}
              >
                <p className='crumb'>{title}</p>
              </button>
            </>
          )
        })
      }
      {/* {
        dir.map((crumb, index) => {
          const library: (media|group)[] = direct(props.library, dir.slice(0, index + 1));
          const item: media|group = library[dir[dir.length - 1]];
          const titleTag: tag|bundle|undefined  = findTag(item, 'Title');
          const title: string = ((titleTag) ? titleTag.value : 'Title') as string;
          console.log(title);
          return (
            <>
              <img
                src={ICONS.arrow}
                alt="arrow"
                className='arrow'
              />
              <button
                className='crumbButton'
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

/* {
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
      } */