import { findTag, media, group } from '../../../../ts/types'

import '../../../../css/Cover.css'

const Cover = (props: {index: media|group, coverWidth: number}) => {

  return (
    <li
      key={(props.index as media|group).path}
      className="mediaItem"
      style={{
        width: `calc(${props.coverWidth}%)`
      }}
    >
      <button className="itemButton">
        <div id='item'>
          <img
            className="cover"
            src={(props.index as media|group).temp_img_path}
            alt={
              (findTag((props.index as media|group), "Title") === undefined)
              ? "Title"
              : findTag((props.index as media|group), "Title")!.value
            }
          />
          <p className="title">
            {findTag((props.index as media|group), "Title")!.value}
          </p>
        </div>
      </button>
    </li>
  )
}

export default Cover;