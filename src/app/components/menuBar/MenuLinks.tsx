import { MenuItemInterface } from '.'
import MenuItem from './MenuItem'
import { Site } from '@/library/sites'

export function NavigationLinks({
  menuItems,
  currentPath,
}: {
  menuItems: MenuItemInterface[]
  currentPath: string
}) {
  return menuItems.map((menuItem) => (
    <MenuItem
      key={menuItem.slug}
      href={menuItem.slug}
      displayName={menuItem.displayName}
      isActive={currentPath === '/'}
    />
  ))
}

export function SiteLinks({
  sites,
  currentPath,
}: {
  sites: Site[]
  currentPath: string
}) {
  return sites.map((site) => (
    <MenuItem
      key={site.slug}
      href={site.slug}
      displayName={site.displayName}
      isActive={currentPath === `/${site.slug}`}
    />
  ))
}
