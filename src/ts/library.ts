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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
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
            },
            {
              key: 'Year',
              value: '2001'
            },
            {
              key: 'Director',
              value: [
                'Chris Columbus'
              ]
            },
            {
              key: 'Genre',
              value: [
                'Fantasy'
              ]
            }
          ],
        }
      ]
    },
    {
      type: 'group',
      path: '0011',
      temp_img_path: COVERS.star,
      tags: [
        {
          key: 'Title',
          value: 'Star Wars',
        },
        {
          key: 'Year',
          value: '1977-2019'
        }
      ],
      media: [
        {
          type: 'group',
          path: '0001',
          temp_img_path: COVERS.harmy,
          tags: [
            {
              key: 'Title',
              value: "Original Trilogy (Harmy's Despecialized Edition)"
            },
            {
              key: 'Year',
              value: '1977-1983'
            }
          ],
          media: [
            {
              type: 'media',
              path: '0001',
              temp_img_path: COVERS.new,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode IV - A New Hope',
                },
                {
                  key: 'Year',
                  value: '1977'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0002',
              temp_img_path: COVERS.empire,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode V - The Empire Strikes Back',
                },
                {
                  key: 'Year',
                  value: '1980'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0003',
              temp_img_path: COVERS.return,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode IV - Return of the Jedi',
                },
                {
                  key: 'Year',
                  value: '1983'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'group',
          path: '0002',
          temp_img_path: COVERS.original,
          tags: [
            {
              key: 'Title',
              value: "Original Trilogy"
            },
            {
              key: 'Year',
              value: '1977-1983'
            }
          ],
          media: [
            {
              type: 'media',
              path: '0001',
              temp_img_path: COVERS.hope,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode IV - A New Hope',
                },
                {
                  key: 'Year',
                  value: '1977'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0002',
              temp_img_path: COVERS.strike,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode V - The Empire Strikes Back',
                },
                {
                  key: 'Year',
                  value: '1980'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0003',
              temp_img_path: COVERS.jedi,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode IV - Return of the Jedi',
                },
                {
                  key: 'Year',
                  value: '1983'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'group',
          path: '0003',
          temp_img_path: COVERS.prequel,
          tags: [
            {
              key: 'Title',
              value: "Prequel Trilogy"
            },
            {
              key: 'Year',
              value: '1999-2005'
            }
          ],
          media: [
            {
              type: 'media',
              path: '0001',
              temp_img_path: COVERS.phantom,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode I - The Phantom Menace',
                },
                {
                  key: 'Year',
                  value: '1999'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0002',
              temp_img_path: COVERS.clones,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode II - Attack of the Clones',
                },
                {
                  key: 'Year',
                  value: '2002'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0003',
              temp_img_path: COVERS.sith,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode III - Revenge of the Sith',
                },
                {
                  key: 'Year',
                  value: '2005'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'group',
          path: '0004',
          temp_img_path: COVERS.sequel,
          tags: [
            {
              key: 'Title',
              value: "Sequel Trilogy"
            },
            {
              key: 'Year',
              value: '2015-2019'
            }
          ],
          media: [
            {
              type: 'media',
              path: '0001',
              temp_img_path: COVERS.awakens,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode VII - The Force Awakens',
                },
                {
                  key: 'Year',
                  value: '2015'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0002',
              temp_img_path: COVERS.last,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode VIII - The Last Jedi',
                },
                {
                  key: 'Year',
                  value: '2017'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0003',
              temp_img_path: COVERS.rise,
              tags: [
                {
                  key: 'Title',
                  value: 'Star Wars: Episode IX - The Rise of Skywalker',
                },
                {
                  key: 'Year',
                  value: '2019'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'group',
          path: '0005',
          temp_img_path: COVERS.antho,
          tags: [
            {
              key: 'Title',
              value: "Anthology"
            },
            {
              key: 'Year',
              value: '2016-2018'
            }
          ],
          media: [
            {
              type: 'media',
              path: '0001',
              temp_img_path: COVERS.rogue,
              tags: [
                {
                  key: 'Title',
                  value: 'Rogue One: A Star Wars Story',
                },
                {
                  key: 'Year',
                  value: '2016'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            },
            {
              type: 'media',
              path: '0002',
              temp_img_path: COVERS.solo,
              tags: [
                {
                  key: 'Title',
                  value: 'Solo: A Star Wars Story',
                },
                {
                  key: 'Year',
                  value: '2018'
                },
                {
                  key: 'Director',
                  value: [
                    'George Lucas'
                  ]
                },
                {
                  key: 'Genre',
                  value: [
                    'Fantasy'
                  ]
                }
              ]
            }
          ]
        },
        
      ]
    }
  ]
}