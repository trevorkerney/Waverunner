import { tag, findTag, media, group, pseudo } from '../../ts/types'

import '../../css/Cover.css'

const Cover = (props: {index: media|group|pseudo, coverWidth: number}) => {

  return (
    <li
      className="libraryListItem"
      style={{
        width: `${props.coverWidth}px`
      }}
    >
      <button id="itemButton">
      {
        (props.index.type !== "pseudo")
        ? (
          <ul className="itemContents">
            <img
              className="itemCover"
              src={(props.index as media|group).temp_img_path}
              alt={
                (findTag((props.index as media|group), "Title") === undefined)
                ? "Title"
                : (findTag((props.index as media|group), "Title") as tag).value
              }
            />
            <p className="itemTitle">
              {((props.index as media|group).tags.find((pair: tag) => pair.key === "Title") as tag).value}
            </p>
          </ul>
        )
        : (
          <ul className="itemContents"></ul>
        )
      }
      </button>
    </li>
  )
}

export default Cover;
