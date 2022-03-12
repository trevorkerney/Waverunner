import { tag, bundle, findTag, media, group } from '../../../../ts/types'

import { useLocation, useNavigate } from 'react-router-dom'

import '../../../../css/Cover.css'

const Cover = (props: {index: media|group, coverWidth: number }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dir = location.pathname.replace('/', ' ').trim().split('/').slice(1);

  const titleTag: tag|bundle|undefined = findTag(props.index, "Title");
  const title: string = ((titleTag) ? titleTag.value : 'Title') as string;

  return (
    <li
      key={props.index.path}
      className="mediaItem"
      style={{
        width: `calc(${props.coverWidth}%)`
      }}
    >
      <button
        className="itemButton"
        onClick={() => {
          navigate(
            (
              (props.index.type === 'media')
              ? '/content/'
              : '/group/'
            )
            + (
              (dir.length === 0)
              ? props.index.path
              : dir.join('-').concat(`-${props.index.path}`)
            )
          )
        }}
      >
        <div id='item'>
          <img
            className="cover"
            src={props.index.temp_img_path}
            alt={title}
          />
          <p className="title">
            {findTag(props.index, "Title")?.value}
          </p>
        </div>
      </button>
    </li>
  )
}

export default Cover;