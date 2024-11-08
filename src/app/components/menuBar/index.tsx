import DesktopMenu from './DesktopMenu'
import { sitesData } from '@/library/sites'

export interface MenuItemInterface {
  displayName: string
  slug: string
}

const menuItems: MenuItemInterface[] = [{ displayName: 'Home', slug: '/' }]

export default function MenuBar() {
  return <DesktopMenu menuItems={menuItems} sites={sitesData} />
}
