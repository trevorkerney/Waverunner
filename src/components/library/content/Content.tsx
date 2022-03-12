import { useParams } from 'react-router-dom';

import { tag, bundle, findTag, media, group, direct } from '../../../ts/types'

import '../../../css/Content.css'

const Content = (props: {library: (media|group)[], keys: string[]}) => {

  const { path } = useParams();
  const dir: number[] = (
    (path)
    ? path.split('-').map(index => parseInt(index) - 1)
    : []
  )

  const library: (media|group)[] = direct(props.library, dir.slice(0, -1));
  const media: media = (library[dir[dir.length - 1]] as media)

  const titleTag: tag|bundle|undefined = findTag(media, 'Title');
  const title: string = ((titleTag) ? titleTag.value : 'Title') as string;

  const yearTag: tag|bundle|undefined = findTag(media, 'Year');
  const year: string = ((yearTag) ? yearTag.value : 'Year') as string;

  const tags: (tag|bundle)[] = props.keys.map((key: string) => {
    const tag : tag|bundle|undefined = findTag(media, key);
    return (
      {
        key: key,
        value: (
          (tag) ? tag.value : key
        )
      } as tag
    );
  });

  return (
    <div id='content'>
      <div id='header'>
        <img
          src={media.temp_img_path}
          alt={title}
          id='cover'
        />
        <div id='info'>
          <h1 id='title'>{title}</h1>
          <h6 id='year'>{year}</h6>
          {
            tags.map((tag) => {
              return (
                <p className='director'>
                  <span className='key'>{tag.key}&nbsp;&nbsp;&nbsp;</span>
                  {
                    (tag.value as string[]).join(' - ')
                  }
                </p>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


export default Content;