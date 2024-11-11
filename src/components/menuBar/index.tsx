'use client'

import { useApp } from '../AppProvider'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'

export default function MenuBar() {
  const { signedIn } = useApp()

  if (!signedIn) return null

  return (
    <>
      <div className="hidden md:block lg:w-72" aria-label="Sidebar">
        <DesktopMenu />
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </>
  )
}
