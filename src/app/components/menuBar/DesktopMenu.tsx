'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { MenuItemInterface } from '.'
import { Site } from '@/library/sites'

interface DesktopMenuProps {
  menuItems: MenuItemInterface[]
  sites: Site[]
}

export default function DesktopMenu({ menuItems, sites }: DesktopMenuProps) {
  const path = usePathname()
  console.log(path)

  return (
    <nav className="space-y-4">
      {menuItems.map((menuItem) => (
        <Link
          href={menuItem.slug}
          key={menuItem.slug}
          className={clsx(
            'px-2.5 py-2 text-base font-medium shrink-0 rounded w-full block md:hover:text-blue-500 transition-colors duration-200 md:active:text-blue-500',
            path === '/' && 'bg-blue-500/10'
          )}
        >
          {menuItem.displayName}
        </Link>
      ))}
      <hr className="my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5" />
      {sites.map((site) => (
        <Link
          href={site.slug}
          key={site.slug}
          className={clsx(
            'px-2.5 py-2 text-base font-medium shrink-0 rounded w-full block md:hover:text-blue-500 transition-colors duration-200 md:active:text-blue-500',
            path === `/${site.slug}` && 'bg-blue-500/10'
          )}
        >
          {site.displayName}
        </Link>
      ))}
      <hr className="my-3 w-full h-px border-0 bg-gradient-to-r from-violet-800/5 via-violet-800/20 to-violet-800/5" />
      <span
        className={clsx(
          'px-2.5 py-2 text-sm shrink-0 rounded w-full block md:hover:text-blue-500 transition-colors duration-200 md:active:text-blue-500',
          'bg-blue-500/10'
        )}
      >
        {`Last 30 days`}
      </span>
      <span
        className={clsx(
          'px-2.5 py-2 text-sm shrink-0 rounded w-full block md:hover:text-blue-500 transition-colors duration-200 md:active:text-blue-500'
        )}
      >
        {`All time`}
      </span>
    </nav>
  )
}
