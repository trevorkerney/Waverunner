import Nest from '../nest/Nest'

import { Media } from '../../../ts/types'

import './Item.css'

const Item = (props: {nest: Media[]|null}) => {
  return (
    <div id='item'>
      {
        (props.nest != null)
        ? <Nest media={null} />
        : <></>
      }
    </div>
  )
}

export default Item;
