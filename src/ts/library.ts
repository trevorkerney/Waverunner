import { library } from './types'
import { COVERS } from '../img'

export const moviesLibTest: library = {
  name: 'Movies',
  full_path: 'E:/~ the sanctum ~/Media/Movies/',
  media_filename: 'movie',
  media_filename_exts: [
    'mkv',
    'mp4',
  ],
  keys: [
    'Director',
    'Genre'
  ],
  cover_path: '/~covers',
  cover_tags: [
    {
      key: 'Fullres',
      value: 'fullres'
    },
    {
      key: 'Textless',
      value: 'textless'
    },
    {
      key: 'Alternate',
      value: 'alt[1-9]'
    }
  ],
  cover_path_exts: [
    'jpg',
    'jpeg',
    'png'
  ],
  default_view: 'covers',
  media: [
    {
      type: 'media',
      path: '0001',
      temp_img_path: COVERS.pulp,
      tags: [
        {
          key: 'Title',
          value: 'Pulp Fiction'
        },
        {
          key: 'Year',
          value: '1994'
        },
        {
          key: 'Director',
          value: [
            'Quentin Tarantino'
          ]
        },
        {
          key: 'Genre',
          value: [
            'Crime',
            'Comedy',
            'Dark Comedy',
            'Drama',
            'Thriller'
          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0002',
      temp_img_path: COVERS.wolf,
      tags: [
        {
          key: 'Title',
          value: 'The Wolf of Wall Street'
        },
        {
          key: 'Year',
          value: '2013'
        },
        {
          key: 'Director',
          value: [
            'Martin Scorsese'
          ]
        },
        {
          key: 'Genre',
          value: [
            'Crime',
            'Comedy',
            'Dark Comedy',
            'Drama',
          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0003',
      temp_img_path: COVERS.knight,
      tags: [
        {
          key: 'Title',
          value: 'The Dark Knight'
        },
        {
          key: 'Year',
          value: '2008'
        },
        {
          key: 'Director',
          value: [
            'Christopher Nolan'
          ]
        },
        {
          key: 'Genre',
          value: [
            'Action',
            'Crime',
            'Drama',
            'Neo-noir',
            'Superhero',
          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0004',
      temp_img_path: COVERS.fellas,
      tags: [
        {
          key: 'Title',
          value: 'Goodfellas',
        },
        {
          key: 'Year',
          value: '1994'
        },
        {
          key: 'Director',
          value: [
            'Martin Scorsese'
          ]
        },
        {
          key: 'Genre',
          value: [

          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0005',
      temp_img_path: COVERS.lampoon,
      tags: [
        {
          key: 'Title',
          value: "National Lampoon's Christmas Vacation",
        },
        {
          key: 'Year',
          value: '1989'
        },
        {
          key: 'Director',
          value: [
            'Jeremiah S. Chechik'
          ]
        },
        {
          key: 'Genre',
          value: [
            
          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0006',
      temp_img_path: COVERS.sponge,
      tags: [
        {
          key: 'Title',
          value: 'The Spongebob Squarepants Movie',
        },
        {
          key: 'Year',
          value: '2004'
        },
        {
          key: 'Director',
          value: [
            'Stephen Hillenburg',
            'Mark Osborne'
          ]
        },
        {
          key: 'Genre',
          value: [
            
          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0007',
      temp_img_path: COVERS.shank,
      tags: [
        {
          key: 'Title',
          value: 'The Shawshank Redemption',
        },
        {
          key: 'Year',
          value: '1994'
        },
        {
          key: 'Director',
          value: [
            'Frank Darabont'
          ]
        },
        {
          key: 'Genre',
          value: [
            
          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0008',
      temp_img_path: COVERS.walle,
      tags: [
        {
          key: 'Title',
          value: 'WALL-E',
        },
        {
          key: 'Year',
          value: '2008'
        },
        {
          key: 'Director',
          value: [
            'Andrew Stanton'
          ]
        },
        {
          key: 'Genre',
          value: [
            
          ]
        }
      ],
    },
    {
      type: 'media',
      path: '0009',
      temp_img_path: COVERS.blood,
      tags: [
        {
          key: 'Title',
          value: 'First Blood',
        },
        {
          key: 'Year',
          value: '1982'
        },
        {
          key: 'Director',
          value: [
            'Ted Kotcheff'
          ]
        },
        {
          key: 'Genre',
          value: [
            'Action'
          ]
        }
      ],
    },
    {
      type: 'group',
      path: '0010',
      temp_img_path: COVERS.potter,
      tags: [
        {
          key: 'Title',
          value: 'Harry Potter',
        },
        {
          key: 'Year',
          value: '2001-2011'
        }
      ],
      media: [
        {
          type: 'media',
          path: '0001',
          temp_img_path: COVERS.stone,
          tags: [
            {
              key: 'Title',
              value: "Harry Potter and the Sorcerer's Stone",
            }
          ],
        },
        {
          type: 'media',
          path: '0002',
          temp_img_path: COVERS.secrets,
          tags: [
            {
              key: 'Title',
              value: 'Harry Potter and the Chamber of Secrets',
            }
          ],
        },
        {
          type: 'media',
          path: '0003',
          temp_img_path: COVERS.prisoner,
          tags: [
            {
              key: 'Title',
              value: 'Harry Potter and the Prisoner of Azkaban',
            }
          ],
        },
        {
          type: 'media',
          path: '0004',
          temp_img_path: COVERS.goblet,
          tags: [
            {
              key: 'Title',
              value: 'Harry Potter and the Goblet of Fire',
            }
          ],
        },
        {
          type: 'media',
          path: '0005',
          temp_img_path: COVERS.phoenix,
          tags: [
            {
              key: 'Title',
              value: 'Harry Potter and the Order of the Phoenix',
            }
          ],
        },
        {
          type: 'media',
          path: '0006',
          temp_img_path: COVERS.prince,
          tags: [
            {
              key: 'Title',
              value: 'Harry Potter and the Half-Blood Prince',
            }
          ],
        },
        {
          type: 'media',
          path: '0007',
          temp_img_path: COVERS.deathly,
          tags: [
            {
              key: 'Title',
              value: 'Harry Potter and the Deathly Hallows Part 1',
            }
          ],
        },
        {
          type: 'media',
          path: '0008',
          temp_img_path: COVERS.hallows,
          tags: [
            {
              key: 'Title',
              value: 'Harry Potter and the Deathly Hallows Part 2',
            }
          ],
        }
      ]
    }
  ]
}