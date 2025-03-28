export interface Site {
  displayName: string
  slug: string
  description: string
}

export const sitesData: Site[] = [
  {
    displayName: 'Array of Sunshine',
    slug: 'array-of-sunshine',
    description: 'Web development blog',
  },
  {
    displayName: 'Dan Edwards Creative',
    slug: 'dan-edwards-creative',
    description: 'Pop music production and songwriting portfolio site',
  },
  {
    displayName: 'Dan Edwards Developer',
    slug: 'dan-edwards-developer',
    description: 'Web development portfolio site',
  },
  {
    displayName: 'Digital Book Shop',
    slug: 'digital-book-shop',
    description: 'Online bookshop selling digital downloads',
  },
  {
    displayName: 'Scherzo Scores',
    slug: 'scherzo-scores',
    description: 'A catalogue of my sheet music arrangements',
  },
]
