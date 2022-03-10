import { tag, bundle, findTag, media, group } from '../../../../ts/types'

import { useNavigate } from 'react-router-dom'

import '../../../../css/Cover.css'

const Cover = (props: {index: media|group, coverWidth: number, onAddCrumb: (crumb: media|group) => void }) => {

  const navigate = useNavigate();

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
          props.onAddCrumb(props.index);
          navigate(`/content/${props.index.path}`);
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