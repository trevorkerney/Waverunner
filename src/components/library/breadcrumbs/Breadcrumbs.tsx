import { useNavigate, useParams } from 'react-router-dom';

import { ICONS } from '../../../img';

import { tag, bundle, findTag, media, group } from '../../../ts/types'

import '../../../css/Breadcrumbs.css';

const Breadcrumbs = (props: {root: string, library: (media|group)[], breadcrumbs: (media|group)[], onRmCrumbs: (crumbs: number) => void }) => {

  const navigate = useNavigate();
  const { _, path } = useParams();

  return (
    <div id='breadcrumbs'>
      <button
        className='crumbButton'
        onClick={() => {
          props.onRmCrumbs(0);
          navigate('/');
        }}
      >
        <p className='crumb'>{props.root}</p>
      </button>
      {
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
                navigate('/' + ((props.breadcrumbs[index].type === 'media') ? 'content/' : 'group/') + props.breadcrumbs[index].path);
              }}
            >
              <p className='crumb'>{title}</p>
            </button>
          </>
          )
        })
      }
    </div>
  )
}

export default Breadcrumbs;
