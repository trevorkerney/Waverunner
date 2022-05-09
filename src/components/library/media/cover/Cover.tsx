import { useParams, useNavigate } from 'react-router-dom'

import { tag, bundle, findTag, media, group } from '../../../../ts/types'

import '../../../../css/Cover.css'

const Cover = (props: {index: media|group, coverWidth: number }) => {

  const navigate = useNavigate();
  const { path } = useParams();
  const dir: string[] = (
    (path)
    ? path.split('-')
    : []
  )

  const titleTag: tag|bundle|undefined = findTag(props.index, "Title");
  const title: string = ((titleTag) ? titleTag.value : 'Title') as string;

  return (
    <li
      key={dir.concat(props.index.path).join('-')}
      className="mediaItem"
      style={{
        width: `calc(${props.coverWidth}%)`
      }}
    >
      <button
        key={dir.concat(props.index.path).join('-')}
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
              : dir.concat(props.index.path).join('-')
            )
          )
        }}
      >
        <div id='item' key={dir.concat(props.index.path).join('-')}>
          <img
            key={dir.concat(props.index.path).join('-')}
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