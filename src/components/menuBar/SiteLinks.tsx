import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { sitesData } from '@/library/sites'

import { baseStyles, colourStyles, sizeStyles } from './styles'

export default function SiteLinks({ gap = 'gap-y-1' }: { gap?: string }) {
  const currentPath = usePathname()
  return (
    <ul className={clsx('flex flex-col', gap)}>
      {sitesData.map((site) => {
        const isActive = currentPath === `/${site.slug}`

        return (
          <li key={site.slug}>
            <Link
              href={`/${site.slug}`}
              aria-current={isActive && 'page'}
              className={clsx(
                baseStyles,
                sizeStyles['base'],
                colourStyles.text['base'],
                isActive ? colourStyles.active : colourStyles.inactive,
              )}
            >
              {site.displayName}
              {isActive && <span className="sr-only"> (current page)</span>}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
