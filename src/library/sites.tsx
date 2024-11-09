import { StaticImageData } from 'next/image'
import arrayOfSunshineIcon from '@/app/graphics/icons/array-of-sunshine-icon.png'

export interface Site {
  displayName: string
  slug: string
  description: string
  icon: StaticImageData
}

export const sitesData: Site[] = [
  {
    displayName: 'Array of Sunshine',
    slug: 'array-of-sunshine',
    description: 'Web development blog',
    icon: arrayOfSunshineIcon,
  },
  {
    displayName: 'Dan Edwards Creative',
    slug: 'dan-edwards-creative',
    description: 'Pop music production and songwriting portfolio site',
    icon: arrayOfSunshineIcon,
  },
  {
    displayName: 'Dan Digresses',
    slug: 'dan-digresses',
    description: 'Personal blog without a theme',
    icon: arrayOfSunshineIcon,
  },
  {
    displayName: 'Dan Edwards Developer',
    slug: 'dan-edwards-developer',
    description: 'Web development portfolio site',
    icon: arrayOfSunshineIcon,
  },
  {
    displayName: 'Digital Book Shop',
    slug: 'digital-book-shop',
    description: 'Online bookshop selling digital downloads',
    icon: arrayOfSunshineIcon,
  },
]
