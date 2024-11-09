'use client'
import DesktopMenu from './DesktopMenu'
import { sitesData } from '@/library/sites'
import MobileMenu from './MobileMenu'

export interface MenuItemInterface {
  displayName: string
  slug: string
}

const menuItems: MenuItemInterface[] = [{ displayName: 'Home', slug: '/' }]

export default function MenuBar() {
  return (
    <>
      <div className="hidden md:block lg:w-72">
        <DesktopMenu menuItems={menuItems} sites={sitesData} />
      </div>
      <div className="block md:hidden">
        <MobileMenu menuItems={menuItems} sites={sitesData} />
      </div>
    </>
  )
}
