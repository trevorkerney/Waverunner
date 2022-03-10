import { useParams } from 'react-router-dom';

import { tag, bundle, findTag, media, group } from '../../../ts/types'

import '../../../css/Content.css'

const Content = (props: {library: (media|group)[], keys: string[]}) => {

  const { path } = useParams();

  const index = (path) ? parseInt(path) - 1 : 0

  const titleTag: tag|bundle|undefined = findTag(props.library[index], 'Title');
  const title: string = ((titleTag) ? titleTag.value : 'Title') as string;

  const yearTag: tag|bundle|undefined = findTag(props.library[index], 'Year');
  const year: string = ((yearTag) ? yearTag.value : 'Year') as string;

  const tags: (tag|bundle)[] = props.keys.map((key: string) => {
    const tag : tag|bundle|undefined = findTag(props.library[index], key);
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
          src={props.library[index].temp_img_path}
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