import { findTag, media, group, pseudo } from '../../../../ts/types'

import '../../../../css/Cover.css'

const Cover = (props: {index: media|group|pseudo, coverWidth: number}) => {

  let pseudoKeys: number = 0;

  return (
    <li
      key={
        (props.index.type !== 'pseudo')
        ? (
          (props.index as media|group).path
        ) : (
          `${pseudoKeys += 1}`
        )
      }
      className="mediaItem"
      style={{
        width: `${props.coverWidth}px`
      }}
    >
      <button className="itemButton">
      {
        (props.index.type !== 'pseudo')
        ? (
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
        ) : (
          <p></p>
        )
      }
      </button>
    </li>
  )
}

export default Cover;