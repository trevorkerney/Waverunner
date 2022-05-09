import { useLocation, useNavigate } from 'react-router-dom';

import { tag, bundle, findTag, media, group, direct } from '../../../ts/types'

import { ICONS } from '../../../img';

import '../../../css/Breadcrumbs.css';

const Breadcrumbs = (props: {root: string, library: (media|group)[]}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dir: number[] = (
    (location.pathname === '/')
    ? []
    : location.pathname.replace('/', ' ').trim().split('/').slice(1)[0].split('-').map(index => parseInt(index) - 1) // does what useparams does in context and media
  )

  const ugh = () => {

  }

  return (
    <div id='breadcrumbs'>
      <button
        className='crumbButton'
        onClick={() => {
          navigate('/');
        }}
      >
        <p className='crumbText'>{props.root}</p>
      </button>
      {
        dir.map((_, index) => {
          const library: (media|group)[] = direct(props.library, dir.slice(0, index));
          const item: media|group = library[dir[index]];
          const titleTag: tag|bundle|undefined = findTag(item, 'Title');
          const title: string = ((titleTag) ? titleTag.value : 'Title') as string;
          return (
            <div
              key={dir.slice(0, index + 1).map(index => (index + 1).toString().padStart(4, '0')).join('-')}
              className='crumb'
            >
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
                <p className='crumbText'>{title}</p>
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Breadcrumbs;
